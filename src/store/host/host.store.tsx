import { IHost } from '@types-app/models/host.model'
import { BehaviorSubject } from 'rxjs'

export const HostStore = {
  /**
   * list of hosts via api
   * @type array de type IHost[]
   */
  hosts$: new BehaviorSubject<IHost[]>([]),

  /**
   * host select
   * @type IHost
   */
  hostSelected$: new BehaviorSubject<IHost>({}),
}
