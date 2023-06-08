import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardUserOffice } from '@molecules/card-user-office/card-user-office'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import { Store } from '@store/store'
import { Iuser } from '@types-app/models/user.model'
import React from 'react'

export function UserPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes utilisateurs</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      <div className='mt-8'>
      <CardUserOffice />
      </div>
    </div>
  </section>
  )
}
