import { BehaviorSubject } from 'rxjs'
import { ILand } from '@types-app/models/land.model'

export const LandStore = {
  /**
   * list of land via api
   * @type array de type ILand[]
   */
  lands$: new BehaviorSubject<ILand[]>([]),

  /**
   * land select
   * @type ILand
   */
  landSelected$: new BehaviorSubject<ILand>({}),

  /**
   * add one land
   * @type ILand
   */
  addLand$: new BehaviorSubject<ILand>({}),
}
