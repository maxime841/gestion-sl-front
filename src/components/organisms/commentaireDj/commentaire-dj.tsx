import Title from '@atoms/title/title'
import { FormCommentaireDj } from '@molecules/forms/formCommentaireDj'
import userCommun from '../../../assets/picture/user.png'
import React from 'react'
import { TPageProfilDj } from '@types-app/models/dj.model'
import { Store } from '@store/store'
import { useParams } from 'react-router-dom'

export function CommentaireDj({ djCurrent }: TPageProfilDj) {
  const { djId } = useParams()

  const dj = Store.dj.useDj(djId!)

  return (
    <section>
    <Title addClass='font-title text-center text-white text-4xl uppercase mt-12 font-extrabold mb-5 underline'>Commentaire du dj</Title>
    <article className='border-4 mx-10 rounded-[36px]'>
      {djCurrent?.commentaires?.map(comment => {
        return (
          <article key={comment.id} className='text-white w-fit border-2 p-6 rounded-[36px] m-5'>
            <h3 className='ml-5 font-semibold mb-5'>Titre: {comment.title}</h3>
              <div className='flex'>
                {comment.picture ? <img src={comment.picture.picture_url} alt='portrait auteur'className='mr-10 rounded-full w-8 h-8'/> : <img src={userCommun} alt='portrait user vide' className='mr-10 rounded-full w-8 h-8' />}
                  {comment.content}
              </div>
              <div className='flex'>
                <aside className='mr-7'>
                {comment.created_at?.toLocaleString().substring(0, 10)}
                </aside>
                {}
              </div>
          </article>
        )
      })}
      <p className='text-white text-center mt-10'>Venez rajoutez votre propre commentaire pour que le dj lise vos critiques constructives ou vos bonne impressions, cela lui fera plaisir et ainsi voir si des améliorations possibles seront à faire
      </p>
      <FormCommentaireDj djCurrent={dj}/>
    </article>
    </section>
  )
}
