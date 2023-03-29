import { http } from '@config-app/http/http.instance'
import { IDjsResponse, IDjResponse } from '@types-app/models/dj.model'
import { DjStore } from './dj.store'

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

}
