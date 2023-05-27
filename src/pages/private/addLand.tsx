import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { CardLandOffice } from '@molecules/card-land-office/card-land-office'
import { FormAddLand } from '@molecules/forms/form-add-land'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function AddLand() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Formulaire d'ajout de terrain</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* formulaire */}
      <FormAddLand />
      </div>
    </section>
  )
}
