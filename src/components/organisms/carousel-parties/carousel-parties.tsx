import { Store } from '@store/store'
import { TPageProfilClub } from '@types-app/models/club.model'
import { useState, useRef, useEffect } from 'react'

const CarouselParties = ({ clubCurrent }: TPageProfilClub) => {
// => Définition des variables
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef(null) as any

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current * currentIndex >= maxScrollWidth.current
      )
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current = carousel.current * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current - carousel.current
      : 0
  }, [])

  return (
    <div className="carousel my-12 mx-auto">
      <><h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
          Les soirées du club {clubCurrent.name}
        </h2>
        <div className="relative overflow-hidden">
            <div className="flex justify-between absolute top left w-full h-full">
              <button
                onClick={movePrev}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled('prev')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7" />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled('next')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7" />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
              {clubCurrent?.parties?.map((party, index) => party?.pictures?.map(picture => {
                return (
                  <div
                    key={index}
                    className="carousel-item text-center relative w-64 h-64 snap-start"
                  >
                    <a
                      className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                      style={{ backgroundImage: `url(${picture.picture_url || ''})` }}
                    >
                      <img
                        src={picture.picture_url || ''}
                        alt={picture.name}
                        className="w-full aspect-square hidden" />
                    </a>
                    <a
                      className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                    >
                      <h3 className="text-white py-6 px-3 mx-auto text-xl">
                        {picture.name}
                      </h3>
                    </a>
                  </div>
                )
              }))}
            </div>
          </div></>
    </div>
  )
}

export default CarouselParties
