import React, { useEffect } from 'react'
import { getCourses } from "../../Redux/Actions/coursesActions"
import { useSelector } from "react-redux"

const Courses = () => {

    const courses = useSelector((state)=>state.courses)

    useEffect(()=>{
        getCourses()
    },[])
  return (
    <div class="row d-flex justify-content-center align-items-center  bg-primary">
    {
        courses.length >0 ? (courses.map(({ id, name, image, description, released, rating, platforms, genres, createdInDb }) => {
          return (
              <Card
                id={id}
                name={name}
                image={image}
                description={description}
                released={released}
                rating={rating}
                platforms={platforms}
                genres={genres}
                createdInDb={createdInDb}
              />
          );
        })): (filterNotFound ?(<img src="https://i.imgur.com/0XC49UU.png" className={style.notLoadedImage}/>):(<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" className={style.notLoadedGif}/>) )
      }
    </div>
  )
}

export default Courses
