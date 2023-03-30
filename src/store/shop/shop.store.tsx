import { BehaviorSubject } from 'rxjs'
import { IShop } from '@types-app/models/shop.model'

export const ShopStore = {
  /**
   * list of shop via api
   * @type array de type IShop[]
   */
  shops$: new BehaviorSubject<IShop[]>([]),

  /**
   * shop select
   * @type IShop
   */
  shopSelected$: new BehaviorSubject<IShop>({}),
}
