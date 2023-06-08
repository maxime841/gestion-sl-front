import { http } from '@config-app/http/http.instance'
import { IHostsResponse, IHostResponse, IAddHostResponse, IDeleteHostResponse } from '@types-app/models/host.model'
import { HostStore } from './/host.store'
import { Eroute } from '@types-app/route.type'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

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
  addOneHost: async (name: string, presentation: string, date_entrance: string) => {
    // add Host
  const res = await http.post<IAddHostResponse>(`${Eroute.ADD_HOST}`, {
    name,
    presentation,
    date_entrance,
  })
  HostStore.addHost$.next({ ...res.data.addHost })
},

/**
 * update Host via FormData
 * @param Host IHost
 */
updateHost: async (name: string, presentation: string, date_entrance: string, id: any) => {
  try {
    const res = await http.put<IHostResponse>(
      `${Eroute.UPDATE_HOST}${id}`, {
      name,
      presentation,
      date_entrance,
      })
    HostStore.updateHost$.next({ ...res.data.updateHost! })
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
 * delete Host via FormData
 * @param Host IHost
 */
deleteHost: async (id: string) => {
  try {
    const res = await http.delete<IDeleteHostResponse>(
      `${Eroute.DELETE_HOST}${id}`,)

    HostStore.deleteHost$.next({ ...res.data.deleteHost! })
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
