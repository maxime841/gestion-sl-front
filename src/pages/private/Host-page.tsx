import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardHostOffice } from '@molecules/card-host-office/card-host-office'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function HostPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes hosts</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
      <LinkBtn addClass='my-8 ml-12' children={'Ajouter un host'} link={'/form/host/create'}></LinkBtn>
        <CardHostOffice />
      </div>
      </div>
    </section>
  )
}
