import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { FormUpdateHobby } from '@molecules/forms/form-update-hobby'
import { FormUpdateLand } from '@molecules/forms/form-update-land'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function UpdateHobby() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Formulaire de modification de terrain de loisir</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* formulaire */}
      <FormUpdateHobby />
      </div>
    </section>
  )
}
