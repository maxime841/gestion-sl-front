import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddHobby() {
  // state for input
  const [valueNameHobby, setValueNameHobby] = useState('')
  const [valueOwnerHobby, setValueOwnerHobby] = useState('')
  const [valuePresentationHobby, setValuePresentationHobby] = useState('')
  const [valueDescriptionHobby, setValueDescriptionHobby] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddHobby = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.hobby.addOneHobby(valueNameHobby, valueOwnerHobby, valuePresentationHobby, valueDescriptionHobby)
    navigate('/hobbies')
  }

  return (
    <form onSubmit={submitAddHobby} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Ajouter votre terrain de loisir</h3>
         <div className='flex flex-col'>
         {/* input nom hobby */}
      <InputFull
        placeholder='Nom du terrain de loisir de loisir'
        value={valueNameHobby}
        setValueInput={setValueNameHobby}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input owner hobby */}
      <InputFull
        placeholder='Propriétaire du terrain de loisir de loisir'
        value={valueOwnerHobby}
        setValueInput={setValueOwnerHobby}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation hobby */}
      <InputFull
        placeholder='Presentation du terrain de loisir'
        value={valuePresentationHobby}
        setValueInput={setValuePresentationHobby}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input description hobby */}
      <InputFull
        placeholder='Description du terrain de loisir'
        value={valueDescriptionHobby}
        setValueInput={setValueDescriptionHobby}
        type='text'
        addClass='mb-4'
        required
      />
         </div>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/hobbies'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Ajouter</Btn>
        </div>
      </div>
    </form>
  )
}
