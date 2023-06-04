import { Btn } from '@atoms/btns/btn'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormDeleteLand() {
  const navigate = useNavigate()
  const { landId } = useParams()
  console.log('l id land', landId)

  /**
   *
   * @param e React.FormEvent
   */
  const submitDeleteLand = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.land.deleteLand(landId!)
    navigate('/lands')
  }

  return (
    <form onSubmit={submitDeleteLand} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Suppression de votre terrain</h3>
         <div className='flex flex-col'>
         {/* input nom land */}
         </div>

      <h2>Voulez vous vraiment supprimer ce terrain</h2>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/lands'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Supprimer</Btn>
        </div>
      </div>
    </form>
  )
}
