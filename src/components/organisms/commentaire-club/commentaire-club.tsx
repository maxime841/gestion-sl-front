import Title from '@atoms/title/title'
import { FormCommentaireClub } from '@molecules/forms/formCommentaireClub'
import userCommun from '../../../assets/picture/user.png'
import React from 'react'
import { TPageProfilClub } from '@types-app/models/club.model'
import { Store } from '@store/store'

export function CommentaireClub({ clubCurrent }: TPageProfilClub) {
  console.log('mon club courant', clubCurrent)

  const user = Store.user.useUserCurrent()
  console.log('mon user', user)

  return (
    <section>
    <Title addClass='font-title text-center text-white text-4xl uppercase mt-12 font-extrabold mb-5 underline'>Commentaire du club</Title>
    <article className='border-4 mx-10 rounded-[36px]'>
      {clubCurrent?.commentaires?.map(comment => {
        return (
          <article key={comment.id} className='text-white w-fit border-2 p-6 rounded-[36px] m-5'>
            <h3 className='ml-5 font-semibold mb-5'>Titre: {comment.title}</h3>
              <div className='flex'>
                {comment.picture ? <img src={comment.picture.picture_url} alt='portrait auteur'className='mr-10 rounded-full w-8 h-8'/> : <img src={userCommun} alt='portrait user vide' className='mr-10 rounded-full w-8 h-8' />}
                  {comment.commentaire}
              </div>
              <div className='flex'>
                <aside className='mr-7'>
                {comment.created_at?.toLocaleString().substring(0, 10)}
                </aside>
                {comment.user?.name}
              </div>
          </article>
        )
      })}
      <FormCommentaireClub />
    </article>
    </section>
  )
}
