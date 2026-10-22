import type { Status } from '../types'

export type Filters = {
  status: Status | 'ALL'
  memberId: string | null
  search: string
}

export type FiltersAction =
  | { type: 'setStatus'; status: Filters['status'] }
  | { type: 'setMember'; memberId: string | null }
  | { type: 'setSearch'; search: string }
  | { type: 'reset' }

export const initialFilters: Filters = {
  status: 'ALL',
  memberId: null,
  search: '',
}

export function filtersReducer(state: Filters, action: FiltersAction): Filters {
  switch (action.type) {
    case 'setStatus':
      return { ...state, status: action.status }
    case 'setMember':
      return { ...state, memberId: action.memberId }
    case 'setSearch':
      return { ...state, search: action.search }
    case 'reset':
      return initialFilters
  }
}