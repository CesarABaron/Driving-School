import React from 'react'

const CourseCard = (props) => {
  const {courseName, image, description, originalPrice, fridayPrice, includes, requirements, payment, theoricSchedule, practiceSchedule} = props
  return (
    <div className="card mx-2 my-5 " style={{ width: "18em" }}>
    <img
      src={image}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title ">{courseName}</h5>
      <p className="card-text">
       {description}
      </p>
      <a href="#" className="btn btn-primary">
        Ver más
      </a>
    </div>
  </div>
  )
}
export default CourseCard
