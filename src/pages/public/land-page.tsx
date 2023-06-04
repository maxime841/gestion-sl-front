import { ContainerPrimary, EmodelContainer } from '@atoms/container/container-primary/container-primary'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'

export function LandPage() {
  const { idLand } = useParams()
  const land = Store.land.useLand(idLand!)

  return (
    <section>
      {/* info land */}
      <h1 className='text-center font-title text-3xl'>{land.name}</h1>
      <p
        className={`
          font-text
          text-justify
          bg-fond-cards
          max-w-lg p-5 mt-8 mb-8 mx-auto
          rounded-lg
        `}>
        {land.description}
      </p>

      {/* cards house */}
      <div className='flex flex-col-reverse items-center sm:items-start sm:flex-row sm:justify-center'>
        <article className='flex flex-col w-full items-center'>

        </article>

        {/* Caractéristique land  */}
        <aside className='h-fit border-2 border-black p-5 w-56 sm:ml-4 mb-8'>
          <h1 className='font-title'>Caractéristique du terrain</h1>
          <ul className='font-text text-start'>
            <li className='mt-4'>Propriétaire:{land.owner}</li>
            <li className='mt-4'>Groupe:{land.group}</li>
            <li className='mt-4'>Prims:{land.prims}</li>
            <li className='mt-4'>Prime restante:{land.remaining_prims}</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
