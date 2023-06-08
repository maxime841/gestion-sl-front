import { Btn } from '@atoms/btns/btn'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormDeleteDancer() {
  const navigate = useNavigate()
  const { dancerId } = useParams()

  /**
   *
   * @param e React.FormEvent
   */
  const submitDeleteDancer = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.dancer.deleteDancer(dancerId!)
    navigate('/dancers')
  }

  return (
    <form onSubmit={submitDeleteDancer} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Suppression de votre danseur</h3>
         <div className='flex flex-col'>
         {/* input nom dancer */}
         </div>

      <h2>Voulez vous vraiment supprimer ce danseur</h2>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/dancers'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Supprimer</Btn>
        </div>
      </div>
    </form>
  )
}
