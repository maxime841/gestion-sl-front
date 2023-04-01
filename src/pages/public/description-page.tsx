import LinkBtn from '@atoms/links/link-btn'
import LogoPina from '../../assets/picture/Logo-pIna.png'
import WamLogo from '../../assets/picture/logo_wam.jpg'
import DreamGuadeloupe from '../../assets/picture/Dream_Gaudeloupe01.png'
import LCDA from '../../assets/picture/LCDA.png'
import MCStream from '../../assets/picture/MC-STream-Club.png'
import MC_Stream from '../../assets/picture/MC-STREAM.png'
import ultimateWedding from '../../assets/picture/logo-mariage.png'
import MPRanchEstate from '../../assets/picture/MP-Ranch-Estate.png'
import React from 'react'
import '../App.css'

function DescriptionPage() {
  return (
    <>
    <section className="fond-palmier bg-no-repeat bg-cover h-[2600px]">
          <h1 className="font-title  text-center text-white text-8xl mt-12 font-extrabold">The project</h1>
          <LinkBtn addClass='mt-10 sm:ml-10 md:ml-16 lg:ml-24' children={'Site web click ici'} link={'/home'}></LinkBtn>
          <p className="text-white text-2xl font-medium mt-10 mx-8 text-center">Bienvenue sur le site web qui vous présente une association de partenariat de club, terrain de loisir et shop dans un jeu Second life. Commencons par les présenter !!!</p>
          <article className="grid sm: grid-cols-1 justify-items-center md:grid-cols-2 ml-24 mr-24 mt-16 lg:grid-cols-3 gap-x-48 gap-y-48">
              <div className="card bg-base-100 brightness-200 image-full -rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={LogoPina} alt="Pina colada club brightness-200" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Pina colada club</h2>
                      <p>Un district qui vous proposent plein d'activités</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-1" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={WamLogo} alt="Wam" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Wam</h2>
                      <p>Wam est un lieu basé sur la culture afro, où vous trouverez...</p>
                      <div className="card-actions justify-end">
                          <label htmlFor="my-modal-2" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-white brightness-200 image-full -rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={LCDA} alt="Continent africa" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Le continent d'afrique</h2>
                      <p>Un complex de deux clubs</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-3" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src="" alt="Tatoo" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">TTC Tatoo</h2>
                      <p>Un shop de tatoo</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-4" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full -rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src="" alt="Jersey pose" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Jersey short pose</h2>
                      <p>Un shop de poses</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-5" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={DreamGuadeloupe} alt="Presentation dream guadeloupe" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Dream guadeloupe</h2>
                      <p>Une sim de loisir.</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-6" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full -rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={DreamGuadeloupe} alt="Presentation blackperal" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Blackpearl Club</h2>
                      <p>Un club sous l'emprise du monde pirate.</p>
                      <div className="card-actions justify-end">
                        <label htmlFor="my-modal-7" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={DreamGuadeloupe} alt="Presentation hotel patronna" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">Hotel Patronna</h2>
                      <p>Un hotel convivial.</p>
                      <div className="card-actions justify-end">
                        <label htmlFor="my-modal-8" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full -rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={MCStream} alt="MC Stream club" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">MC Stream club</h2>
                      <p>Un club MC Stream</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-9" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full -rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={MC_Stream} alt="MC Stream" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">MC Stream</h2>
                      <p>Un shop qui vend des stream</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-10" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={ultimateWedding} alt="The Ultimate Wedding" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">The Ultimate Wedding</h2>
                      <p>Un shop qui vend tous les accessoires de mariage</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-11" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>

              <div className="card bg-base-100 brightness-200 image-full -rotate-[12deg] sm:w-96 md:w-72 lg:w-96">
                  <figure>
                      <img src={MPRanchEstate} alt="MP Ranch Estate" />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">MP Ranch Estate</h2>
                      <p>Un shop qui loue des terrains vierges</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-12" className="btn bg-black">Lire plus</label>
                      </div>
                  </div>
              </div>
          </article>
      </section>

          {/** **********************************Modal pina colada**************************************/}
          <input type="checkbox" id="my-modal-1" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={LogoPina} alt="portrait club pina colada" />
                  <h3 className="font-bold text-lg">Description club Pina Colada</h3>
                  <p className="py-4">Le pina Colada est une sim composé d'un club tropical ainsi qu'un restaurant blablabla...</p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-1" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

          {/** **********************************Modal Wam**************************************/}
          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={WamLogo} alt="portrait club wam" />
                  <h3 className="font-bold text-lg">Description club WAM</h3>
                  <p className="py-4">Wam est un lieu basé sur la culture afro, où vous trouverez toutes sortes de musique, deejays, d'artistes et de spectacles.
                    Il est ouvert pour les sorties 24h/24 et 7j/7, vous avez un salon de détente avec la zone de grillade du bar Allen et un food truck, la nourriture est compatible avec le système Mystory RP.
                    Le lieu Wam est de style moderne / urbain avec un salon élégant, vous pouvez réserver chez nous des événements comme des anniversaires, des baby showers, des fiançailles, etc. Nous soutenons les artistes et créateurs qui souhaitent promouvoir leur travail, les nouvelles idées sont également les bienvenues.
                    Nous concentrons tout autour de la culture noire, hip hop, rnb, moombathon, reggae dancehall, old school, afrobeat, nous vous accueillons tous dans notre salle WAM qui signifie Crazy Monkey.
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-2" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

             {/** **********************************Modal LCDA**************************************/}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={LCDA} alt="portrait club lcda" />
                  <h3 className="font-bold text-lg">Description club Le continent d'Afrique</h3>
                  <p className="py-4">Un club nomade qui traverse le continent D'Afrique, dans ses paysages époustouflants.
                    Il pose son bivouac le temps de découvrir sa musique, son histoire, ses traditions et sa culture avant de reprendre la route.
                    Nous vous proposons plusieurs styles de musique venus du Continent d'Afrique, ainsi que des musiques d'autres continents à titre exceptionnel.
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-3" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

            {/** **********************************Modal TTC Tatoo**************************************/}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src="" alt="portrait shop TTC Tatoo" />
                  <h3 className="font-bold text-lg">Description shop TTC Tatoo</h3>
                  <p className="py-4">Un shop de tatouage ......
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-4" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

             {/** **********************************Modal Jersey Short Pose**************************************/}
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src="" alt="portrait shop Jersey Short Pose" />
                  <h3 className="font-bold text-lg">Description shop Jersey Short Pose</h3>
                  <p className="py-4">Un shop de pose homme femme et couple de tout genre ainsi qu'une partie manicure avec la fabrication d'ongle de tout type de corps et style.
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-5" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

               {/** **********************************Modal Dream guadeloupe**************************************/}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={DreamGuadeloupe} alt="portrait club dream guadeloupe" />
                  <h3 className="font-bold text-lg">Description de Dream Guadeloupe</h3>
                  <p className="py-4">Bienvenue à vous sur Dream Guadeloupe<br />
                    Cette île voit le jour en 2023 tenue par un projet fort et différent.<br />
                    Loin dans l'océan nous avons voyagez depuis nos débuts SL et Atlantys au départ il y a plus de 10 ans a connu un succès remarquable par sa différence. C'est en Guadeloupe que nous avons poser l'ancre.<br />
                    Vous disposez d'un espace de divertissement accessible à tous (rezzers gratuits) :
                    <ul>
                        <li>-Surf</li>
                        <li>-Jetski, planche à voile</li>
                        <li>-Voilier, barques</li>
                        <li>-Jeu Bumper multi-joueurs aquatique</li>
                        <li>-Pédalo</li>
                        <li>-Accro-branche</li>
                        <li>-Warbug (petits avions maniables) mitraille par équipe ou individuel</li>
                    </ul>
                    <br />
                    Plusieurs moyens de locomotions sont aussi à vôtre disposition tel que VTT, walker couple, ballons hélium, bumper aquatique.
                    La nudité est reglementée, vous disposez d'une plage naturiste, en dehors de celle ci, au minimum un paréo et poitrine couverte pour mesdames et un slip de bain pour messieurs. Les avatars enfants sont interdits. La sim est classée Adulte.
                    La chasse des vampires, le racollage ou tout autre activité liée à l'argent ne sont pas autorisés.
                    Nous organiserons des évènements régulièrement, concert live, courses aquatiques, contest de surf... et bien d'autres rendez-vous.
                    </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">Fermer</label>
                  </div>
            </div>
        </div>

          {/** **********************************Modal Blackpearl**************************************/}
          <input type="checkbox" id="my-modal-7" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src="" alt="portrait club Blackpearl" />
                  <h3 className="font-bold text-lg">Description club Blackpearl</h3>
                  <p className="py-4">Un club sous l'influence pirate.....
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-7" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

             {/** **********************************Modal Hotel Patronna**************************************/}
          <input type="checkbox" id="my-modal-8" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src="" alt="portrait hotel Patronna" />
                  <h3 className="font-bold text-lg">Description hotel Patronna</h3>
                  <p className="py-4">Un hotel de charme........
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-8" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

            {/** **********************************Modal MC Stream Club**************************************/}
          <input type="checkbox" id="my-modal-9" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={MCStream} alt="portrait club MC Stream" />
                  <h3 className="font-bold text-lg">Description club MC Stream</h3>
                  <p className="py-4">Un club sous l'influence EDM en general.....
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-9" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

            {/** **********************************Modal MC Stream shop**************************************/}
          <input type="checkbox" id="my-modal-10" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={MC_Stream} alt="portrait shop MC Stream" />
                  <h3 className="font-bold text-lg">Description shop MC Stream</h3>
                  <p className="py-4">Un shop de stream qui propose aux dj de pouvoir mixer avec une stream de radio.....
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-10" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

            {/** **********************************Modal The Ultimate Wedding**************************************/}
          <input type="checkbox" id="my-modal-11" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={ultimateWedding} alt="portrait shop the ultimate wedding" />
                  <h3 className="font-bold text-lg">Description shop The Ultimate Wedding</h3>
                  <p className="py-4">Un shop luxueux de robe et accessoire de mariage....
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-11" className="btn">Fermer</label>
                  </div>
              </div>
            </div>

            {/** **********************************Modal MP Ranch Estate**************************************/}
          <input type="checkbox" id="my-modal-12" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black">
              <img src={MPRanchEstate} alt="portrait shop MP Ranch Estate" />
                  <h3 className="font-bold text-lg">Description shop MP Ranch Estate</h3>
                  <p className="py-4">Un shop qui permet aux utilisateur de second life d'acquérir un terrain.....
                 </p>
                  <div className="modal-action">
                      <label htmlFor="my-modal-12" className="btn">Fermer</label>
                  </div>
              </div>
            </div>
        </>
  )
}

export default DescriptionPage
