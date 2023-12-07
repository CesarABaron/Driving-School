import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Courses from "./Courses";
import ErrorBoundary from "../ErrorBoundary"
import { useSelector, useDispatch } from 'react-redux';
import { getCourses } from '../../Redux/Actions/coursesActions';
import Procedures from "./Procedures";

const OurServices = () => {
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
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Cursos</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Trámites</button>
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
          <ErrorBoundary>
            <Procedures/>
          </ErrorBoundary>
        </div>
      </div>
      <br />
      <h4 class="d-flex justify-content-center">
        ¿Trabajas o estudias? ¡No te preocupes! Tenemos HORARIOS FLEXIBLES 6:00
        am a 10:00 pm
      </h4>
    </div>
  );
};

export default OurServices;
