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

  /**
   * add one dancer
   * @type IDancer
   */
  addDancer$: new BehaviorSubject<IDancer>({}),

  /**
   * update one Dancer
   * @type IDancer
   */
  updateDancer$: new BehaviorSubject<IDancer>({}),

  /**
   * delete one Dancer
   * @type IDancer
   */
  deleteDancer$: new BehaviorSubject<IDancer>({}),
}
