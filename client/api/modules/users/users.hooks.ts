import axios from 'axios'
import { getCookie, removeCookies } from 'cookies-next'
import { useRouter } from 'next/router'
import { useQuery, useQueryClient } from 'react-query'

import { getCurrentUser } from './users.service'

export const USER_QUERY_KEY = 'user'

export const useAuth = () => {
  const { data } = useQuery(USER_QUERY_KEY, getCurrentUser, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!getCookie('token')
  })

  const queryClient = useQueryClient()
  const router = useRouter()

  const logout = async () => {
    queryClient.removeQueries(USER_QUERY_KEY)
    axios.defaults.headers.common['Authorization'] = ''
    removeCookies('token')
    await router.push('/')
  }

  return {
    user: data,
    logout
  }
}
