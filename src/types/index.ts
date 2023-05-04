import type AuthApi from '@/api/auth'
import type BaseApi from '@/api/base'

export interface LoginPayload {
  login: string
  password: string
}

export interface UserData {
  expiresIn: null | string
  Authorization: null | string
  data: {
    id: null | string
    login: null | string
    name: null | string
    surname: null | string
    role: null | string
    createdAt: null | string
    updatedAt: null | string
  }
}

export interface ClientProps {
  auth: AuthApi
  users: BaseApi
}
