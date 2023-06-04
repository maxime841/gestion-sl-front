import { http } from '@config-app/http/http.instance'
import { IActivity, IDeleteActivityResponse, IAddActivityResponse, IActivityResponse } from '@types-app/models/activity.model'
import { ActivityStore } from './activity.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const ActivityService = {
  /**
   * get all activities
   */
  getAllActivities: async () => {
    const res = await http.get<IActivity>('/activity') // ici on a response
    ActivityStore.activities$.next([...res.data.activities!])
  },

  /**
   * get one activity via id
   * @param id string
   */
  getActivity: async (id: string) => {
    const res = await http.get<IActivityResponse>(`activity/${id}`)
    ActivityStore.activitySelected$.next({ ...res.data.activity })
  },

  /**
   * ajouter une activitée
   * @param name string
   * @param owner string
   * @param presentation string
   * @param description string
   * @param price string
   * @param tag string
   */
  addOneActivity: async (name: string, owner: string, presentation: string, description: string, price: string, tag: string) => {
    // add activity
  const res = await http.post<IAddActivityResponse>(`${Eroute.ADD_ACTIVITY}`, {
    name,
    owner,
    presentation,
    description,
    price,
    tag
  })
  ActivityStore.addActivity$.next({ ...res.data.addActivity })
},

/**
 * update activity via FormData
 * @param activity IActivity
 */
updateActivity: async (name: string, owner: string, presentation: string, description: string, price: string, tag: string, id: any) => {
  try {
    const res = await http.put<IActivityResponse>(
      `${Eroute.UPDATE_ACTIVITY}${id}`, {
      name,
      owner,
      presentation,
      description,
      price,
      tag
      })
    ActivityStore.updateActivity$.next({ ...res.data.updateActivity! })
  } catch (error) {
    AppService.errorMessage(
      userStore.updateProfilError$,
      error,
      Eerror.FORGOT_PASSWORD,
    )
    userStore.resetPasswordLoading$.next(false)
    return false
  }
},

/**
 * delete activity via FormData
 * @param activity IActivity
 */
deleteActivity: async (id: string) => {
  try {
    const res = await http.delete<IDeleteActivityResponse>(
      `${Eroute.DELETE_ACTIVITY}${id}`,)

    ActivityStore.deleteActivity$.next({ ...res.data.deleteActivity! })
  } catch (error) {
    AppService.errorMessage(
      userStore.updateProfilError$,
      error,
      Eerror.FORGOT_PASSWORD,
    )
    userStore.resetPasswordLoading$.next(false)
    return false
  }
},

}
