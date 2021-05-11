import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  EffectCube,
  Navigation,
  Pagination,
  Autoplay,
  Controller,
} from 'swiper/core'

import 'swiper/swiper.min.css'
import 'swiper/components/effect-cube/effect-cube.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import './SliderCube.css'

import book1 from '../../images/book1.webp'
import book2 from '../../images/book2.jpg'
import book3 from '../../images/book3.png'

SwiperCore.use([Autoplay, EffectCube, Pagination, Navigation, Controller])

const SliderCube = () => {
  const arrImg = [book1, book2, book3, book1]

  const slides = []

  for (let i = 0; i < 4; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img src={arrImg[i]} alt='' />
        <img src={arrImg[i]} alt='' />
        <img src={arrImg[i]} alt='' />
      </SwiperSlide>
    )
  }

  const slides2 = []

  for (let i = 0; i < 4; i++) {
    slides2.push(
      <SwiperSlide tag='li' key={`slide-${i}`}>
        <img src={arrImg[i]} alt='' />
      </SwiperSlide>
    )
  }

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#26A6A7',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        tag='section'
        wrapperTag='ul'
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 30,
          shadowScale: 0.95,
        }}
        pagination={false}
        navigation={true}
        loop={true}
        speed={1000}
        className='sliderCube'
        id='main'
      >
        {slides}
      </Swiper>
    </>
  )
}

export default SliderCube
