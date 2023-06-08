import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateDj() {
  const navigate = useNavigate()
  const { djId } = useParams()
  const dj = Store.dj.useDj(djId!)
  const [name, setNameDj] = useState('')
  const [style, setStyleDj] = useState('')
  const [presentation, setPresentationDj] = useState('')
  const [date_entrance, setDate_entranceDj] = useState('')

  useEffect(() => {
    setNameDj(name!)
    setStyleDj(style!)
    setPresentationDj(presentation!)
    setDate_entranceDj(date_entrance!)
  }, [dj])

  const handlerOnSubUpdateDj = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.dj.updateDj(
      name,
      style,
      presentation,
      date_entrance,
      djId)

    if (res) {
      navigate('/djs')
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateDj} className='w-[500px] mx-auto mt-24'>
      {/* input name Dj */}
      <LabelPrimary>Nom du Dj: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau dj'
        value={name ?? ''}
        setValueInput={setNameDj}
        type='text'
        activeReset
      />

      {/* input ownerDj */}
      <LabelPrimary>Style du Dj: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau style du dj"
        value={style ?? ''}
        setValueInput={setStyleDj}
        type='text'
        activeReset
      />

      {/* input presentation Dj */}
      <LabelPrimary>Presentation du Dj: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle présentation du Dj"
        value={presentation ?? ''}
        setValueInput={setPresentationDj}
        type='text'
        activeReset
      />

      {/* input description Dj */}
      <LabelPrimary>Date d'entrée du Dj: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle date d'entrée du Dj"
        value={date_entrance ?? ''}
        setValueInput={setDate_entranceDj}
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
