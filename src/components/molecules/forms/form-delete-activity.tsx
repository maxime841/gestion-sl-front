import { Btn } from '@atoms/btns/btn'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormDeleteActivity() {
  const navigate = useNavigate()
  const { activityId } = useParams()

  /**
   *
   * @param e React.FormEvent
   */
  const submitDeleteActivity = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.activity.deleteActivity(activityId!)
    navigate('/activities')
  }

  return (
    <form onSubmit={submitDeleteActivity} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Suppression de votre activitée</h3>
         <div className='flex flex-col'>
         {/* input nom activity */}
         </div>

      <h2>Voulez vous vraiment supprimer cette activitée</h2>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/activities'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Supprimer</Btn>
        </div>
      </div>
    </form>
  )
}
