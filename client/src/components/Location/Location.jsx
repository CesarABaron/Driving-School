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
          className="col-6 bg-primary p-5 d-flex flex-column justify-content-center  "
          style={{ height: "40em" }}
        >
          <h1>Academia Automovilismo</h1>
          <h1 className="mb-5">El Poblado</h1>
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
        <div className="col-4 bg-black">
          <img
            style={{ height: "45vh" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPf9QUxq_7-T282QDx_8JSVK7gkUhIrs7bNbUoAyIoTg&s"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Location;
