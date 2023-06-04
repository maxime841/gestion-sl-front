import { Btn } from '@atoms/btns/btn'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormDeleteClub() {
  const navigate = useNavigate()
  const { clubId } = useParams()

  /**
   *
   * @param e React.FormEvent
   */
  const submitDeleteClub = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.club.deleteClub(clubId!)
    navigate('/clubs')
  }

  return (
    <form onSubmit={submitDeleteClub} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Suppression de votre club</h3>
         <div className='flex flex-col'>
         {/* input nom land */}
         </div>

      <h2>Voulez vous vraiment supprimer ce club</h2>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/clubs'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Supprimer</Btn>
        </div>
      </div>
    </form>
  )
}
