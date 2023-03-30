import { http } from '@config-app/http/http.instance'
import { IHobbiesResponse, IHobbyResponse } from '@types-app/models/hobby.model'
import { HobbyStore } from './hobby.store'

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

}
