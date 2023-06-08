import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddDj() {
  // state for input
  const [valueNameDj, setValueNameDj] = useState('')
  const [valueStyleDj, setValueStyleDj] = useState('')
  const [valuePresentationDj, setValuePresentationDj] = useState('')
  const [valueDate_entranceDj, setValueDate_entranceDj] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddDj = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.dj.addOneDj(valueNameDj, valueStyleDj, valuePresentationDj, valueDate_entranceDj)
    navigate('/djs')
  }

  return (
    <form onSubmit={submitAddDj} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Ajouter votre dj</h3>
         <div className='flex flex-col'>
         {/* input nom Dj */}
      <InputFull
        placeholder='Nom du dj'
        value={valueNameDj}
        setValueInput={setValueNameDj}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input style Dj */}
      <InputFull
        placeholder='Style du dj'
        value={valueStyleDj}
        setValueInput={setValueStyleDj}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation Dj */}
      <InputFull
        placeholder='Presentation du dj'
        value={valuePresentationDj}
        setValueInput={setValuePresentationDj}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input date d'entree Dj */}
      <InputFull
        placeholder='Description du dj'
        value={valueDate_entranceDj}
        setValueInput={setValueDate_entranceDj}
        type='date'
        addClass='mb-4'
        required
      />
         </div>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/djs'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Ajouter</Btn>
        </div>
      </div>
    </form>
  )
}
