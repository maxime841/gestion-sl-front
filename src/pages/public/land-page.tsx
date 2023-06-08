import { ContainerPrimary, EmodelContainer } from '@atoms/container/container-primary/container-primary'
import { SectionListLand } from '@organisms/section-list-land/section-list-land'
import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'

export function LandPage() {
  return (
    <section>
      <SectionListLand />
    </section>
  )
}
