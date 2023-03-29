import { TPageProfilDancer } from '@types-app/models/dancer.model'
import React from 'react'

export default function SectionPageProfilDancer({ dancerCurrent }: TPageProfilDancer) {
  return (
  <div className="flex flex-col">
    <div className='border-4 p-8 mt-10 rounded-xl'>
   <img src={dancerCurrent?.picture?.picture_url} alt="Portrait du dancer" className='w-36 h-36 rounded-full'/>
   <h2>{dancerCurrent.name}</h2>
   <article>
    <p>A propos du danseur: {dancerCurrent.presentation}</p>
   </article>
   </div>
  </div>
  )
}
