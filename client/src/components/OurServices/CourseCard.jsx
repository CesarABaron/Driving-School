import React from 'react'

const CourseCard = (props) => {
  const {courseName, image, originalPrice, fridayPrice, includes, requirements, payment, theoricSchedule, practiceSchedule} = props
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
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Ver más
      </a>
    </div>
  </div>
  )
}
export default CourseCard
{/* <div className="card mx-2 my-5 " style={{ width: "18em" }}>
    <img
      src="https://cdn.discordapp.com/attachments/1180957030673035304/1180964039564742696/ivanfernandezballestrasse_a_man_in_garen_from_league_of_legends_f4a5823f-0d0e-48b2-afa9-0ecc3e1006a7_ins.jpg?ex=657f5578&is=656ce078&hm=093eac4cf1a755897c44dac0c3a50bc44955db711c0ab4d4bbb32a75b83acdc3&"
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title ">Curso A2</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Ver más
      </a>
    </div>
  </div> */}