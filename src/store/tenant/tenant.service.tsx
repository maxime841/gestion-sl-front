import { http } from '@config-app/http/http.instance'
import { ITenantsResponse, IAddTenantResponse, ITenant, IUpdateTenantResponse, IDeleteTenantResponse } from '@types-app/models/tenant.model'
import { TenantStore } from './tenant.hook'
import { Eroute } from '@types-app/route.type'
import { IPicture } from '@types-app/models/picture.type'
import { Store } from '@store/store'
import { AppService } from '@store/app/app.service'
import { userStore } from '@store/user/user.store'
import { Eerror } from '@types-app/error.type'

export const TenantService = {
  /**
   * get all Tenants
   */
  getAllTenants: async () => {
    const res = await http.get<ITenantsResponse>('tenants') // ici on a response
    TenantStore.tenants$.next([...res.data.tenants!])
  },

  /**
   * ajouter un tenant
   * @param name string
   * @param rent string
   */
  addOneTenant: async (name: string, rent: string) => {
      // add Tenant
    const res = await http.post<IAddTenantResponse>(`${Eroute.ADD_TENANT}`, {
      name,
      rent,
    })
    TenantStore.addTenant$.next({ ...res.data.addTenant })
  },

  /**
   * update Tenant via FormData
   * @param Tenant ITenant
   */
  updateTenant: async (name: string, rent: string, id: any) => {
    try {
      const res = await http.put<IUpdateTenantResponse>(
        `${Eroute.UPDATE_TENANT}${id}`, {
        name,
        rent,
        })
      TenantStore.updateTenant$.next({ ...res.data.updateTenant! })
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
   * delete Tenant via FormData
   * @param Tenant ITenant
   */
  deleteTenant: async (id: string) => {
    try {
      const res = await http.delete<IDeleteTenantResponse>(
        `${Eroute.DELETE_TENANT}${id}`,)
      TenantStore.deleteTenant$.next({ ...res.data.deleteTenant! })
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
