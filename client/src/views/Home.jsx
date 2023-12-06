import Carousel from "../components/Carousel/Carousel"
import OurServices from "../components/OurServices/OurServices"
import WhyUs from "../components/WhyUs/WhyUs"
import Location from "../components/Location/Location"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { getCourses } from "../Redux/Actions/coursesActions"

const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getCourses())
  },[])
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
