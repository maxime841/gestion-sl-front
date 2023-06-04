import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateLand() {
  const navigate = useNavigate()
  const { landId } = useParams()
  console.log('landId', landId)
  const land = Store.land.useLand(landId!)
  console.log('mon land', land)
  const [name, setNameLand] = useState('')
  const [owner, setOwnerLand] = useState('')
  const [presentation, setPresentationLand] = useState('')
  const [description, setDescriptionLand] = useState('')
  const [group, setGroupLand] = useState('')
  const [prims, setPrimsLand] = useState('')
  const [remaining_prims, setRemaining_primsLand] = useState('')
  const [date_buy, setDate_buyLand] = useState('')

  useEffect(() => {
    setNameLand(name!)
    setOwnerLand(owner!)
    setPresentationLand(presentation!)
    setDescriptionLand(description!)
    setGroupLand(group!)
    setPrimsLand(prims!)
    setRemaining_primsLand(remaining_prims!)
    setOwnerLand(owner!)
    setDate_buyLand(date_buy!)
  }, [land])

  const handlerOnSubUpdateLand = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.land.updateLand(
      name,
      owner,
      presentation,
      description,
      group,
      prims,
      remaining_prims,
      date_buy,
      landId)
    console.log('ma res', res)

    if (res) {
      navigate(`/land/${landId}`)
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateLand} className='w-[500px] mx-auto mt-24'>
      {/* input name land */}
      <LabelPrimary>Nom du terrain: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau nom du terrain'
        value={name ?? ''}
        setValueInput={setNameLand}
        type='text'
        activeReset
      />

      {/* input owner land */}
      <LabelPrimary>Propriétaire du terrain: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau propriétaire du terrain'
        value={owner ?? ''}
        setValueInput={setOwnerLand}
        type='text'
        activeReset
      />

      {/* input presentation land */}
      <LabelPrimary>Presentation du terrain: </LabelPrimary>
      <InputFull
        placeholder='Votre nouvelle présentation du terrain'
        value={presentation ?? ''}
        setValueInput={setPresentationLand}
        type='text'
        activeReset
      />

      {/* input description land */}
      <LabelPrimary>Description du terrain: </LabelPrimary>
      <InputFull
        placeholder='Votre nouvelle description du terrain'
        value={description ?? ''}
        setValueInput={setDescriptionLand}
        type='text'
        activeReset
      />

      {/* input group land */}
      <LabelPrimary>Groupe du terrain: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau groupe du terrain'
        value={group ?? ''}
        setValueInput={setGroupLand}
        type='text'
        activeReset
      />

      {/* input prims land */}
      <LabelPrimary>Nombre de prims: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau nombre de prims'
        value={prims ?? ''}
        setValueInput={setPrimsLand}
        type='text'
        activeReset
      />

      {/* input remaining_prims land */}
      <LabelPrimary>Nombre de prims restante: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau nombre de prims restante'
        value={remaining_prims ?? ''}
        setValueInput={setRemaining_primsLand}
        type='text'
        activeReset
      />

      {/* input date achat land */}
      <LabelPrimary>Date d'achat du terrain: </LabelPrimary>
      <InputFull
        placeholder='Votre nouvelle date du terrain'
        value={date_buy ?? ''}
        setValueInput={setDate_buyLand}
        type='date'
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
