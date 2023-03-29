import { http } from '@config-app/http/http.instance'
import { IHostsResponse, IHostResponse } from '@types-app/models/host.model'
import { HostStore } from './/host.store'

export const HostService = {
  /**
   * get all host
   */
  getAllHosts: async () => {
    const res = await http.get<IHostsResponse>('/host') // ici on a response
    HostStore.hosts$.next([...res.data.hosts!])
  },

  /**
   * get one host via id
   * @param id string
   */
  getHost: async (id: string) => {
    const res = await http.get<IHostResponse>(`host/${id}`)
    HostStore.hostSelected$.next({ ...res.data.host })
  },

}
