import React, { useState } from 'react'
import { TArticleProfil } from '@types-app/models/article.model'

export function CardArticles({ articleCurrent }: TArticleProfil) {
  return (
    <div className='cardArticle text-2xlborder-4 mt-10 mx-10 bg-green-100 p-6 mb-10'>
      <div className='flex'>
        <label className=" text-lg font-semibold">Nom de l'article:</label>
       <h2 className='ml-3'>{articleCurrent.name}</h2>
      </div>
      <div className='flex'>
        <label className="text-lg font-semibold">Nom du propriétaire:</label>
        <aside className='ml-3'>{articleCurrent.owner}</aside>
      </div>
      <div className='flex'>
        <label className="text-lg font-semibold">Descriptif de l'article:</label>
        <p className='ml-3'>{articleCurrent.presentation}</p>
      </div>
    </div>
  )
}
