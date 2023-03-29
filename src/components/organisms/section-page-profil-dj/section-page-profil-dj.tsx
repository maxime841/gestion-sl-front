import Input from '@atoms/inputs/input'
import { TPageProfilDj } from '@types-app/models/dj.model'
import React from 'react'
import 'react-multi-carousel/lib/styles.css'

export default function SectionPageProfilDj({ djCurrent }: TPageProfilDj) {
  console.log('mon dj', djCurrent)

  return (
  <div className="flex flex-col">
    <div className='border-4 p-8 mt-10 rounded-xl'>
   <img src={djCurrent?.picture?.picture_url} alt="Portrait du dj" className='w-36 h-36 rounded-full'/>
   <h2>{djCurrent.name}</h2>
   <article>
    <aside>Style musicale: {djCurrent.style}</aside>
    <p>A propos du dj: {djCurrent.presentation}</p>
   </article>
   </div>
  </div>
  )
}
