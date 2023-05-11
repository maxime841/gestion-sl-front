import { ContainerPrimary } from '@atoms/container/container-primary/container-primary'
import { EmodelContainer } from '@types-app/container.type'
import { FormLogin } from '@molecules/forms/form-login'
import React from 'react'

export default function SectionLogin() {
  return (
    <ContainerPrimary addClass='mx-auto' model={EmodelContainer.m}>
      <FormLogin />
    </ContainerPrimary>
  )
}
