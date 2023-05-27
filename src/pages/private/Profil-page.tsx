import LinkBtn from '@atoms/links/link-btn'
import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardProfil } from '@molecules/card-profil/card-profil'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'
import { Link } from 'react-router-dom'

function ProfilPage() {
  return (
    <section className='w-full px-8 mt-8'>
      <TitlePagePrivate>Mon compte</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* section stats */}
      <div className='mt-8'>
        mes profil
      </div>
      </div>
        </section>
  )
}

export default ProfilPage
