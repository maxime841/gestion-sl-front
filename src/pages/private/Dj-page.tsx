import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardDjOffice } from '@molecules/card-dj-office/card-dj-office'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function DjPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes djs</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
      <LinkBtn addClass='my-8 ml-12' children={'Ajouter un dj'} link={'/form/dj/create'}></LinkBtn>
        <CardDjOffice />
      </div>
      </div>
    </section>
  )
}
