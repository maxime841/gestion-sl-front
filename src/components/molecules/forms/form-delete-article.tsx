import { Btn } from '@atoms/btns/btn'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormDeleteArticle() {
  const navigate = useNavigate()
  const { articleId } = useParams()

  /**
   *
   * @param e React.FormEvent
   */
  const submitDeleteArticle = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.article.deleteArticle(articleId!)
    navigate('/articles')
  }

  return (
    <form onSubmit={submitDeleteArticle} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Suppression de votre article</h3>
         <div className='flex flex-col'>
         {/* input nom Article */}
         </div>

      <h2>Voulez vous vraiment supprimer cet article</h2>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/articles'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Supprimer</Btn>
        </div>
      </div>
    </form>
  )
}
