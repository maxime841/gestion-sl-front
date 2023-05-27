import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function ClubPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mon club</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
        mes clubs
      </div>
      </div>
    </section>
  )
}
