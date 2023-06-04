import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateHobby() {
  const navigate = useNavigate()
  const { hobbyId } = useParams()
  const hobby = Store.hobby.useHobby(hobbyId!)
  const [name, setNameHobby] = useState('')
  const [owner, setOwnerHobby] = useState('')
  const [presentation, setPresentationHobby] = useState('')
  const [description, setDescriptionHobby] = useState('')

  useEffect(() => {
    setNameHobby(name!)
    setOwnerHobby(owner!)
    setPresentationHobby(presentation!)
    setDescriptionHobby(description!)
  }, [hobby])

  const handlerOnSubUpdateHobby = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.hobby.updateHobby(
      name,
      owner,
      presentation,
      description,
      hobbyId)

    if (res) {
      navigate('/hobbies')
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateHobby} className='w-[500px] mx-auto mt-24'>
      {/* input name hobby */}
      <LabelPrimary>Nom du terrain de loisir: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau nom du terrain de loisir'
        value={name ?? ''}
        setValueInput={setNameHobby}
        type='text'
        activeReset
      />

      {/* input owner hobby */}
      <LabelPrimary>Propriétaire du terrain de loisir: </LabelPrimary>
      <InputFull
        placeholder='Votre nouveau propriétaire du terrain de loisir'
        value={owner ?? ''}
        setValueInput={setOwnerHobby}
        type='text'
        activeReset
      />

      {/* input presentation hobby */}
      <LabelPrimary>Presentation du terrain de loisir: </LabelPrimary>
      <InputFull
        placeholder='Votre nouvelle présentation du terrain de loisir'
        value={presentation ?? ''}
        setValueInput={setPresentationHobby}
        type='text'
        activeReset
      />

      {/* input description hobby */}
      <LabelPrimary>Description du terrain de loisir: </LabelPrimary>
      <InputFull
        placeholder='Votre nouvelle description du terrain de loisir'
        value={description ?? ''}
        setValueInput={setDescriptionHobby}
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
