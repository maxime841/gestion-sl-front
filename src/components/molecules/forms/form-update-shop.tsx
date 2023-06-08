import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateShop() {
  const navigate = useNavigate()
  const { shopId } = useParams()
  const shop = Store.shop.useShop(shopId!)
  const [name, setNameShop] = useState('')
  const [owner, setOwnerShop] = useState('')
  const [presentation, setPresentationShop] = useState('')
  const [description, setDescriptionShop] = useState('')

  useEffect(() => {
    setNameShop(name!)
    setOwnerShop(owner!)
    setPresentationShop(presentation!)
    setDescriptionShop(description!)
  }, [shop])
  const handlerOnSubUpdateShop = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.shop.updateShop(
      name,
      owner,
      presentation,
      description,
      shopId)

    if (res) {
      navigate(`/shop/${shopId}`)
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateShop} className='w-[500px] mx-auto mt-24'>
      {/* input name Shop */}
      <LabelPrimary>Nom du magasin: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau nom du magasin'
        value={name ?? ''}
        setValueInput={setNameShop}
        type='text'
        activeReset
      />

      {/* input owner Shop */}
      <LabelPrimary>Propriétaire du magasin: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau propriétaire du magasin'
        value={owner ?? ''}
        setValueInput={setOwnerShop}
        type='text'
        activeReset
      />

      {/* input presentation Shop */}
      <LabelPrimary>Presentation du magasin: </LabelPrimary>
      <InputFull
        placeholder='Votre nouvelle présentation du magasin'
        value={presentation ?? ''}
        setValueInput={setPresentationShop}
        type='text'
        activeReset
      />

      {/* input description Shop */}
      <LabelPrimary>Description du magasin: </LabelPrimary>
      <InputFull
        placeholder='Votre nouvelle description du magasin'
        value={description ?? ''}
        setValueInput={setDescriptionShop}
        type='text'
        activeReset
      />

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        {/* btn form */}
        <div className='flex justify-end mt-4'>
          <Btn submit>Modifier</Btn>
        </div>
      </div>
    </form>
  )
}
