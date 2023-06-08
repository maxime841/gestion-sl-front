import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateHost() {
  const navigate = useNavigate()
  const { hostId } = useParams()
  const Host = Store.host.useHost(hostId!)
  const [name, setNameHost] = useState('')
  const [presentation, setPresentationHost] = useState('')
  const [date_entrance, setDate_entranceHost] = useState('')

  useEffect(() => {
    setNameHost(name!)
    setPresentationHost(presentation!)
    setDate_entranceHost(date_entrance!)
  }, [Host])

  const handlerOnSubUpdateHost = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.host.updateHost(
      name,
      presentation,
      date_entrance,
      hostId)

    if (res) {
      navigate('/hosts')
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateHost} className='w-[500px] mx-auto mt-24'>
      {/* input name Host */}
      <LabelPrimary>Nom du host: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau host'
        value={name ?? ''}
        setValueInput={setNameHost}
        type='text'
        activeReset
      />

      {/* input presentation Host */}
      <LabelPrimary>Presentation du host: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle présentation du host"
        value={presentation ?? ''}
        setValueInput={setPresentationHost}
        type='text'
        activeReset
      />

      {/* input date d'entree Host */}
      <LabelPrimary>Date d'entrée du host: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle date d'entrée du host"
        value={date_entrance ?? ''}
        setValueInput={setDate_entranceHost}
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
