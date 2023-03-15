import LinkBtn from '@atoms/links/link-btn'
import LogoPina from '../../assets/picture/Logo-pIna.png'
import React, { useState } from 'react'
import '../App.css'

function DescriptionPage() {
  return (
    <section className="">
        <h1 className="  text-center text-teal-300 text-3xl uppercase mt-12">Description du projet</h1>
        <LinkBtn addClass='mt-10 sm:ml-10 md:ml-16 lg:ml-24'children={'Site web click ici'} link={'/home'}></LinkBtn>
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
            <img src="" alt="Wam" />
        </figure>
            <div className="card-body">
                <h2 className="card-title">Wam</h2>
                <p>Un club street et tendance</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Lire plus</button>
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
  )
}
export default DescriptionPage
