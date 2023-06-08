import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddDancer() {
  // state for input
  const [valueNameDancer, setValueNameDancer] = useState('')
  const [valuePresentationDancer, setValuePresentationDancer] = useState('')
  const [valueDate_entranceDancer, setValueDate_entranceDancer] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddDancer = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.dancer.addOneDancer(valueNameDancer, valuePresentationDancer, valueDate_entranceDancer)
    navigate('/Dancers')
  }

  return (
    <form onSubmit={submitAddDancer} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Ajouter votre danseur</h3>
         <div className='flex flex-col'>
         {/* input nom Dancer */}
      <InputFull
        placeholder='Nom du danseur'
        value={valueNameDancer}
        setValueInput={setValueNameDancer}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation Dancer */}
      <InputFull
        placeholder='Presentation du danseur'
        value={valuePresentationDancer}
        setValueInput={setValuePresentationDancer}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input date d'entree Dancer */}
      <InputFull
        placeholder="Date d'entree du Dancer"
        value={valueDate_entranceDancer}
        setValueInput={setValueDate_entranceDancer}
        type='date'
        addClass='mb-4'
        required
      />
         </div>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/dancers'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Ajouter</Btn>
        </div>
      </div>
    </form>
  )
}
