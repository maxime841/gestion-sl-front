import { TokenHook } from './token/token.hook'
import { TokenService } from './token/token.service'
import { TokenStore } from './token/token.store'
import { userHook } from './user/user.hook'
import { userService } from './user/user.service'
import { userStore } from './user/user.store'

export const Store = {
    token: {
        ...TokenStore,
        ...TokenService,
        ...TokenHook,
      },
      user: {
        ...userStore,
        ...userService,
        ...userHook,
      },
}