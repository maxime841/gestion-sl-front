import { http } from '@config-app/http/http.instance'
import { IShopsResponse, IShopResponse } from '@types-app/models/shop.model'
import { ShopStore } from './shop.store'

export const ShopService = {
  /**
   * get all shops
   */
  getAllShops: async () => {
    const res = await http.get<IShopsResponse>('/shop') // ici on a response
    ShopStore.shops$.next([...res.data.shops!])
  },

  /**
   * get one shop via id
   * @param id string
   */
  getShop: async (id: string) => {
    const res = await http.get<IShopResponse>(`shop/${id}`)
    ShopStore.shopSelected$.next({ ...res.data.shop })
  },

}
