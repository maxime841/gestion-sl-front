import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardClubOffice } from '@molecules/card-club-office/card-club-office'
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
      <LinkBtn addClass='my-8 ml-12' children={'Ajouter un club'} link={'/form/club/create'}></LinkBtn>
        <CardClubOffice />
      </div>
      </div>
    </section>
  )
}
