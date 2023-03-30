import { IShop } from '@types-app/models/shop.model'
import { useEffect, useState } from 'react'
import { ShopService } from './shop.service'
import { ShopStore } from './shop.store'

export const ShopHook = {
  /**
   * hook for observable shops$
   */
  useShops: () => {
    const [shops, setShops] = useState<IShop[]>([])

    useEffect(() => {
      async function getShops() {
        await ShopService.getAllShops()
      }
      ShopStore.shops$.subscribe(value => setShops(value))

      getShops()
    }, [])

    return shops
  },

  /**
   * hook for observable shopSelected$
   * @param id: string
   */
  useShop: (id: string) => {
    const [shop, setShop] = useState<IShop>({})

    useEffect(() => {
      // execute call
      async function getShop() {
        await ShopService.getShop(id)
      }

      // afect observable
      ShopStore.shopSelected$.subscribe(value => setShop(value))

      getShop()
    }, [id])

    // return variable hook
    return shop
  },
}
