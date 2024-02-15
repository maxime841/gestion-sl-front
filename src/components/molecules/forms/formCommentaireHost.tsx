import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import { TPageProfilHost } from '@types-app/models/host.model'
import React, { useState } from 'react'

export function FormCommentaireHost({ hostCurrent }: TPageProfilHost) {
  const [valueTitleComment, setValueTitleComment] = useState('')
  const [valueCommentaireComment, setValueCommentaireComment] = useState('')
  const id = hostCurrent.id

   /*
   * add comment dj
   * @param e React.FormEvent
   */
   const submitCommentHost = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.commentaireHost.commentaireHost(valueTitleComment, valueCommentaireComment, id)
    // window.location.reload()
  }
  return (
    <form encType="multipart/form-data" method='post' name='commentHost' action={`/api/host/${hostCurrent.id}/comment`} className='flex flex-col my-10 items-center'>
      <InputFull
        placeholder='Titre du commentaire'
        name='titleCommentHost'
        value={valueTitleComment}
        setValueInput={setValueTitleComment}
        type='text'
        addClass='mb-4'
        required />
      {/* textArea commentaire */}
      <InputFull
        placeholder='Tapez votre commentaire'
        name='commentaireCommentHost'
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
        onClick={submitCommentHost} />
    </form>
  )
}
