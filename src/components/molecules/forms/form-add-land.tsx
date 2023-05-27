import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddLand() {
  // state for input
  const [valueNameLand, setValueNameLand] = useState('')
  const [valueOwnerLand, setValueOwnerLand] = useState('')
  const [valuePresentationLand, setValuePresentationLand] = useState('')
  const [valueDescriptionLand, setValueDescriptionLand] = useState('')
  const [valueGroupLand, setValueGroupLand] = useState('')
  const [valuePrimsLand, setValuePrimsLand] = useState('')
  const [valueRemaining_primsLand, setValueRemaining_primsLand] = useState('')
  const [valueDate_buyLand, setValueDate_buyLand] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddLand = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.land.addOneLand(valueNameLand, valueOwnerLand, valuePresentationLand, valueDescriptionLand, valueGroupLand, valuePrimsLand, valueRemaining_primsLand, valueDate_buyLand)
    navigate('/lands')
  }

  return (
    <form onSubmit={submitAddLand}>
      <h3 className="font-bold text-lg">Ajouter votre terrain</h3>
         <div className='flex flex-col'>
         {/* input nom land */}
      <InputFull
        placeholder='Nom du terrain'
        value={valueNameLand}
        setValueInput={setValueNameLand}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input owner land */}
      <InputFull
        placeholder='Propriétaire du terrain'
        value={valueOwnerLand}
        setValueInput={setValueOwnerLand}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation land */}
      <InputFull
        placeholder='Presentation du land'
        value={valuePresentationLand}
        setValueInput={setValuePresentationLand}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input description land */}
      <InputFull
        placeholder='Description du land'
        value={valueDescriptionLand}
        setValueInput={setValueDescriptionLand}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input group land */}
      <InputFull
        placeholder='Groupe du terrain'
        value={valueGroupLand}
        setValueInput={setValueGroupLand}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input prims land */}
      <InputFull
        placeholder='Nombre de prims du terrain'
        value={valuePrimsLand}
        setValueInput={setValuePrimsLand}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input remaining_prims */}
      <InputFull
        placeholder='Prims restante du terrain'
        value={valueRemaining_primsLand}
        setValueInput={setValueRemaining_primsLand}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input date_buy */}
      <InputFull
        placeholder='Date d achat du terrain'
        value={valueDate_buyLand}
        setValueInput={setValueDate_buyLand}
        type='text'
        addClass='mb-4'
        required
      />
         </div>
      <div className='flex'>
         {/* btn form */}
      <div className='mt-4 mx-4'>
        <Btn submit>Retour</Btn>
      </div>

         {/* btn form */}
      <div className='mt-4'>
        <Btn submit>Ajouter</Btn>
      </div>
      </div>
    </form>
  )
}
