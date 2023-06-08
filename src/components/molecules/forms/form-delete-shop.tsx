import { Btn } from '@atoms/btns/btn'
import LinkBtn from '@atoms/links/link-btn'
import { Store } from '@store/store'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function FormDeleteShop() {
  const navigate = useNavigate()
  const { shopId } = useParams()

  /**
   *
   * @param e React.FormEvent
   */
  const submitDeleteShop = async (e: React.FormEvent) => {
    e.preventDefault()
    await Store.shop.deleteShop(shopId!)
    navigate('/Shops')
  }

  return (
    <form onSubmit={submitDeleteShop} className='text-center w-[500px] mx-auto mt-24'>
      <h3 className="font-bold text-lg mb-10">Suppression de votre magasin</h3>
         <div className='flex flex-col'>
         {/* input nom Shop */}
         </div>

      <h2>Voulez vous vraiment supprimer ce magasin</h2>
      <div className='flex'>
         {/* btn form */}
        <div className='mt-4 mx-4'>
          <LinkBtn children={'Retour'} link={'/shops'}></LinkBtn>
        </div>

         {/* btn form */}
        <div className='mt-4'>
          <Btn submit>Supprimer</Btn>
        </div>
      </div>
    </form>
  )
}
