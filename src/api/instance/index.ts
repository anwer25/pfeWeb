import axios from 'axios'
import { useStorage } from '@vueuse/core'
import { authStorageData } from '@/lib'
const $axios = axios.create({ baseURL: 'http://localhost:3000/' })

$axios.interceptors.request.use((requestConfig) => {
  const storage = useStorage('userData', authStorageData)
  const token = storage.value.Authorization
  const isPublicRoute = ['auth/login', 'auth/refresh'].includes(requestConfig.url as string)
  if (!isPublicRoute && token && token !== null) {
    requestConfig.headers.Authorization = `Bearer ${token}`
  }
  return requestConfig
})

$axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { message } = error.response.data.errors[0]
    return Promise.reject(new Error(message))
  }
)

export default $axios
