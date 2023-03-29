import { AppHook } from './app/app.hook'
import { AppService } from './app/app.service'
import { AppStore } from './app/app.store'
import { ClubHook } from './club/club.hook'
import { ClubService } from './club/club.service'
import { ClubStore } from './club/club.store'
import { DancerHook } from './dancer/dancer.hook'
import { DancerService } from './dancer/dancer.service'
import { DancerStore } from './dancer/dancer.store'
import { DarkModeHook } from './dark-mode/dark-mode.hook'
import { DarkModeService } from './dark-mode/dark-mode.service'
import { DarkModeStore } from './dark-mode/dark-mode.store'
import { DjHook } from './dj/dj.hook'
import { DjService } from './dj/dj.service'
import { DjStore } from './dj/dj.store'
import { HostHook } from './host/host.hook'
import { HostService } from './host/host.service'
import { HostStore } from './host/host.store'
import { MenuBurgerHook } from './menu-burger/menu-burger.hook'
import { MenuBurgerService } from './menu-burger/menu-burger.service'
import { MenuBurgerStore } from './menu-burger/menu-burger.store'
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
      app: {
        ...AppStore,
        ...AppService,
        ...AppHook
      },
      menuBurger: {
        ...MenuBurgerStore,
        ...MenuBurgerService,
        ...MenuBurgerHook,
      },
      darkmode: {
        ...DarkModeStore,
        ...DarkModeService,
        ...DarkModeHook,
      },
      club: {
        ...ClubStore,
        ...ClubService,
        ...ClubHook,
      },
      dj: {
        ...DjStore,
        ...DjService,
        ...DjHook,
      },
      host: {
        ...HostStore,
        ...HostService,
        ...HostHook,
      },
      dancer: {
        ...DancerStore,
        ...DancerService,
        ...DancerHook,
      }
}
