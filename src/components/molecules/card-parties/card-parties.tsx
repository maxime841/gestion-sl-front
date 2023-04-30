import React, { useState } from 'react'
import { TPartyProfil } from '@types-app/models/party.model'

export function CardParties({ partyCurrent }: TPartyProfil) {
  return (
    <article className='cardParty text-2xlborder-4 mt-10 mx-10 bg-green-100 p-6'>
      <div className='flex'>
        <label className=" text-lg font-semibold">Nom de la soirée:</label>
        <h2 className='ml-3'>{partyCurrent.name}</h2>
      </div>
      <div className='flex'>
        <label className="text-lg font-semibold">Nom du propriétaire:</label>
        <aside className='ml-3'>{partyCurrent.owner}</aside>
      </div>
      <div className='flex'>
        <label className="text-lg font-semibold">Descriptif de la soirée:</label>
        <p className='ml-3'>{partyCurrent.presentation}</p>
      </div>
    </article>
  )
}
