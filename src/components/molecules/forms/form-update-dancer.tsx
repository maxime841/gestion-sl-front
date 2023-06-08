import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateDancer() {
  const navigate = useNavigate()
  const { dancerId } = useParams()
  const dancer = Store.dancer.useDancer(dancerId!)
  const [name, setNameDancer] = useState('')
  const [presentation, setPresentationDancer] = useState('')
  const [date_entrance, setDate_entranceDancer] = useState('')

  useEffect(() => {
    setNameDancer(name!)
    setPresentationDancer(presentation!)
    setDate_entranceDancer(date_entrance!)
  }, [dancer])

  const handlerOnSubUpdateDancer = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.dancer.updateDancer(
      name,
      presentation,
      date_entrance,
      dancerId)

    if (res) {
      navigate('/dancers')
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateDancer} className='w-[500px] mx-auto mt-24'>
      {/* input name Dancer */}
      <LabelPrimary>Nom du danseur: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau danseur'
        value={name ?? ''}
        setValueInput={setNameDancer}
        type='text'
        activeReset
      />

      {/* input presentation Dancer */}
      <LabelPrimary>Presentation du danseur: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle présentation du danseur"
        value={presentation ?? ''}
        setValueInput={setPresentationDancer}
        type='text'
        activeReset
      />

      {/* input date d'entree Dancer */}
      <LabelPrimary>Date d'entrée du danseur: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle date d'entrée du danseur"
        value={date_entrance ?? ''}
        setValueInput={setDate_entranceDancer}
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
