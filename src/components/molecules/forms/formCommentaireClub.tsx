import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import { TPageProfilClub } from '@types-app/models/club.model'
import React, { useState } from 'react'

export function FormCommentaireClub({ clubCurrent }: TPageProfilClub) {
  const [valueTitleComment, setValueTitleComment] = useState('')
  const [valueCommentaireComment, setValueCommentaireComment] = useState('')
  const id = clubCurrent.id

   /*
   * add comment club
   * @param e React.FormEvent
   */
   const submitCommentClub = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.commentaireClub.commentaireClub(valueTitleComment, valueCommentaireComment, id)
    window.location.reload()
  }
  return (
    <form encType="multipart/form-data" method='post' name='commentClub' action={`/api/club/${clubCurrent.id}/comment`} className='flex flex-col my-10 items-center'>
      <InputFull
        placeholder='Titre du commentaire'
        name='titleCommentClub'
        value={valueTitleComment}
        setValueInput={setValueTitleComment}
        type='text'
        addClass='mb-4'
        required />
      {/* textArea commentaire */}
      <InputFull
        placeholder='Tapez votre commentaire'
        name='commentaireCommentClub'
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
        onClick={submitCommentClub} />
    </form>
  )
}
