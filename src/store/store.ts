import { TokenHook } from './token/token.hook'
import { TokenService } from './token/token.service'
import { TokenStore } from './token/token.store'

export const Store = {
    token: {
        ...TokenStore,
        ...TokenService,
        ...TokenHook,
      },
}