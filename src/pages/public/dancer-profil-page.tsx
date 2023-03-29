import SectionPageProfilDancer from '@organisms/section-page-profil-dancer/section-page-profil-dancer'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function DancerProfilPage() {
  const { dancerId } = useParams()
  const dancer = Store.dancer.useDancer(dancerId!)

  return (
    <section>
      <h1 className="text-center text-4xl">{dancer.name}</h1>
      <SectionPageProfilDancer dancerCurrent={dancer} />
    </section>
  )
}
export default DancerProfilPage
