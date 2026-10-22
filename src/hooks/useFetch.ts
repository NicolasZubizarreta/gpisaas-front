import { useEffect, useState } from 'react'

type Resultat<T> = {
  url: string
  data: T | null
  error: Error | null
}

export function useFetch<T>(url: string) {
  const [resultat, setResultat] = useState<Resultat<T> | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((reponse) => {
        if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`)
        return reponse.json() as Promise<T>
      })
      .then((data) => setResultat({ url, data, error: null }))
      .catch((error: Error) => {
        if (error.name !== 'AbortError') {
          setResultat({ url, data: null, error })
        }
      })

    return () => controller.abort()
  }, [url])

  const aJour = resultat !== null && resultat.url === url

  return {
    data: aJour ? resultat.data : null,
    error: aJour ? resultat.error : null,
    loading: !aJour,
  }
}