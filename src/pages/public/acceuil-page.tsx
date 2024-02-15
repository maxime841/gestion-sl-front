import React, { useState } from 'react'
import '../App.css'
import Aoks_city from '../../assets/picture/Aoks city.png'
import LinkBtn from '@atoms/links/link-btn'

function AcceuilPage() {
  return (
    <section className='relative'>
      <img
        src={Aoks_city}
        alt='logo second life'
        className='width sm:w-[768px] md:w-[992px] lg:w-[3000px]'
      />
      <LinkBtn addClass='absolute sm:left-[250px] md:left-[380px] bottom-5 lg:left-[880px] sm:bottom-3 md:bottom-5 lg:bottom-16' children={'entrez ici'} link={'/description'}></LinkBtn>
    </section>
  )
}
export default AcceuilPage
