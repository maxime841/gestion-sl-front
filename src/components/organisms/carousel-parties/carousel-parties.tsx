import { TPageProfilClub } from '@types-app/models/club.model'
import React from 'react'
import Slider from 'react-slick'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function CarouselParties({ clubCurrent }: TPageProfilClub) {
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
    // slidesToShow: 3,
    // slidesToScroll: 3,
    centerMode: true,
    // autoplay: true
  }
  return (
  <div className="flex flex-col">
    <h2> Les soirées du club {clubCurrent.name}</h2>
          <Slider {...settings}>
          {clubCurrent.parties?.map(party => {
            return (
              <Carousel responsive={responsive}>
                <h3>{party.name}</h3>
                {party.pictures?.map(picture => {
                  return (
                    <div>
                      <h4>{picture.name}</h4>
                      <img
                        src={picture.picture_url}
                        alt={picture.name} />
                    </div>
                    )
                  })}
              </Carousel>
            )
            })}
          </Slider>
  </div>
  )
}
