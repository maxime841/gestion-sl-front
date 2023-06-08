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

  /**
   * add one Host
   * @type IHost
   */
  addHost$: new BehaviorSubject<IHost>({}),

  /**
   * update one Host
   * @type IHost
   */
  updateHost$: new BehaviorSubject<IHost>({}),

  /**
   * delete one Host
   * @type IHost
   */
  deleteHost$: new BehaviorSubject<IHost>({}),
}
