import axios from 'axios'
import { useStorage } from '@vueuse/core'
import { authStorageData } from '@/lib'
const $axios = axios.create({ baseURL: 'http://localhost:3000/' })

export const storage = useStorage('userData', authStorageData)

$axios.interceptors.request.use((requestConfig) => {
  
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
    console.log(error)
    const { message } = error.response.data.errors[0]
    return Promise.reject(new Error(message))
  }
)

export default $axios
