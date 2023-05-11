import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { TitleState } from '@atoms/title/title-stat/title-stat'
import { FormUploadAvatar } from '@molecules/forms/form-upload-avatar'
import { InputFull } from '@atoms/inputs/input-full'
import { VoletDetailProfilUpdate } from '@molecules/volet-detail-update-profil/volet-detail-update-profil'
import { VoletDetailProfilDelete } from '@molecules/volet-profil-delete/volet-profil-delete'
import { VoletDetailProfilPasswordUpdate } from '@molecules/volet-profil-update-password/volet-profil-update-password'
import { Store } from '@store/store'
import React, { useState } from 'react'

export function CardProfil() {
  const [pseudo, setPseudo] = useState('')
  const [email, setEmail] = useState('')
  const user = Store.user.useUserCurrent()

  return (
    <article className='bg-fond-cards dark:bg-fond-dark-cards width sm:w-96 md:w-[400px] lg:w-[700px] mx-auto mt-12 border-2 border-black p-4 rounded-lg'>
      <TitleState addClass='sm:text-2xl md:text-3xl lg:text-4xl'>
        Mes informations
      </TitleState>
      {/* display avatar */}
      <div className='my-16'>
        <img
          className='w-28 h-28 rounded-full mx-auto my-8 z-10'
          src={`${
            user.picture?.id
              ? `http://127.0.0.1:8000/${user.picture.picture_url}`
              : 'https://ui-avatars.com/api/?background=0D8ABC&color=fff'
          }`}
        />
        {/* form avatar */}
        <FormUploadAvatar />
        <article className='mx-auto border-2 border-black rounded-lg w-fit p-8'>
          <LabelPrimary>Pseudo: </LabelPrimary>
          <InputFull
            addClass='w-fit text-center mb-4'
            colors='bg-fond-cards'
            value={user.id ? user.name : ''}
            placeholder={''}
            setValueInput={setPseudo}
          />
          <LabelPrimary>Email: </LabelPrimary>
          <InputFull
            addClass='w-fit text-center'
            colors='bg-fond-cards'
            value={user.id ? user.email : ''}
            placeholder={''}
            setValueInput={setEmail}
          />
        </article>
      </div>
      <nav className='flex justify-center'>
        {/* volet detail profil update */}
        <VoletDetailProfilUpdate />
        {/* volet detail password profil update */}
        <VoletDetailProfilPasswordUpdate />
        {/* volet detail profil delete */}
        <VoletDetailProfilDelete />
      </nav>
    </article>
  )
}
