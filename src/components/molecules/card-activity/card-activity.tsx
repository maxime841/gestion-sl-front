import React, { useState } from 'react'
import { TActivityProfil } from '@types-app/models/activity.model'

export function CardActivities({ activityCurrent }: TActivityProfil) {
  return (
    <div className='cardArticle text-2xlborder-4 mt-10 mx-10 bg-green-100 p-6 mb-10'>
    <div className='flex'>
      <label className=" text-lg font-semibold">Nom de l'activité:</label>
     <h2 className='ml-3'>{activityCurrent.name}</h2>
    </div>
    <div className='flex'>
      <label className="text-lg font-semibold">Nom du propriétaire:</label>
      <aside className='ml-3'>{activityCurrent.owner}</aside>
    </div>
    <div className='flex'>
      <label className="text-lg font-semibold">Descriptif de l'activité:</label>
      <p className='ml-3'>{activityCurrent.presentation}</p>
    </div>
  </div>
  )
}
