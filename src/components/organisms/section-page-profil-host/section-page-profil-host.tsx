import { TPageProfilHost } from '@types-app/models/host.model'
import React from 'react'
import 'react-multi-carousel/lib/styles.css'

export default function SectionPageProfilHost({ hostCurrent }: TPageProfilHost) {
  return (
  <div className="flex justify-center">
    <div className='border-4 w-[1200px] p-16 mt-10 rounded-xl flex'>
      <img src={hostCurrent?.picture?.picture_url} alt="Portrait du dj" className=' w-48 h-48 rounded-full mb-10'/>
      <article className='flex flex-col ml-10'>
      <div className='flex mb-10'>
        <label className='text-white font-semibold w-20'>Nom host:</label>
        <h2 className='text-white ml-3'>{hostCurrent.name}</h2>
      </div>
      <div className='flex mb-10'>
        <label className='text-white font-semibold w-38'>A propos de l'host:</label>
        <p className='text-white ml-3'>{hostCurrent.presentation}</p>
    </div>
    </article>
   </div>
  </div>
  )
}
