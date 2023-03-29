import { IDancer } from '@types-app/models/dancer.model'
import { BehaviorSubject } from 'rxjs'

export const DancerStore = {
  /**
   * list of dancers via api
   * @type array de type IDancer[]
   */
  dancers$: new BehaviorSubject<IDancer[]>([]),

  /**
   * dancer select
   * @type IDancer
   */
  dancerSelected$: new BehaviorSubject<IDancer>({}),
}
