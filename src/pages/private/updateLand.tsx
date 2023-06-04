import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { FormUpdateLand } from '@molecules/forms/form-update-land'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function UpdateLand() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Formulaire de modification de terrain</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* formulaire */}
      <FormUpdateLand />
      </div>
    </section>
  )
}
