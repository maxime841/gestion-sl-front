import { Btn } from '@atoms/btns/btn'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormDeleteHost() {
  const navigate = useNavigate()
  const { hostId } = useParams()

  /**
   *
   * @param e React.FormEvent
   */
  const submitDeleteHost = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.host.deleteHost(hostId!)
    navigate('/hosts')
  }

  return (
    <form onSubmit={submitDeleteHost} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Suppression de votre host</h3>
         <div className='flex flex-col'>
         {/* input nom Host */}
         </div>

      <h2>Voulez vous vraiment supprimer ce host</h2>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/hosts'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Supprimer</Btn>
        </div>
      </div>
    </form>
  )
}
