import { useHistory, useLocation } from "react-router-dom"

import qs from "qs"
import { useCallback } from "react"

export const useQueryState = (query: any) => {
  const location = useLocation()
  const history = useHistory()

  const setQuery = useCallback(
    (value: any) => {
      const existingQueries = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      })

      const queryString = qs.stringify(
        { ...existingQueries, [query]: value },
        { skipNulls: true }
      )

      history.push(`${location.pathname}?${queryString}`)
    },
    [history, location, query]
  )

  return [
    qs.parse(location.search, { ignoreQueryPrefix: true })[query],
    setQuery,
  ]
} 