import { TPageProfilLand } from '@types-app/models/land.model'
import React from 'react'

export default function SectionPageProfilLand({ landCurrent }: TPageProfilLand) {
  console.log('mon land current: ', landCurrent)
  return (
    <div className="flex justify-center py-10">
    <div className='border-4 w-[1200px] p-16 mt-10 rounded-xl flex bg-green-100 opacity-50'>
      <img src={landCurrent?.picture?.picture_url} alt="Portrait du terrain" className=' w-48 h-48 rounded-full mb-10'/>
      <article className='flex flex-col ml-10'>
      <div className='flex mb-10'>
        <label className='text-black font-semibold w-18'>Nom du terrain:</label>
        <h2 className='text-black ml-3'>{landCurrent.name}</h2>
      </div>
      <div className='flex mb-10'>
        <label className='text-black font-semibold w-36'>A propos du terrain</label>
        <p className='text-black ml-3'>{landCurrent.presentation}</p>
    </div>
    </article>
   </div>
  </div>
  )
}
