import { Store } from '@store/store'
import React from 'react'

export function CardUserOffice() {
  const users = Store.user.useUsers()

  return (
    <div className="overflow-x-auto">
        {
        users.map(user => (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Avatar</th>
              <th>Role</th>
              <th>Email</th>
              <th>Email vérifié</th>
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
              <div className="font-bold">{user.name}</div>
          </div>
        </td>
        <td>
        <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.avatar} alt="représentation du user" />
              </div>
            </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{user.role?.libelle}</span>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{user.email}</span>
        </td>
        <td>
            {
                user.email_verified_at
          ? <span className="badge badge-ghost badge-sm">{user.email_verified_at}</span>
          : <div>NON</div>
            }
        </td>
      </tr>
    </tbody>
        {/* foot */}
        </table>
        ))}
      </div>
  )
}
