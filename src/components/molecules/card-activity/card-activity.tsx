import React, { useState } from 'react'
import { TActivityProfil } from '@types-app/models/activity.model'

export function CardActivities({ activityCurrent }: TActivityProfil) {
  return (
    <div className='cardActivity border-4 mt-10'>
    <h2>Nom de l'activité: {activityCurrent.name}</h2>
    <aside>Propriétaire de l'activité: {activityCurrent.owner}</aside>
    <p>Présentation de l'activité: {activityCurrent.presentation}</p>
    </div>
  )
}
