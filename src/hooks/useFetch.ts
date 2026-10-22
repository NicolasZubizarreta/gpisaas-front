import { useEffect, useState } from 'react'

type Result<T> = {
  url: string
  data: T | null
  error: Error | null
}

export function useFetch<T>(url: string) {
  const [result, setResult] = useState<Result<T> | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json() as Promise<T>
      })
      .then((data) => setResult({ url, data, error: null }))
      .catch((error: Error) => {
        if (error.name !== 'AbortError') {
          setResult({ url, data: null, error })
        }
      })

    return () => controller.abort()
  }, [url])

  const isCurrent = result !== null && result.url === url

  return {
    data: isCurrent ? result.data : null,
    error: isCurrent ? result.error : null,
    loading: !isCurrent,
  }
}