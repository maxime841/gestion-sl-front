import { BehaviorSubject } from 'rxjs'
import { ITenant } from '@types-app/models/tenant.model'

export const TenantStore = {
  /**
   * list of Tenant via api
   * @type array de type ITenant[]
   */
  tenants$: new BehaviorSubject<ITenant[]>([]),

  /**
   * add one Tenant
   * @type ITenant
   */
  addTenant$: new BehaviorSubject<ITenant>({}),

  /**
   * update one Tenant
   * @type ITenant
   */
  updateTenant$: new BehaviorSubject<ITenant>({}),

  /**
   * delete one Tenant
   * @type ITenant
   */
  deleteTenant$: new BehaviorSubject<ITenant>({}),
}
