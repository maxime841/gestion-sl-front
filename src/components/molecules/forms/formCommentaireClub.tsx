import { Store } from '@store/store'
import React from 'react'

export function FormCommentaireClub() {
  const submitCommentClub = async (e: any) => {
        e.preventDefault()
        const form: any = document.forms.namedItem('commentClub')
        const formData = new FormData(form)
        console.log('mon form', formData)
        await Store.commentaireClub.sendCommentaireClub(formData)
      }
  return (
    <form encType="multipart/form-data" method='post' name='commentClub' className='flex flex-col my-10 items-center'>
      <input type='text' placeholder='Votre titre' name='titre_comment' className='text-white mb-4'/>
      {/* textArea commentaire */}
      <textarea placeholder='Rentrer votre commentaire ici' name='comment' className='p-2 rounded-2xl w-[600px] bg-green-100' cols={30} rows={3}>
      </textarea>
         {/* btn sub */}
        <input
        className='rounded-lg bg-green-100 mt-5 p-4'
          type='submit'
          value='Commenter'
          onClick={submitCommentClub}
          // required
        />
    </form>
  )
}
