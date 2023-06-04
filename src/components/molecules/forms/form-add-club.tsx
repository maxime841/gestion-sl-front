import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddClub() {
  // state for input
  const [valueNameClub, setValueNameClub] = useState('')
  const [valueOwnerClub, setValueOwnerClub] = useState('')
  const [valuePresentationClub, setValuePresentationClub] = useState('')
  const [valueDescriptionClub, setValueDescriptionClub] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddClub = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.club.addOneClub(valueNameClub, valueOwnerClub, valuePresentationClub, valueDescriptionClub)
    navigate('/clubs')
  }

  return (
    <form onSubmit={submitAddClub} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Ajouter votre club</h3>
         <div className='flex flex-col'>
         {/* input nom Club */}
      <InputFull
        placeholder='Nom du club'
        value={valueNameClub}
        setValueInput={setValueNameClub}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input owner Club */}
      <InputFull
        placeholder='Propriétaire du club'
        value={valueOwnerClub}
        setValueInput={setValueOwnerClub}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation Club */}
      <InputFull
        placeholder='Presentation du club'
        value={valuePresentationClub}
        setValueInput={setValuePresentationClub}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input description Club */}
      <InputFull
        placeholder='Description du club'
        value={valueDescriptionClub}
        setValueInput={setValueDescriptionClub}
        type='text'
        addClass='mb-4'
        required
      />
         </div>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/clubs'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Ajouter</Btn>
        </div>
      </div>
    </form>
  )
}
