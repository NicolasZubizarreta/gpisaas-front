import { createContext, type Dispatch } from 'react'
import type { Filters, FiltersAction } from './filtersReducer'

export const FiltersContext = createContext<Filters | null>(null)

export const FiltersDispatchContext = createContext<Dispatch<FiltersAction> | null>(null)