import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { FormDeleteHobby } from '@molecules/forms/form-delete-hobby'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function DeleteHobby() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Formulaire de suppression du terrain de loisir</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* formulaire */}
      <FormDeleteHobby />
      </div>
    </section>
  )
}
