import React, { useState } from 'react';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useLocation } from 'react-router-dom';

const NavBar = () => {

  const location = useLocation().pathname
  console.log(location);
  console.log(location==="/");

  const handleLinkClick= () =>{
    setTimeout(()=>{
      scroll.scrollTo("our-services", {
        smooth: true,
        spy:true,
        offset: -70,
        duration: 500
      });
    },1111)
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link
        className="navbar-brand" to="/">
          Poblado
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              { 
              location==="/" ?
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
                            </ScrollLink>:
                            <Link
                            test="TEEEEEST"
                            to="/"
                            style={{cursor:"pointer"}}
                            className="nav-link active cursor-pointer"
                            aria-current="page"
                            /* data-bs-toggle="collapse" */
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={()=>handleLinkClick()}
                            >
                              Servicios
                            </Link>
              }
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
                  <Link
                  className="dropdown-item" to="about-us"
                  >
                    Sobre nosotros
                  </Link>
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
                <Link
                to="/faq"
                className="dropdown-item" 
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                  Preguntas frecuentes
                </Link>
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