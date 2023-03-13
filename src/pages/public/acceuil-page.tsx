import React, { useState } from 'react'
import '../App.css'
import fondsl from '../../assets/picture/fondsl.jpg'
import { Btn } from '@atoms/btns/btn'

function AcceuilPage() {
  return (
    <section className='relative'>
      <img
        src={fondsl}
        alt='logo second life'
        className='width sm:w-[768px] md:w-[992px] lg:w-[3000px]'
      />
      <Btn addClass='absolute sm:left-[250px] bottom-3 md:left-[380px] lg:left-[880px] bottom-16'>entrez ici</Btn>
    </section>
  )
}

export default AcceuilPage
