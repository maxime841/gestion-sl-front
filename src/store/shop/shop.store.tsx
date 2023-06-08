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

  /**
   * add one Shop
   * @type IShop
   */
  addShop$: new BehaviorSubject<IShop>({}),

  /**
   * update one Shop
   * @type IShop
   */
  updateShop$: new BehaviorSubject<IShop>({}),

  /**
   * delete one Shop
   * @type IShop
   */
  deleteShop$: new BehaviorSubject<IShop>({}),
}
