import type AuthApi from '@/api/auth'
import type BaseApi from '@/api/base'

export interface LoginPayload {
  login: string
  password: string
}

export interface UserData {
  expiresIn: string
  Authorization: string
  data: {
    id: string
    login: string
    name: string
    surname: string
    role: string
    createdAt: string
    updatedAt: string
  }
  isAuthenticated: boolean
}

export interface ClientProps {
  auth: AuthApi
  users: BaseApi
}

export interface NavBarListProps {
  link: string
  title: string
  icon: string
  role: string
}
