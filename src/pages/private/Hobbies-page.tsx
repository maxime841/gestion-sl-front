import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardHobbyOffice } from '@molecules/card-hobby-office/card-hobby-office'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function HobbyPageOffice() {
  return (
    <section>
     {/* title page */}
     <TitlePagePrivate>Mes terrains de loisir</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
      <LinkBtn addClass='my-8 ml-12' children={'Ajouter un terrain de loisir'} link={'/form/hobby/create'}></LinkBtn>
        <CardHobbyOffice />
      </div>
      </div>
    </section>
  )
}
