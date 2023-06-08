import { http } from '@config-app/http/http.instance'
import { IShopsResponse, IShopResponse, IAddShopResponse, IUpdateShopResponse } from '@types-app/models/shop.model'
import { ShopStore } from './shop.store'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'
import { Eroute } from '@types-app/route.type'

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
  addOneShop: async (name: string, owner: string, presentation: string, description: string) => {
    // add shop
  const res = await http.post<IAddShopResponse>(`${Eroute.ADD_SHOP}`, {
    name,
    owner,
    presentation,
    description,
  })
  ShopStore.addShop$.next({ ...res.data.addShop })
},

/**
 * update shop via FormData
 * @param shop IShop
 */
updateShop: async (name: string, owner: string, presentation: string, description: string, id: any) => {
  try {
    const res = await http.put<IUpdateShopResponse>(
      `${Eroute.UPDATE_SHOP}${id}`, {
      name,
      owner,
      presentation,
      description,
      })
    ShopStore.updateShop$.next({ ...res.data.updateShop! })
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
 * delete shop via FormData
 * @param shop IShop
 */
deleteShop: async (id: string) => {
  try {
    const res = await http.delete<IUpdateShopResponse>(
      `${Eroute.DELETE_SHOP}${id}`,)
    ShopStore.deleteShop$.next({ ...res.data.deleteShop! })
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
