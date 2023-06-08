import { Store } from '@store/store'
import { ITenant } from '@types-app/models/tenant.model'
import { useEffect, useState } from 'react'
import { map } from 'rxjs'
import { TenantService } from './tenant.service'
import { TenantStore } from './tenant.store'

export const TenantHook = {
  /**
   * hook for observable tenant$
   */
  useTenants: () => {
    const [tenants, setTenants] = useState<ITenant[]>([])

    useEffect(() => {
      async function getTenants() {
        await TenantService.getAllTenants()
      }
      TenantStore.tenants$.subscribe(value => setTenants(value))

      getTenants()
    }, [])

    return tenants
  },
}

export { TenantStore }
