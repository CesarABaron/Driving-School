import Carousel from "../components/Carousel/Carousel"
import OurServices from "../components/OurServices/OurServices"
import WhyUs from "../components/WhyUs/WhyUs"
import Location from "../components/Location/Location"
import React from 'react'

const Home = () => {
  return (
    <div>
        <Carousel/><br/><br/>
        <WhyUs/><br/><br/>
        <OurServices/><br/><br/>
        <Location/>
    </div>
  )
}

export default Home
