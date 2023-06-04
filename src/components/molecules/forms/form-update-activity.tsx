import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateActivity() {
  const navigate = useNavigate()
  const { activityId } = useParams()
  const activity = Store.activity.useActivity(activityId!)
  const [name, setNameActivity] = useState('')
  const [owner, setOwnerActivity] = useState('')
  const [presentation, setPresentationActivity] = useState('')
  const [description, setDescriptionActivity] = useState('')
  const [price, setPriceActivity] = useState('')
  const [tag, setTagActivity] = useState('')

  useEffect(() => {
    setNameActivity(name!)
    setOwnerActivity(owner!)
    setPresentationActivity(presentation!)
    setDescriptionActivity(description!)
    setPriceActivity(price!)
    setTagActivity(tag!)
  }, [activity])

  const handlerOnSubUpdateActivity = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.activity.updateActivity(
      name,
      owner,
      presentation,
      description,
      price,
      tag,
      activityId)

    if (res) {
      navigate('/activities')
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateActivity} className='w-[500px] mx-auto mt-24'>
      {/* input name activity */}
      <LabelPrimary>Nom de l'activitée: </LabelPrimary>
      <InputFull
        placeholder='Votre nouvelle activitée'
        value={name ?? ''}
        setValueInput={setNameActivity}
        type='text'
        activeReset
      />

      {/* input owneractivity */}
      <LabelPrimary>Propriétaire de l'activitée: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau propriétaire de l'activitée"
        value={owner ?? ''}
        setValueInput={setOwnerActivity}
        type='text'
        activeReset
      />

      {/* input presentation activity */}
      <LabelPrimary>Presentation de l'activitée: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle présentation de l'activitée"
        value={presentation ?? ''}
        setValueInput={setPresentationActivity}
        type='text'
        activeReset
      />

      {/* input description activity */}
      <LabelPrimary>Description de l'activitée: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle description de l'activitée"
        value={description ?? ''}
        setValueInput={setDescriptionActivity}
        type='text'
        activeReset
      />

      {/* input price activity */}
      <LabelPrimary>Prix de l'activitée: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau prix de l'activitée"
        value={price ?? ''}
        setValueInput={setPriceActivity}
        type='text'
        activeReset
      />

      {/* input tag activity */}
      <LabelPrimary>Tag de l'activitée: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau tag de l'activitée"
        value={tag ?? ''}
        setValueInput={setTagActivity}
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
