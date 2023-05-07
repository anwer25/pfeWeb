import $axios, { storage } from '../instance'
import { useCommon } from '@/stores'
import { useStorage } from '@vueuse/core'
import type { Axios } from 'axios'
import type { LoginPayload, UserData } from '@/types'
import { authStorageData } from '@/lib'

class AuthApi {
  axios: Axios
  constructor() {
    this.axios = $axios
  }

  get store() {
    return useCommon()
  }

  async login(payload: LoginPayload) {
    try {
      this.store.setIsLoading(true)
      const { data } = await this.axios.post('/auth/login', payload)
      this.saveToken(data)
      return data.isAuthenticated
    } catch ({ message }: any) {
      this.store.setSnackBar({ show: true, message })
    } finally {
      this.store.setIsLoading(false)
    }
  }

  logout() {
    const { value } = useStorage('userData', authStorageData)
  }

  saveToken({ Authorization, data, expiresIn, isAuthenticated }: UserData) {
    storage.value.Authorization = Authorization
    storage.value.data = data
    storage.value.expiresIn = expiresIn
    storage.value.isAuthenticated = isAuthenticated
  }
}

export default AuthApi
