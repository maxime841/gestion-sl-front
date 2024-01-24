import { InputFull } from '@atoms/inputs/input-full'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export function FormCommentaireClub() {
  const { clubId } = useParams()

  console.log('mon id club: ', clubId)

  const club = Store.club.useClub(clubId!)
  console.log('mon club', club)

  const [valueTitleComment, setValueTitleComment] = useState('')
  const [valueCommentaireComment, setValueCommentaireComment] = useState('')
  const [valueIdClub, setValueIdClub] = useState('')

   /**
   * add comment club
   * @param e React.FormEvent
   */
   const submitCommentClub = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.commentaireClub.commentaireClub(valueTitleComment, valueCommentaireComment, clubId)
    // window.location.reload()
  }
  return (
    <form encType="multipart/form-data" method='post' name='commentClub' action="/api/commentaire/add" className='flex flex-col my-10 items-center'>
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
      <InputFull type="hidden" name="club_id" value={valueIdClub} setValueInput={setValueIdClub} placeholder={''} />
      {/* btn sub */}
      <input
        className='rounded-lg bg-green-100 mt-5 p-4'
        type='submit'
        value='Commenter'
        onClick={submitCommentClub} />
    </form>
  )
}
