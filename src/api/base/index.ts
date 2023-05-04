import $axios from '../instance'
import { useCommon } from '@/stores'
import type { Axios } from 'axios'

class BaseApi {
  axios: Axios
  url: string
  constructor(url: string) {
    this.axios = $axios
    this.url = url
  }

  get store() {
    return useCommon()
  }

  async get(query: string = '') {
    try {
      this.store.setIsLoading(true)
      const { data: data } = await this.axios.get(`${this.url}${query}`)
      return data
    } catch ({ message }: any) {
      this.store.setSnackBar({ show: true, message })
    } finally {
      this.store.setIsLoading(false)
    }
  }
  async create(payload: object) {
    try {
      this.store.setIsLoading(true)
      const {
        data: { data }
      } = await this.axios.post(this.url, payload)
      return data
    } catch (message) {
      this.store.setSnackBar({ show: true, message })
    } finally {
      this.store.setIsLoading(false)
    }
  }

  async patch(id: string, payload: object) {
    try {
      this.store.setIsLoading(true)
      const {
        data: { data }
      } = await this.axios.patch(`${this.url}/${id}`, payload)
      return data
    } catch (message) {
      this.store.setSnackBar({ show: true, message })
    } finally {
      this.store.setIsLoading(false)
    }
  }

  async delete(id: string) {
    try {
      this.store.setIsLoading(true)
      const {
        data: { data }
      } = await this.axios.delete(`${this.url}/${id}`)
      return data
    } catch ({ message }: any) {
      this.store.setSnackBar({ show: true, message })
    } finally {
      this.store.setIsLoading(false)
    }
  }
}

export default BaseApi
