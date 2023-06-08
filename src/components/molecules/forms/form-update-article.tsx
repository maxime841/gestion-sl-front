import { Btn } from '@atoms/btns/btn'
import { InputFull } from '@atoms/inputs/input-full'
import { LabelPrimary } from '@atoms/labels/label-primary/label-primary'
import { Store } from '@store/store'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormUpdateArticle() {
  const navigate = useNavigate()
  const { articleId } = useParams()
  const Article = Store.article.useArticle(articleId!)
  const [name, setNameArticle] = useState('')
  const [owner, setOwnerArticle] = useState('')
  const [presentation, setPresentationArticle] = useState('')
  const [description, setDescriptionArticle] = useState('')
  const [price, setPriceArticle] = useState('')
  const [tag, setTagArticle] = useState('')

  useEffect(() => {
    setNameArticle(name!)
    setOwnerArticle(owner!)
    setPresentationArticle(presentation!)
    setDescriptionArticle(description!)
    setPriceArticle(price!)
    setTagArticle(tag!)
  }, [Article])

  const handlerOnSubUpdateArticle = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await Store.article.updateArticle(
      name,
      owner,
      presentation,
      description,
      price,
      tag,
      articleId)

    if (res) {
      navigate('/articles')
    }
  }

  return (
    <form onSubmit={handlerOnSubUpdateArticle} className='w-[500px] mx-auto mt-24'>
      {/* input name Article */}
      <LabelPrimary>Nom de l'article: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau nom d'article"
        value={name ?? ''}
        setValueInput={setNameArticle}
        type='text'
        activeReset
      />

      {/* input ownerArticle */}
      <LabelPrimary>Propriétaire de l'article: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau propriétaire de l'article"
        value={owner ?? ''}
        setValueInput={setOwnerArticle}
        type='text'
        activeReset
      />

      {/* input presentation Article */}
      <LabelPrimary>Presentation de l'article: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle présentation de l'article"
        value={presentation ?? ''}
        setValueInput={setPresentationArticle}
        type='text'
        activeReset
      />

      {/* input description Article */}
      <LabelPrimary>Description de l'article: </LabelPrimary>
      <InputFull
        placeholder="Votre nouvelle description de l'article"
        value={description ?? ''}
        setValueInput={setDescriptionArticle}
        type='text'
        activeReset
      />

      {/* input price Article */}
      <LabelPrimary>Prix de l'article: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau prix de l'article"
        value={price ?? ''}
        setValueInput={setPriceArticle}
        type='text'
        activeReset
      />

      {/* input tag Article */}
      <LabelPrimary>Tag de l'article: </LabelPrimary>
      <InputFull
        placeholder="Votre nouveau tag de l'article"
        value={tag ?? ''}
        setValueInput={setTagArticle}
        type='text'
        activeReset
      />

      {/* btn form */}
      <div className='flex justify-end mt-4'>
        {/* btn form */}
        <div className='flex justify-end mt-4'>
          <Btn submit>Modifier</Btn>
        </div>
      </div>
    </form>
  )
}
