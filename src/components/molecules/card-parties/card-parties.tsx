import React, { useState } from 'react'
import { TPartyProfil } from '@types-app/models/party.model'

export function CardParties({ partyCurrent }: TPartyProfil) {
  return (
    <div className='cardParty border-4 mt-10'>
    <h2>Nom de la soirée: {partyCurrent.name}</h2>
    <aside>Propriétaire: {partyCurrent.owner}</aside>
    <p>Présentation de la soirée: {partyCurrent.presentation}</p>
    </div>
  )
}
