import { BehaviorSubject } from 'rxjs'
import { IClub } from '@types-app/models/club.model'

export const ClubStore = {
  /**
   * list of club via api
   * @type array de type IClub[]
   */
  clubs$: new BehaviorSubject<IClub[]>([]),

  /**
   * club select
   * @type IClub
   */
  clubSelected$: new BehaviorSubject<IClub>({}),

  /**
   * add one Club
   * @type IClub
   */
  addClub$: new BehaviorSubject<IClub>({}),

  /**
   * update one Club
   * @type IClub
   */
  updateClub$: new BehaviorSubject<IClub>({}),

  /**
   * delete one Club
   * @type IClub
   */
  deleteClub$: new BehaviorSubject<IClub>({}),
}
