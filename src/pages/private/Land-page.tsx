import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardLandOffice } from '@molecules/card-land-office/card-land-office'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function LandPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes terrains</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
      <LinkBtn addClass='my-8 ml-12' children={'Ajouter un terrain'} link={'/form/land/create'}></LinkBtn>
        <CardLandOffice />
      </div>
      </div>
    </section>
  )
}
