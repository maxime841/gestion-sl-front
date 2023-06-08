import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import SectionPageProfilLand from '@organisms/section-list-profil-land/section-list-profil-land'

function LandProfilPage() {
  const { landId } = useParams()
  const land = Store.land.useLand(landId!)
  console.log('mon land', land)

  return (
    <section className=''>
      <h1 className="font-title text-center py-8 text-white text-8xl uppercase font-extrabold underline">{land.name}</h1>
      <SectionPageProfilLand landCurrent={land} />
    </section>
  )
}
export default LandProfilPage
