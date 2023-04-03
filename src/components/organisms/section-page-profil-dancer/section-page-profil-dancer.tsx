import { TPageProfilDancer } from '@types-app/models/dancer.model'
import React from 'react'

export default function SectionPageProfilDancer({ dancerCurrent }: TPageProfilDancer) {
  return (
    <div className="flex justify-center py-10">
    <div className='border-4 w-[1200px] p-16 mt-10 rounded-xl flex bg-green-100 opacity-50'>
      <img src={dancerCurrent?.picture?.picture_url} alt="Portrait du dj" className=' w-48 h-48 rounded-full mb-10'/>
      <article className='flex flex-col ml-10'>
      <div className='flex mb-10'>
        <label className='text-black font-semibold w-18'>Nom du Danseur:</label>
        <h2 className='text-black ml-3'>{dancerCurrent.name}</h2>
      </div>
      <div className='flex mb-10'>
        <label className='text-black font-semibold w-36'>A propos du danseur</label>
        <p className='text-black ml-3'>{dancerCurrent.presentation}</p>
    </div>
    </article>
   </div>
  </div>
  )
}
