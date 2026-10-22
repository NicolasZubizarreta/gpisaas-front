import { useTranslation } from 'react-i18next'
import type { Filters } from '../context/filtersReducer'
import { useFetch } from '../hooks/useFetch'
import { useFilters, useFiltersDispatch } from '../hooks/useFilters'
import { API_URL } from '../services/api'
import { STATUSES, type Member } from '../types'

export function FilterBar() {
  const { t } = useTranslation()
  const filters = useFilters()
  const dispatch = useFiltersDispatch()
  const { data: members } = useFetch<Member[]>(`${API_URL}/members`)

  return (
    <div role="group" aria-label={t('filters.label')}>
      <label>
        {t('filters.status')}
        <select
          value={filters.status}
          onChange={(event) =>
            dispatch({ type: 'setStatus', status: event.target.value as Filters['status'] })
          }
        >
          <option value="ALL">{t('filters.allStatuses')}</option>
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {t(`status.${status}`)}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t('filters.member')}
        <select
          value={filters.memberId ?? ''}
          onChange={(event) =>
            dispatch({ type: 'setMember', memberId: event.target.value || null })
          }
        >
          <option value="">{t('filters.allMembers')}</option>
          {members?.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
      </label>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>
        {t('filters.reset')}
      </button>
    </div>
  )
}