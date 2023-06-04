import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateClub() {
  const navigate = useNavigate()
  const { clubId } = useParams()
  const club = Store.club.useClub(clubId!)
  const [name, setNameClub] = useState('')
  const [owner, setOwnerClub] = useState('')
  const [presentation, setPresentationClub] = useState('')
  const [description, setDescriptionClub] = useState('')

  useEffect(() => {
    setNameClub(name!)
    setOwnerClub(owner!)
    setPresentationClub(presentation!)
    setDescriptionClub(description!)
  }, [club])

  const handlerOnSubUpdateClub = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.club.updateClub(
      name,
      owner,
      presentation,
      description,
      clubId)

    if (res) {
      navigate('/clubs')
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateClub} className='w-[500px] mx-auto mt-24'>
      {/* input name Club */}
      <LabelPrimary>Nom du club: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau club'
        value={name ?? ''}
        setValueInput={setNameClub}
        type='text'
        activeReset
      />

      {/* input ownerClub */}
      <LabelPrimary>Propriétaire du club: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau propriétaire du club"
        value={owner ?? ''}
        setValueInput={setOwnerClub}
        type='text'
        activeReset
      />

      {/* input presentation Club */}
      <LabelPrimary>Presentation du club: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle présentation du club"
        value={presentation ?? ''}
        setValueInput={setPresentationClub}
        type='text'
        activeReset
      />

      {/* input description Club */}
      <LabelPrimary>Description du club: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle description du club"
        value={description ?? ''}
        setValueInput={setDescriptionClub}
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
