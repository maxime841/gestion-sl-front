import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddShop() {
  // state for input
  const [valueNameShop, setValueNameShop] = useState('')
  const [valueOwnerShop, setValueOwnerShop] = useState('')
  const [valuePresentationShop, setValuePresentationShop] = useState('')
  const [valueDescriptionShop, setValueDescriptionShop] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddShop = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.shop.addOneShop(valueNameShop, valueOwnerShop, valuePresentationShop, valueDescriptionShop)
    navigate('/shops')
  }

  return (
    <form onSubmit={submitAddShop} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Ajouter votre magasin</h3>
         <div className='flex flex-col'>
         {/* input nom Shop */}
      <InputFull
        placeholder='Nom du magasin'
        value={valueNameShop}
        setValueInput={setValueNameShop}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input owner Shop */}
      <InputFull
        placeholder='Propriétaire du magasin'
        value={valueOwnerShop}
        setValueInput={setValueOwnerShop}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation Shop */}
      <InputFull
        placeholder='Presentation du magasin'
        value={valuePresentationShop}
        setValueInput={setValuePresentationShop}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input description Shop */}
      <InputFull
        placeholder='Description du magasin'
        value={valueDescriptionShop}
        setValueInput={setValueDescriptionShop}
        type='date'
        addClass='mb-4'
        required
      />
         </div>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/shops'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Ajouter</Btn>
        </div>
      </div>
    </form>
  )
}
