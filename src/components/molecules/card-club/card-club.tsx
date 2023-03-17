import { Store } from '@store/store'
import React from 'react'

export function CardClub() {
  const clubs = Store.club.useClubs()

  return (
    <>
      {clubs ? (
        clubs.map(club => (
          <>
            {/* image club */}
            <img
              id={`${club.id}${club.name}`}
              className=' w-full rounded-tl-2xl md:rounded-tl-3xl rounded-tr-2xl md:rounded-tr-3xl'
              src={club.picture?.picture_url} />

            {/* info club */}
            <div className='px-2 md:px-4 mt-4'>
              <h2 className='font-title text-xl md:text-3xl font-bold mb-2'>
                club: {club.name}
              </h2>
              <p className='font-text'>Propriétaire: {club.owner}</p>
            </div>
          </>
        ))
      ) : (
        <p>loading ...</p>
      )}
    </>
  )
}
