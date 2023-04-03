import { Store } from '@store/store'
import React from 'react'
import { lastValueFrom } from 'rxjs'

export function FormCommentaireClub() {
  const submitCommentClub = async (e: any) => {
        e.preventDefault()
        const form: any = document.forms.namedItem('commentClub')
        const formData = new FormData(form)
        formData.append('commentClub', 'comment')
        console.log('mon form data value', formData)
        await Store.commentaireClub.useCommentairesClub()
      }
  return (
    <form encType="multipart/form-data" method='post' name='commentClub' className='flex flex-col mb-10 items-center'>
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
