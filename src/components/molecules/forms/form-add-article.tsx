import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function FormAddArticle() {
  // state for input
  const [valueNameArticle, setValueNameArticle] = useState('')
  const [valueOwnerArticle, setValueOwnerArticle] = useState('')
  const [valuePresentationArticle, setValuePresentationArticle] = useState('')
  const [valueDescriptionArticle, setValueDescriptionArticle] = useState('')
  const [valuePriceArticle, setValuePriceArticle] = useState('')
  const [valueTagArticle, setValueTagArticle] = useState('')

  // const loginLoader = Store.user.useLoginLoader()
  const navigate = useNavigate()

  /**
   * connexion user
   * @param e React.FormEvent
   */
  const submitAddArticle = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.article.addOneArticle(valueNameArticle, valueOwnerArticle, valuePresentationArticle, valueDescriptionArticle, valuePriceArticle, valueTagArticle)
    navigate('/articles')
  }

  return (
    <form onSubmit={submitAddArticle} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Ajouter votre article</h3>
         <div className='flex flex-col'>
         {/* input nom Article */}
      <InputFull
        placeholder="Nom de l'article"
        value={valueNameArticle}
        setValueInput={setValueNameArticle}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input owner Article */}
      <InputFull
        placeholder="Propriétaire de l'article"
        value={valueOwnerArticle}
        setValueInput={setValueOwnerArticle}
        type='text'
        addClass='mb-4'
        required
      />
         {/* input presentation Article */}
      <InputFull
        placeholder="Presentation de l'article"
        value={valuePresentationArticle}
        setValueInput={setValuePresentationArticle}
        type='text'
        addClass='mb-4'
        required
      />
        {/* input description Article */}
      <InputFull
        placeholder="Description de l'article"
        value={valueDescriptionArticle}
        setValueInput={setValueDescriptionArticle}
        type='text'
        addClass='mb-4'
        required
      />

       {/* input prix Article */}
       <InputFull
        placeholder="Prix de l'article"
        value={valuePriceArticle}
        setValueInput={setValuePriceArticle}
        type='text'
        addClass='mb-4'
        required
      />

       {/* input tag Article */}
       <InputFull
        placeholder="Tag de l'article"
        value={valueTagArticle}
        setValueInput={setValueTagArticle}
        type='text'
        addClass='mb-4'
        required
      />
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/articles'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Ajouter</Btn>
        </div>
      </div>
      </div>
    </form>
  )
}
