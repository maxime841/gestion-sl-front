import Title from '@atoms/title/title'
import { FormCommentaireClub } from '@molecules/forms/formCommentaireClub'
import { Store } from '@store/store'
import user from '../../../assets/picture/user.png'
import React from 'react'

export function CommentaireClub() {
  const commentaireClub = Store.commentaireClub.useCommentairesClub()
  console.log('mon commentaireClub', commentaireClub)

  return (
    <section>
    <Title addClass='font-title text-center text-white text-4xl uppercase mt-12 font-extrabold mb-5 underline'>Commentaire du club</Title>
    <article className='border-4 mx-10 rounded-[36px]'>
      {commentaireClub.map(comment => {
        return (
          <article key={comment.id} className='text-white w-fit border-2 p-6 rounded-[36px] m-5'>
            <h3 className='ml-5 font-semibold'>Titre: {comment.title}</h3>
              <div className='flex'>
                {comment.avatar ? <img src={comment.avatar} alt='portrait auteur'className='mr-10 rounded-full w-8 h-8'/> : <img src={user} alt='portrait user vide' className='mr-10 rounded-full w-8 h-8' />}
                  {comment.commentaire}
              </div>
              <div className='mt-5'>
                {comment.date_comment}
              </div>
          </article>
        )
      })}
      <FormCommentaireClub />
    </article>
    </section>
  )
}
