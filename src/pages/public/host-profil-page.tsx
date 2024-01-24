import SectionPageProfilHost from '@organisms/section-page-profil-host/section-page-profil-host'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function HostProfilPage() {
  const { hostId } = useParams()
  const host = Store.host.useHost(hostId!)

  return (
    <section /* className='fond-ecran-host bg-contain' */>
      <h1 className="font-title text-center py-8 text-white text-8xl uppercase font-extrabold underline">{host.name}</h1>
      <SectionPageProfilHost hostCurrent={host} />
    </section>
  )
}
export default HostProfilPage
