import { TPageProfilHost } from '@types-app/models/host.model'
import React from 'react'
import 'react-multi-carousel/lib/styles.css'

export default function SectionPageProfilHost({ hostCurrent }: TPageProfilHost) {
  return (
  <div className="flex justify-center py-16">
    <div className='border-4 w-[1200px] p-16 mt-10 rounded-xl flex bg-green-100 opacity-60'>
      <img src={hostCurrent?.picture?.picture_url} alt="Portrait du dj" className=' w-48 h-48 rounded-full mb-10'/>
      <article className='flex flex-col ml-10'>
      <div className='flex mb-10'>
        <label className='text-black font-semibold w-18'>Nom du host:</label>
        <h2 className='text-black ml-3'>{hostCurrent.name}</h2>
      </div>
      <div className='flex mb-10'>
        <label className='text-black font-semibold w-32'>A propos du host</label>
        <p className='text-black ml-3'>{hostCurrent.presentation}</p>
    </div>
    </article>
   </div>
  </div>
  )
}
