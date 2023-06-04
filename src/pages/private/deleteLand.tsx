import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { FormDeleteLand } from '@molecules/forms/form-delete-land'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function DeleteLand() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Formulaire de suppression du terrain</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* formulaire */}
      <FormDeleteLand />
      </div>
    </section>
  )
}
