import { BehaviorSubject } from 'rxjs'
import { IHobby } from '@types-app/models/hobby.model'

export const HobbyStore = {
  /**
   * list of hobby via api
   * @type array de type IHobby[]
   */
  hobbies$: new BehaviorSubject<IHobby[]>([]),

  /**
   * hobby select
   * @type IHobby
   */
  hobbySelected$: new BehaviorSubject<IHobby>({}),
}
