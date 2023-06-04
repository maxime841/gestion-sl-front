import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { FormDeleteActivity } from '@molecules/forms/form-delete-activity'
import { FormDeleteHobby } from '@molecules/forms/form-delete-hobby'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function DeleteActivity() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Formulaire de suppression de l'activitée</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* formulaire */}
      <FormDeleteActivity />
      </div>
    </section>
  )
}
