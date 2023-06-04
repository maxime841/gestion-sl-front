import { BehaviorSubject } from 'rxjs'
import { IActivity } from '@types-app/models/activity.model'

export const ActivityStore = {
  /**
   * list of activity via api
   * @type array de type IActivity[]
   */
  activities$: new BehaviorSubject<IActivity[]>([]),

  /**
   * activity select
   * @type IActivity
   */
  activitySelected$: new BehaviorSubject<IActivity>({}),

  /**
   * add one activity
   * @type IActivity
   */
  addActivity$: new BehaviorSubject<IActivity>({}),

  /**
   * update one activity
   * @type IActivity
   */
  updateActivity$: new BehaviorSubject<IActivity>({}),

  /**
   * delete one activity
   * @type IActivity
   */
  deleteActivity$: new BehaviorSubject<IActivity>({}),
}
