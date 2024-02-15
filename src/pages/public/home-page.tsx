import React, { useState } from 'react'
import '../App.css'
import LogoPina from '../../assets/picture/Logo-pIna.png'
import Wam from '../../assets/picture/logo_wam.jpg'
import LCDA from '../../assets/picture/LCDA.png'
import MCStream from '../../assets/picture/MC-STream-Club.png'
import MCStreamShop from '../../assets/picture/MC-STREAM.png'
import ultimateWedding from '../../assets/picture/logo-mariage.png'
import MPRanchEstate from '../../assets/picture/MP-Ranch-Estate.png'
import DreamGuadeloupe from '../../assets/picture/Dream_Gaudeloupe01.png'
import JerseyShort from '../../assets/picture/logo-boutique-jersey-short.png'
import blackPearl from '../../assets/picture/nouv-black-pearl.png'
import hotelPatronna from '../../assets/picture/hotel-patro.png'

function HomePage() {
  return (
    <section className="fond-palmier bg-cover">
     <h1 className="font-title text-center py-8  text-white text-8xl uppercase font-extrabold">Home</h1>
     <p className="text-white text-center py-8">Ce site web est dédié à un jeux Second life, comme présenter en page d'acceuil ceux sont 6 créatrices françaises , elles sont ambitieuses motivées elles vous propose plusieurs service tels que leur shop, des evenements, des clubs. Pour encore mieu les découvrir voici leur logo </p>
      <article className="flex p-8 ">
        <h2 className="border-2 bg-blue-200 h-16 w-28 rounded-lg py-2 px-4">Nos clubs</h2>
        <img src={LogoPina} alt="Representation du pina colada" className='mx-8 w-72 h-72' />
        <img src={Wam} alt="Representation du wam" className='mx-8 w-72 h-72' />
        <img src={LCDA} alt="Representation du LCDA" className='mx-8 w-72 h-72' />
        <img src={blackPearl} alt="Representation du Blackpearl" className='mx-8 w-72 h-72' />
        <img src={MCStream} alt="Representation du MC Stream Club" className='mx-8 w-72 h-72' />
      </article>
      <article className="flex p-8 bg-fond_clair">
        <h2 className="border-2 bg-blue-200 h-16 w-28 rounded-lg py-2 px-4">Nos shops</h2>
        <img src={JerseyShort} alt="Representation du Jersey Short Pose" className='mx-10 w-80 h-80' />
        <img src="" alt="Representation du TTC Tatoo" className='mx-10 w-80 h-80' />
        <img src={MCStreamShop} alt="Representation du MC Stream" className='mx-10 w-80 h-80' />
        <img src={ultimateWedding} alt="Representation du The ultimate Wedding" className='mx-10 w-80 h-80' />
        <img src={MPRanchEstate} alt="Representation du MP Ranch Estate" className='mx-10 w-80 h-80' />
      </article>
      <article className="flex p-8 bg-fond_clair">
        <h2 className="border-2 bg-blue-200 h-16 w-28 rounded-lg py-2 px-4">Nos evenements</h2>
        <img src={hotelPatronna} alt="Representation de l'hotel patronna" className='mx-10 w-96 h-96' />
        <img src={DreamGuadeloupe} alt="Representation de dream guadeloupe" className='mx-10 w-96 h-96' />
      </article>
    </section>
  )
}
export default HomePage
