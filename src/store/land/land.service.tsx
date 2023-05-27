import { http } from '@config-app/http/http.instance'
import { ILandsResponse, ILandResponse, IAddLandResponse, ILand } from '@types-app/models/land.model'
import { LandStore } from './land.store'
import { Eroute } from '@types-app/route.type'
import { IHouse } from '@types-app/models/house.model'
import { IPicture } from '@types-app/models/picture.type'

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
   */
  addOneLand: async (name: string, owner: string, presentation: string, description: string, group: string, prims: string, remaining_prims: string, date_buy: string) => {
      // add land
    const res = await http.post<IAddLandResponse>(`${Eroute.ADD_LAND}`, {
      name,
      owner,
      presentation,
      description,
      group,
      prims,
      remaining_prims,
      date_buy
    })
    LandStore.addLand$.next({ ...res.data.addLand })
  },
}
