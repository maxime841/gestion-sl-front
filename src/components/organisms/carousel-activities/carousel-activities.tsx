import { TPageProfilHobby } from '@types-app/models/hobby.model'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CardActivities } from '@molecules/card-activity/card-activity'

export default function CarouselActivities({ hobbyCurrent }: TPageProfilHobby) {
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
    <h2 className="ml-10 mb-10"> Les articles du terrain de loisir {hobbyCurrent.name}</h2>
          <Slider {...settings}>
          {hobbyCurrent.activities?.map(activity => {
            return (
              <div>
              <Carousel className="carousel"responsive={responsive} centerMode={true}>
                <h3 className="ml-24">L'activité: {activity.name}</h3>
                {activity.pictures?.map(picture => {
                  return (
                    <div>
                      <h4>{picture.name}</h4>
                      <img
                        onMouseEnter={() => setIsShown(false)}
                        onMouseLeave={() => setIsShown(true)}
                        src={picture.picture_url}
                        alt={picture.name} />
                    </div>
                    )
                  })}
              </Carousel>
              <div className={`${isShown ? 'hidden' : 'block'}`}>
              <CardActivities activityCurrent={activity} />
              </div>
            </div>
            )
            })}
          </Slider>
  </div>
  )
}
