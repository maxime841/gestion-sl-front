import { TitlePagePrivate } from '@atoms/title/title-page-private/title-page-private'
import { FormAddHobby } from '@molecules/forms/form-add-hobby'
import { FormAddLand } from '@molecules/forms/form-add-land'
import { SectionMenuSideLeft } from '@organisms/section-menu-left-side/section-menu-left-side'
import React from 'react'

export function AddLand() {
  return (
    <section>
      {/* title page */}
      <TitlePagePrivate>Formulaire d'ajout du terrain de loisir</TitlePagePrivate>
      <div className='flex'>
      {/* menu left side */}
      <SectionMenuSideLeft />
      {/* formulaire */}
      <FormAddHobby />
      </div>
    </section>
  )
}
