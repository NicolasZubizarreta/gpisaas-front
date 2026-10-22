import { useReducer, type ReactNode } from 'react'
import { FiltersContext, FiltersDispatchContext } from './filtersContext'
import { filtersReducer, initialFilters } from './filtersReducer'

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, dispatch] = useReducer(filtersReducer, initialFilters)

  return (
    <FiltersDispatchContext value={dispatch}>
      <FiltersContext value={filters}>{children}</FiltersContext>
    </FiltersDispatchContext>
  )
}