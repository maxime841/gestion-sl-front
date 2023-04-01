import SectionPageProfilHost from '@organisms/section-page-profil-host/section-page-profil-host'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

function HostProfilPage() {
  const { hostId } = useParams()
  const host = Store.host.useHost(hostId!)

  return (
    <section>
      <h1 className="font-title text-center text-white text-8xl uppercase mt-12 font-extrabold mb-10 underline">{host.name}</h1>
      <SectionPageProfilHost hostCurrent={host} />
    </section>
  )
}
export default HostProfilPage
