import SectionPageProfilDj from '@organisms/section-page-profil-dj/section-page-profil-dj'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function DjProfilPage() {
  const { djId } = useParams()
  const dj = Store.dj.useDj(djId!)
  console.log('mon dj', dj)

  return (
    <section>
      <h1 className="text-center text-4xl">{dj.name}</h1>
      <SectionPageProfilDj djCurrent={dj} />
    </section>
  )
}
export default DjProfilPage
