import { useContext } from 'react'
import { FiltersContext, FiltersDispatchContext } from '../context/filtersContext'

export function useFilters() {
  const filters = useContext(FiltersContext)
  if (!filters) throw new Error('useFilters must be used inside <FiltersProvider>')
  return filters
}

export function useFiltersDispatch() {
  const dispatch = useContext(FiltersDispatchContext)
  if (!dispatch) throw new Error('useFiltersDispatch must be used inside <FiltersProvider>')
  return dispatch
}