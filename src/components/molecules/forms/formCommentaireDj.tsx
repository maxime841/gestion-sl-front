import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import { TPageProfilDj } from '@types-app/models/dj.model'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export function FormCommentaireDj({ djCurrent }: TPageProfilDj) {
  const [valueTitleComment, setValueTitleComment] = useState('')
  const [valueCommentaireComment, setValueCommentaireComment] = useState('')
  const id = djCurrent.id

   /*
   * add comment dj
   * @param e React.FormEvent
   */
   const submitCommentDj = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.commentaireDj.commentaireDj(valueTitleComment, valueCommentaireComment, id)
    window.location.reload()
  }
  return (
    <form encType="multipart/form-data" method='post' name='commentDj' action={`/api/dj/${djCurrent.id}/comment`} className='flex flex-col my-10 items-center'>
      <InputFull
        placeholder='Titre du commentaire'
        name='titleCommentDj'
        value={valueTitleComment}
        setValueInput={setValueTitleComment}
        type='text'
        addClass='mb-4'
        required />
      {/* textArea commentaire */}
      <InputFull
        placeholder='Tapez votre commentaire'
        name='commentaireCommentDj'
        value={valueCommentaireComment}
        setValueInput={setValueCommentaireComment}
        type='text'
        addClass='mb-4'
        required />
      {/* btn sub */}
      <input
        className='rounded-lg bg-green-100 mt-5 p-4'
        type='submit'
        value='Commenter'
        onClick={submitCommentDj} />
    </form>
  )
}
