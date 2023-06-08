import { http } from '@config-app/http/http.instance'
import { IDancersResponse, IDancerResponse, IDeleteDancerResponse, IAddDancerResponse } from '@types-app/models/dancer.model'
import { DancerStore } from './dancer.store'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'
import { Eroute } from '@types-app/route.type'

export const DancerService = {
  /**
   * get all dancer
   */
  getAllDancers: async () => {
    const res = await http.get<IDancersResponse>('/dancer') // ici on a response
    DancerStore.dancers$.next([...res.data.dancers!])
  },

  /**
   * get one dancer via id
   * @param id string
   */
  getDancer: async (id: string) => {
    const res = await http.get<IDancerResponse>(`dancer/${id}`)
    DancerStore.dancerSelected$.next({ ...res.data.dancer })
  },

  addOneDancer: async (name: string, presentation: string, date_entrance: string) => {
    // add Dancer
  const res = await http.post<IAddDancerResponse>(`${Eroute.ADD_DANCER}`, {
    name,
    presentation,
    date_entrance,
  })
  DancerStore.addDancer$.next({ ...res.data.addDancer })
},

/**
 * update Dancer via FormData
 * @param Dancer IDancer
 */
updateDancer: async (name: string, presentation: string, date_entrance: string, id: any) => {
  try {
    const res = await http.put<IDancerResponse>(
      `${Eroute.UPDATE_DANCER}${id}`, {
      name,
      presentation,
      date_entrance,
      })
    DancerStore.updateDancer$.next({ ...res.data.updateDancer! })
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
 * delete Dancer via FormData
 * @param Dancer IDancer
 */
deleteDancer: async (id: string) => {
  try {
    const res = await http.delete<IDeleteDancerResponse>(
      `${Eroute.DELETE_DANCER}${id}`,)

    DancerStore.deleteDancer$.next({ ...res.data.deleteDancer! })
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
