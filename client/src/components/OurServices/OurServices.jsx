import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Courses from "./Courses";
import ErrorBoundary from "../ErrorBoundary"
import { useSelector, useDispatch } from 'react-redux';
import { getCourses } from '../../Redux/Actions/coursesActions';

const OurServices = () => {
 /*  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
      alert("ENTRA AL USEEFFECT")
      dispatch(getCourses());
  }, [courses]); */
  return (
    <div
      id="our-services"
      className="d-flex justify-content-center flex-column"
    >
      <h3 className="shadow p-3 mb-5 d-flex justify-content-center m-4 ">
        Nuestros servicios
      </h3>
      <ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" style={{ /* height: "500px" */ }} id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          {/* CURSOS */}
          <ErrorBoundary>
            <Courses/>
          </ErrorBoundary>
        </div>
        <div class="tab-pane fade" style={{ height: "500px" }} id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
          {/* TRAMITES */}
        </div>
      </div>
      <br />
{/*       <h4 class="d-flex justify-content-center">
        ¿Trabajas o estudias? ¡No te preocupes! Tenemos HORARIOS FLEXIBLES 6:00
        am a 10:00 pm
      </h4> */}
    </div>
  );
};

export default OurServices;

/* <div class="row d-flex justify-content-center align-items-center  bg-primary">
        <div className="card mx-2 my-5 " style={{ width: "18em" }}>
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
        </div>

        <div className="card mx-3 my-5 " style={{ width: "18em" }}>
          <img
            src="https://cdn.discordapp.com/attachments/1180957030673035304/1180964039564742696/ivanfernandezballestrasse_a_man_in_garen_from_league_of_legends_f4a5823f-0d0e-48b2-afa9-0ecc3e1006a7_ins.jpg?ex=657f5578&is=656ce078&hm=093eac4cf1a755897c44dac0c3a50bc44955db711c0ab4d4bbb32a75b83acdc3&"
            className="card-img-top img-fluid w-100"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Curso B1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>

        <div className="card mx-3   " style={{ width: "18em" }}>
          <img
            src="https://cdn.discordapp.com/attachments/1180957030673035304/1180964039564742696/ivanfernandezballestrasse_a_man_in_garen_from_league_of_legends_f4a5823f-0d0e-48b2-afa9-0ecc3e1006a7_ins.jpg?ex=657f5578&is=656ce078&hm=093eac4cf1a755897c44dac0c3a50bc44955db711c0ab4d4bbb32a75b83acdc3&"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Tramites y licencias</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
      </div> */
