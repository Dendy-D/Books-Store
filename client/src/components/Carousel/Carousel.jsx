import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import imgOne from '../../images/huc.jpg'
import imgSecond from '../../images/muzhchina_kapyushon_6223.jpg'

const DemoCarousel = () => {
  return (
    <Carousel autoPlay='true' infiniteLoop='true' interval='3000'>
      <div>
        <img src={imgOne} />
        <p className='legend'>Legend 1</p>
      </div>
      <div>
        <img src={imgSecond} />
        <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img src={imgOne} />
        <p className='legend'>Legend 3</p>
      </div>
    </Carousel>
  )
}

export default DemoCarousel
