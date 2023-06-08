import { Store } from '@store/store'
import React from 'react'

export function CardTenantOffice() {
  const tenants = Store.tenant.useTenants()

  return (
    <div className="overflow-x-auto">
        {
        tenants.map(tenant => (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Nom</th>
              <th>Loyer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
              <div className="flex items-center space-x-3">
              <div className="font-bold">{tenant.name}</div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{tenant.rent}</span>
        </td>
      </tr>
    </tbody>
        {/* foot */}
        </table>
        ))}
      </div>
  )
}
