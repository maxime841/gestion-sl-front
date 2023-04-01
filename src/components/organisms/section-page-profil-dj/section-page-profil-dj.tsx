import Input from '@atoms/inputs/input'
import { TPageProfilDj } from '@types-app/models/dj.model'
import React from 'react'
import 'react-multi-carousel/lib/styles.css'

export default function SectionPageProfilDj({ djCurrent }: TPageProfilDj) {
  console.log('mon dj', djCurrent)

  return (
  <div className="flex justify-center">
    <div className='border-4 w-[1200px] p-16 mt-10 rounded-xl flex'>
      <img src={djCurrent?.picture?.picture_url} alt="Portrait du dj" className=' w-48 h-48 rounded-full mb-10'/>
      <article className='flex flex-col ml-10'>
      <div className='flex mb-10'>
        <label className='text-white font-semibold w-18'>Nom du Dj:</label>
        <h2 className='text-white ml-3'>{djCurrent.name}</h2>
      </div>
      <div className='flex mb-10'>
        <label className='text-white font-semibold w-32'>Style musical:</label>
        <aside className='text-white ml-3'>{djCurrent.style}</aside>
      </div>
      <div className='flex mb-10'>
        <label className='text-white font-semibold w-32'>A propos du dj</label>
        <p className='text-white ml-3'>{djCurrent.presentation}</p>
    </div>
    </article>
   </div>
  </div>
  )
}
