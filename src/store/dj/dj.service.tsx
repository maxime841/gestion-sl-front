import { http } from '@config-app/http/http.instance'
import { IDjsResponse, IDjResponse, IDeleteDjResponse, IAddDjResponse } from '@types-app/models/dj.model'
import { DjStore } from './dj.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const DjService = {
  /**
   * get all club
   */
  getAllDjs: async () => {
    const res = await http.get<IDjsResponse>('/dj') // ici on a response
    DjStore.djs$.next([...res.data.djs!])
  },

  /**
   * get one dj via id
   * @param id string
   */
  getDj: async (id: string) => {
    const res = await http.get<IDjResponse>(`dj/${id}`)
    DjStore.djSelected$.next({ ...res.data.dj })
  },

  addOneDj: async (name: string, style: string, presentation: string, date_entrance: string) => {
    // add dj
  const res = await http.post<IAddDjResponse>(`${Eroute.ADD_DJ}`, {
    name,
    style,
    presentation,
    date_entrance,
  })
  DjStore.addDj$.next({ ...res.data.addDj })
},

/**
 * update dj via FormData
 * @param dj IDj
 */
updateDj: async (name: string, style: string, presentation: string, date_entrance: string, id: any) => {
  try {
    const res = await http.put<IDjResponse>(
      `${Eroute.UPDATE_DJ}${id}`, {
      name,
      style,
      presentation,
      date_entrance,
      })
    DjStore.updateDj$.next({ ...res.data.updateDj! })
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
 * delete dj via FormData
 * @param dj IDj
 */
deleteDj: async (id: string) => {
  try {
    const res = await http.delete<IDeleteDjResponse>(
      `${Eroute.DELETE_DJ}${id}`,)

    DjStore.deleteDj$.next({ ...res.data.deleteDj! })
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
