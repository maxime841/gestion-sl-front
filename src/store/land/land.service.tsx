import { http } from '@config-app/http/http.instance'
import { ILandsResponse, ILandResponse, IAddLandResponse, ILand, IUpdateLandResponse, IDeleteLandResponse } from '@types-app/models/land.model'
import { LandStore } from './land.store'
import { Eroute } from '@types-app/route.type'
import { IPicture } from '@types-app/models/picture.type'
import { Store } from '@store/store'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const LandService = {
  /**
   * get all lands
   */
  getAllLands: async () => {
    const res = await http.get<ILandsResponse>('lands') // ici on a response
    LandStore.lands$.next([...res.data.lands!])
  },
  /**
   * get one land via id
   * @param id string
   */
  getLand: async (id: string) => {
    const res = await http.get<ILandResponse>(`land/${id}`)
    LandStore.landSelected$.next({ ...res.data.land })
  },

  /**
   * ajouter un terrain
   * @param name string
   * @param owner string
   * @param presentation string
   * @param description string
   * @param group string
   * @param prims string
   * @param remaining_prims string
   * @param date_buy string
   * @param pictureFavori string
   */
  addOneLand: async (name: string, owner: string, presentation: string, description: string, group: string, prims: string, remaining_prims: string, date_buy: string, picture: string) => {
      // add land
    const res = await http.post<IAddLandResponse>(`${Eroute.ADD_LAND}`, {
      name,
      owner,
      presentation,
      description,
      group,
      prims,
      remaining_prims,
      date_buy,
      picture
    })
  },

  /**
   * update land via FormData
   * @param land ILand
   */
  updateLand: async (name: string, owner: string, presentation: string, description: string, group: string, prims: string, remaining_prims: string, date_buy: string, id: any) => {
    try {
      const res = await http.put<IUpdateLandResponse>(
        `${Eroute.UPDATE_LAND}${id}`, {
        name,
        owner,
        presentation,
        description,
        group,
        prims,
        remaining_prims,
        date_buy
        })
      console.log('response', res)
      LandStore.updateLand$.next({ ...res.data.updateLand! })
      console.log('ma new res', res.data.updateLand)
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
   * delete land via FormData
   * @param land ILand
   */
  deleteLand: async (id: string) => {
    try {
      console.log('mon land', id)

      const res = await http.delete<IDeleteLandResponse>(
        `${Eroute.DELETE_LAND}${id}`,)
        console.log('ma res', res)

      LandStore.deleteLand$.next({ ...res.data.deleteLand! })
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
