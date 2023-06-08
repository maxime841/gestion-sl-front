import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddHost() {
  // state for input
  const [valueNameHost, setValueNameHost] = useState('')
  const [valuePresentationHost, setValuePresentationHost] = useState('')
  const [valueDate_entranceHost, setValueDate_entranceHost] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddHost = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.host.addOneHost(valueNameHost, valuePresentationHost, valueDate_entranceHost)
    navigate('/hosts')
  }

  return (
    <form onSubmit={submitAddHost} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Ajouter votre host</h3>
         <div className='flex flex-col'>
         {/* input nom Host */}
      <InputFull
        placeholder='Nom du host'
        value={valueNameHost}
        setValueInput={setValueNameHost}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation Host */}
      <InputFull
        placeholder='Presentation du host'
        value={valuePresentationHost}
        setValueInput={setValuePresentationHost}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input date d'entree Host */}
      <InputFull
        placeholder="Date d'entrée du host"
        value={valueDate_entranceHost}
        setValueInput={setValueDate_entranceHost}
        type='date'
        addClass='mb-4'
        required
      />
         </div>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/hosts'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Ajouter</Btn>
        </div>
      </div>
    </form>
  )
}
