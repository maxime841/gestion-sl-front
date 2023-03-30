import React, { useState } from 'react'
import { TArticleProfil } from '@types-app/models/article.model'

export function CardArticles({ articleCurrent }: TArticleProfil) {
  return (
    <div className='cardArticle border-4 mt-10'>
    <h2>Nom de l'article': {articleCurrent.name}</h2>
    <aside>Propriétaire de l'article: {articleCurrent.owner}</aside>
    <p>Présentation de l'article': {articleCurrent.presentation}</p>
    </div>
  )
}
