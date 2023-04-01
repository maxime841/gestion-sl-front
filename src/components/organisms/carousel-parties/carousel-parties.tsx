import { TPageProfilClub } from '@types-app/models/club.model'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CardParties } from '@molecules/card-parties/card-parties'

export default function CarouselParties({ clubCurrent }: TPageProfilClub) {
  const [isShown, setIsShown] = useState(false)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
  }

  return (
  <div className="flex flex-col">
    <h2 className="ml-10 mb-10 border-1 bg-green-100 p-4 text-2xl w-fit"> Les soirées du club {clubCurrent.name}</h2>
          <Slider {...settings}>
          {clubCurrent.parties?.map(party => {
            return (
              <div>
              <Carousel className="carousel"responsive={responsive} centerMode={true} removeArrowOnDeviceType={['tablet', 'mobile']} itemClass="carousel-item-padding-40-px">
                <h3 className="ml-24 text-white text-2xl">La soirée: {party.name}</h3>
                {party.pictures?.map(picture => {
                  return (
                    <div className="">
                      <h4>{picture.name}</h4>
                      <img
                        className='h-[300px]'
                        onMouseEnter={() => setIsShown(false)}
                        onMouseLeave={() => setIsShown(true)}
                        src={picture.picture_url}
                        alt={picture.name} />
                    </div>
                    )
                  })}
              </Carousel>
              <div className={`${isShown ? 'hidden' : 'block'}`}>
              <CardParties partyCurrent={party} />
              </div>
            </div>
            )
            })}
          </Slider>
  </div>
  )
}
