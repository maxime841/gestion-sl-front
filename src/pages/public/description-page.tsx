import LinkBtn from '@atoms/links/link-btn'
import LogoPina from '../../assets/picture/Logo-pIna.png'
import WamLogo from '../../assets/picture/logo_wam.jpg'
import React, { useState } from 'react'
import '../App.css'

function DescriptionPage() {
  return (
    <><section className="">
          <h1 className="  text-center text-teal-300 text-3xl uppercase mt-12">Description du projet</h1>
          <LinkBtn addClass='mt-10 sm:ml-10 md:ml-16 lg:ml-24' children={'Site web click ici'} link={'/home'}></LinkBtn>
          <p className="mt-10 mx-8 text-center">Bienvenue sur le site web qui vous présente une association de partenariat de club et shop dans un jeu Second life. Commencons par les présenter !!!</p>
          <article className="flex justify-items-center mt-24 py-5 grid sm: grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 ml-16 mr-16 lg:grid-cols-3 gap-x-36 gap-y-36">
              <div className="card w-96 bg-base-100 shadow-xl image-full -rotate-[12deg]">
                  <figure>
                      <img src={LogoPina} alt="Pina colada club" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Pina colada club</h2>
                      <p>Un district qui vous proposent plein d'activités</p>
                      <div className="card-actions justify-end">
                          <button className="btn btn-primary">Lire plus</button>
                      </div>
                  </div>
              </div>

              <div className="card w-96 bg-base-100 shadow-xl image-full rotate-[12deg]">
                  <figure>
                      <img src={WamLogo} alt="Wam" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Wam</h2>
                      <p>Wam est un lieu basé sur la culture afro, où vous trouverez...</p>
                      <div className="card-actions justify-end">
                          <label htmlFor="my-modal-6" className="btn">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card w-96 bg-base-100 shadow-xl image-full rotate-[12deg]">
                  <figure>
                      <img src="" alt="Continent africa" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Le continent d'afrique</h2>
                      <p>Un complex de deux clubs</p>
                      <div className="card-actions justify-end">
                          <button className="btn btn-primary">Lire plus</button>
                      </div>
                  </div>
              </div>

              <div className="card w-96 bg-base-100 shadow-xl image-full -rotate-[12deg]">
                  <figure>
                      <img src="" alt="Tatoo" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Tatoo shop</h2>
                      <p>Un shop de tatoo</p>
                      <div className="card-actions justify-end">
                          <button className="btn btn-primary">Lire plus</button>
                      </div>
                  </div>
              </div>

              <div className="card w-96 bg-base-100 shadow-xl image-full -rotate-[12deg]">
                  <figure>
                      <img src="" alt="Queen pose" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Queen shop pose</h2>
                      <p>Un shop de poses</p>
                      <div className="card-actions justify-end">
                          <button className="btn btn-primary">Lire plus</button>
                      </div>
                  </div>
              </div>
          </article>
      </section>
          {/** **********************************Modal Wam**************************************/}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" /><div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={WamLogo} alt="portrait club wam" />
                  <h3 className="font-bold text-lg">Description club WAM</h3>
                  <p className="py-4">Wam est un lieu basé sur la culture afro, où vous trouverez toutes sortes de musique, deejays, d'artistes et de spectacles.
Il est ouvert pour les sorties 24h/24 et 7j/7, vous avez un salon de détente avec la zone de grillade du bar Allen et un food truck, la nourriture est compatible avec le système Mystory RP.
Le lieu Wam est de style moderne / urbain avec un salon élégant, vous pouvez réserver chez nous des événements comme des anniversaires, des baby showers, des fiançailles, etc. Nous soutenons les artistes et créateurs qui souhaitent promouvoir leur travail, les nouvelles idées sont également les bienvenues.
Nous concentrons tout autour de la culture noire, hip hop, rnb, moombathon, reggae dancehall, old school, afrobeat, nous vous accueillons tous dans notre salle WAM qui signifie Crazy Monkey.
</p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">Fermer</label>
                  </div>
              </div>
          </div></>
  )
}

export default DescriptionPage
