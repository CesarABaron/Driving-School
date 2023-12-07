import Carousel from "../components/Carousel/Carousel"
import OurServices from "../components/OurServices/OurServices"
import WhyUs from "../components/WhyUs/WhyUs"
import Location from "../components/Location/Location"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { getCourses } from "../Redux/Actions/coursesActions"
import { getProcedures } from "../Redux/Actions/proceduresActions"
import { getFAQS } from "../Redux/Actions/faqsActions"

const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getCourses())
      dispatch(getProcedures())
      dispatch(getFAQS())
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
