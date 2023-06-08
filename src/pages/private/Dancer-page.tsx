import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardDancerOffice } from '@molecules/card-dancer-office/card-dancer-office'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function DancerPageOffice() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Mes danseurs</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
      <LinkBtn addClass='my-8 ml-12' children={'Ajouter un danseur'} link={'/form/dancer/create'}></LinkBtn>
        <CardDancerOffice />
      </div>
      </div>
    </section>
  )
}
