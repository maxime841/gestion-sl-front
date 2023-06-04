import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { FormAddClub } from '@molecules/forms/form-add-club'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function AddClub() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Formulaire d'ajout du terrain de loisir</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* formulaire */}
      <FormAddClub />
      </div>
    </section>
  )
}
