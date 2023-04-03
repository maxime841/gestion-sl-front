import { TPageProfilShop } from '@types-app/models/shop.model'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CardArticles } from '@molecules/card-article/card-article'

export default function CarouselArticles({ shopCurrent }: TPageProfilShop) {
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
    <h2 className="font-title text-center text-white text-8xl uppercase py-8 font-extrabold mb-10 underline"> Les articles du shop {shopCurrent.name}</h2>
          <Slider {...settings}>
          {shopCurrent.articles?.map(article => {
            return (
              <div key={article.id}>
              <Carousel className="carousel"responsive={responsive} centerMode={true}>
                <h3 className="ml-24 text-white text-2xl">L'article: {article.name}</h3>
                {article.pictures?.map(picture => {
                  return (
                    <div key={picture.id}>
                      <h4 className='text-white'>{picture.name}</h4>
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
              <CardArticles articleCurrent={article} />
              </div>
            </div>
            )
            })}
          </Slider>
  </div>
  )
}
