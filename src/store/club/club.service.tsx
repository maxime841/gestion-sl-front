import { http } from '@config-app/http/http.instance'
import { IClubsResponse, IClubResponse, IAddClubResponse, IDeleteClubResponse } from '@types-app/models/club.model'
import { ClubStore } from './club.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const ClubService = {
  /**
   * get all clubs
   */
  getAllClubs: async () => {
    const res = await http.get<IClubsResponse>('/club') // ici on a response
    ClubStore.clubs$.next([...res.data.clubs!])
  },

  /**
   * get one club via id
   * @param id string
   */
  getClub: async (id: string) => {
    const res = await http.get<IClubResponse>(`club/${id}`)
    ClubStore.clubSelected$.next({ ...res.data.club })
  },

  addOneClub: async (name: string, owner: string, presentation: string, description: string) => {
    // add Club
  const res = await http.post<IAddClubResponse>(`${Eroute.ADD_CLUB}`, {
    name,
    owner,
    presentation,
    description,
  })
  ClubStore.addClub$.next({ ...res.data.addClub })
},

/**
 * update Club via FormData
 * @param Club IClub
 */
updateClub: async (name: string, owner: string, presentation: string, description: string, id: any) => {
  try {
    const res = await http.put<IClubResponse>(
      `${Eroute.UPDATE_CLUB}${id}`, {
      name,
      owner,
      presentation,
      description,
      })
    ClubStore.updateClub$.next({ ...res.data.updateClub! })
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
 * delete Club via FormData
 * @param Club IClub
 */
deleteClub: async (id: string) => {
  try {
    const res = await http.delete<IDeleteClubResponse>(
      `${Eroute.DELETE_CLUB}${id}`,)

    ClubStore.deleteClub$.next({ ...res.data.deleteClub! })
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
