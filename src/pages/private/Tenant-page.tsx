import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function TenantPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes locataires</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
        mes tenants
      </div>
      </div>
    </section>
  )
}