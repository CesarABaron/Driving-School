import React, { useState } from 'react';
import style from './NavBar.module.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () =>{
    setOpenMenu(!openMenu)
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Poblado
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={openMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink
              style={{cursor:"pointer"}}
              className="nav-link active cursor-pointer"
              activeClass="active"
              to="our-services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              //BOOTSTRAP
              aria-current="page"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
              Servicios
              </ScrollLink>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
                Inscripciones
              </a>
            </li>
            <li className="nav-item">
            <ScrollLink
              style={{cursor:"pointer"}}
              className="nav-link active cursor-pointer"
              activeClass="active"
              to="location"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              //BOOTSTRAP
              aria-current="page"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
              Ubicación
              </ScrollLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Mas acciones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Noticias
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a 
                  className="dropdown-item" 
                  href="#"data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button 
            className="btn btn-outline-success" 
            type="submit"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
              Contactenos
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;