import type { NavBarListProps } from '@/types'

export const authStorageData = {
  expiresIn: '',
  Authorization: '',
  data: {
    id: '',
    login: '',
    name: '',
    surname: '',
    role: '',
    createdAt: '',
    updatedAt: ''
  },
  isAuthenticated: false
}

export const sideBarLinks: NavBarListProps[] = [
  {
    link: '/users',
    title: 'Users',
    icon: 'fa-solid fa-user',
    role: 'Admin'
  }
]
