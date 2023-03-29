import { http } from '@config-app/http/http.instance'
import { IDancersResponse, IDancerResponse } from '@types-app/models/dancer.model'
import { DancerStore } from './dancer.store'

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

}
