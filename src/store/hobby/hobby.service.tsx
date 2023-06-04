import { http } from '@config-app/http/http.instance'
import { IAddHobbyResponse, IDeleteHobbyResponse, IHobbiesResponse, IHobbyResponse } from '@types-app/models/hobby.model'
import { HobbyStore } from './hobby.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const HobbyService = {
  /**
   * get all hobbies
   */
  getAllHobbies: async () => {
    const res = await http.get<IHobbiesResponse>('/hobby') // ici on a response
    HobbyStore.hobbies$.next([...res.data.hobbies!])
  },

  /**
   * get one hobby via id
   * @param id string
   */
  getHobby: async (id: string) => {
    const res = await http.get<IHobbyResponse>(`hobby/${id}`)
    HobbyStore.hobbySelected$.next({ ...res.data.hobby })
  },

  /**
   * ajouter un terrain de loisir
   * @param name string
   * @param owner string
   * @param presentation string
   * @param description string
   */
  addOneHobby: async (name: string, owner: string, presentation: string, description: string) => {
    // add hobby
  const res = await http.post<IAddHobbyResponse>(`${Eroute.ADD_HOBBY}`, {
    name,
    owner,
    presentation,
    description,
  })
  HobbyStore.addHobby$.next({ ...res.data.addHobby })
},

/**
 * update hobby via FormData
 * @param hobby IHobby
 */
updateHobby: async (name: string, owner: string, presentation: string, description: string, id: any) => {
  try {
    const res = await http.put<IHobbyResponse>(
      `${Eroute.UPDATE_HOBBY}${id}`, {
      name,
      owner,
      presentation,
      description
      })
    console.log('response', res)
    HobbyStore.updateHobby$.next({ ...res.data.updateHobby! })
    console.log('ma new res', res.data.updateHobby)
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
 * delete hobby via FormData
 * @param hobby IHobby
 */
deleteHobby: async (id: string) => {
  try {
    const res = await http.delete<IDeleteHobbyResponse>(
      `${Eroute.DELETE_HOBBY}${id}`,)

    HobbyStore.deleteHobby$.next({ ...res.data.deleteHobby! })
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
