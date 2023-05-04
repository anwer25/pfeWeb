import Base from '../base'
import Auth from '../auth'

import type { ClientProps } from '@/types'

const Client: ClientProps = {
  auth: new Auth(),
  users: new Base('users')
}

export default Client
