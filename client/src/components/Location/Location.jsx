import React from "react";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="container" id="location">
      <h3 className="shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-center m-4">
        Dónde estamos
      </h3>
      <div className="d-flex justify-content-center mb-5">
        <div
          className="	col-8 col-xxl-7   col-sm-8  bg-primary p-3 p-sm-5  d-flex flex-column justify-content-center  "
          style={{ height: "35em" }}
        >
          <h1>Academia Automovilismo</h1>
          <h1 className="">El Poblado</h1>
          <div className="d-flex mb-3">
            <div className="col-2">ICON</div>
            <div className="col-11">Cl. 9 #43b-46, El Poblado, Medellín</div>
          </div>
          <div className="d-flex mb-3">
            <div className="col-2">ICON</div>
            <div className="col-11">(604) 4904251</div>
          </div>
          <Link
            to={
              "https://www.google.com/maps/place/ACADEMIA+AUTOMOVILISMO/@6.2104357,-75.5722679,18.14z/data=!4m14!1m7!3m6!1s0x8e44282bad42d8bb:0x2d580f551c156d86!2sACADEMIA+AUTOMOVILISMO!8m2!3d6.2102913!4d-75.5716945!16s%2Fg%2F1ptxdrvv_!3m5!1s0x8e44282bad42d8bb:0x2d580f551c156d86!8m2!3d6.2102913!4d-75.5716945!16s%2Fg%2F1ptxdrvv_?entry=ttu"
            }
          >
            <button className="btn btn-primary mt-3">Ir a Google Maps</button>
          </Link>
        </div>
        <div className="col-5 bg-black d-none d-md-block">
          <img style={{ height: "35vh" }}></img>
        </div>
      </div>
    </div>
  );
};

export default Location;
