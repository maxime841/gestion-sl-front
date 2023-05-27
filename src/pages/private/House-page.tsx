import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function HousePageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes maisons</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
        mes houses
      </div>
      </div>
    </section>
  )
}
