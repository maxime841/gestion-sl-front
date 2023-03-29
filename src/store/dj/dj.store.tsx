import { IDj } from '@types-app/models/dj.model'
import { BehaviorSubject } from 'rxjs'

export const DjStore = {
  /**
   * list of djs via api
   * @type array de type IDj[]
   */
  djs$: new BehaviorSubject<IDj[]>([]),

  /**
   * dj select
   * @type IDj
   */
  djSelected$: new BehaviorSubject<IDj>({}),
}
