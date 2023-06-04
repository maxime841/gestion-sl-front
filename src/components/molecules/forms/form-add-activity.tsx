import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddActivity() {
  // state for input
  const [valueNameActivity, setValueNameActivity] = useState('')
  const [valueOwnerActivity, setValueOwnerActivity] = useState('')
  const [valuePresentationActivity, setValuePresentationActivity] = useState('')
  const [valueDescriptionActivity, setValueDescriptionActivity] = useState('')
  const [valuePriceActivity, setValuePriceActivity] = useState('')
  const [valueTagActivity, setValueTagActivity] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddActivity = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.activity.addOneActivity(valueNameActivity, valueOwnerActivity, valuePresentationActivity, valueDescriptionActivity, valuePriceActivity, valueTagActivity)
    navigate('/hobbies')
  }

  return (
    <form onSubmit={submitAddActivity} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Ajouter votre activitée</h3>
         <div className='flex flex-col'>
         {/* input nom activity */}
      <InputFull
        placeholder="Nom de l'activitée"
        value={valueNameActivity}
        setValueInput={setValueNameActivity}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input owner activity */}
      <InputFull
        placeholder="Propriétaire de l'activitée"
        value={valueOwnerActivity}
        setValueInput={setValueOwnerActivity}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation activity */}
      <InputFull
        placeholder="Presentation de l'activitée"
        value={valuePresentationActivity}
        setValueInput={setValuePresentationActivity}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input description activity */}
      <InputFull
        placeholder="Description de l'activitée"
        value={valueDescriptionActivity}
        setValueInput={setValueDescriptionActivity}
        type='text'
        addClass='mb-4'
        required
      />

       {/* input prix activity */}
       <InputFull
        placeholder="Prix de l'activitée"
        value={valuePriceActivity}
        setValueInput={setValuePriceActivity}
        type='text'
        addClass='mb-4'
        required
      />

       {/* input tag activity */}
       <InputFull
        placeholder="Tag de l'activitée"
        value={valueTagActivity}
        setValueInput={setValueTagActivity}
        type='text'
        addClass='mb-4'
        required
      />
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
      </div>
    </form>
  )
}
