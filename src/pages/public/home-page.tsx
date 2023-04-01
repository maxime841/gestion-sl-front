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

function HomePage() {
  return (
    <section className="fond-palmier bg-cover">
     <h1 className="font-title text-center text-white text-8xl uppercase mt-12 font-extrabold">Home</h1>
     <p className="text-white text-center py-8">Ce site web est dédié à un jeux Second life, entre plusieurs personnes de communautés françaises, nous avons décidé
      de centraliser nos club, shopping et loisir pour vous montrer nos prestatations que l'on peux vous proposer. Voici leur logo </p>
      <article className="flex p-8 ">
        <h2 className="border-2 bg-blue-200 h-16 w-28 rounded-lg py-2 px-4">Nos clubs</h2>
        <img src={LogoPina} alt="Representation du pina colada" className='mx-10 w-80 h-80' />
        <img src={Wam} alt="Representation du wam" className='mx-10 w-80 h-80' />
        <img src={LCDA} alt="Representation du LCDA" className='mx-10 w-80 h-80' />
        <img src="" alt="Representation du Blackpearl" className='mx-10 w-80 h-04' />
        <img src={MCStream} alt="Representation du MC Stream Club" className='mx-10 w-80 h-80' />
      </article>
      <article className="flex p-8 bg-fond_clair">
        <h2 className="border-2 bg-blue-200 h-16 w-28 rounded-lg py-2 px-4">Nos shops</h2>
        <img src="" alt="Representation du Jersey Short Pose" className='mx-10 w-96 h-96' />
        <img src="" alt="Representation du TTC Tatoo" className='mx-10 w-96 h-96' />
        <img src={MCStreamShop} alt="Representation du MC Stream" className='mx-10 w-96 h-96' />
        <img src={ultimateWedding} alt="Representation du The ultimate Wedding" className='mx-10 w-96 h-96' />
        <img src={MPRanchEstate} alt="Representation du MP Ranch Estate" className='mx-10 w-96 h-96' />
      </article>
      <article className="flex p-8 bg-fond_clair">
        <h2 className="border-2 bg-blue-200 h-16 w-28 rounded-lg py-4 px-4">Nos loisirs</h2>
        <img src="" alt="Representation de l'hotel patronna" className='mx-10 w-96 h-96' />
        <img src={DreamGuadeloupe} alt="Representation de dream guadeloupe" className='mx-10 w-96 h-96' />
      </article>
    </section>
  )
}
export default HomePage
