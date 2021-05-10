import React from 'react'
import Slider from '../../components/Slider/Slider'
import { SliderData } from '../../components/Slider/SliderData'

import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <div className='sliderMain'>
        <Slider slides={SliderData} />
        {console.log(SliderData)}
      </div>
    </div>
  )
}

export default Main
