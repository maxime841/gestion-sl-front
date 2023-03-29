import { TPageProfilHost } from '@types-app/models/host.model'
import React from 'react'
import 'react-multi-carousel/lib/styles.css'

export default function SectionPageProfilHost({ hostCurrent }: TPageProfilHost) {
  return (
  <div className="flex flex-col">
    <div className='border-4 p-8 mt-10 rounded-xl'>
   <img src={hostCurrent?.picture?.picture_url} alt="Portrait du dj" className='w-36 h-36 rounded-full'/>
   <h2>{hostCurrent.name}</h2>
   <article>
    <p>A propos du host: {hostCurrent.presentation}</p>
   </article>
   </div>
  </div>
  )
}
