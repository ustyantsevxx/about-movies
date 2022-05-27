import axios from 'axios'
import { getCookie } from 'cookies-next'
import { FC } from 'react'

export const WaitAuth: FC = props => {
  const token = getCookie('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return <>{props.children}</>
}
