import React from "react";
import dino from '../assets/favicon.svg'
import {Link,NavLink} from 'react-dom'


export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark" style={{zIndex:'0'}}>
      <div className="container-fluid">
        <a className="navbar-brand" to="#">
        Vocación Científica <img className="ms-2 bigHover" src={dino} alt="dinosaurio" style={{maxHeight:'50px'}}/> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
          style={{maxWidth:'250px'}}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              NavBar
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item text-start">
                <a className="nav-link active  bigHover" aria-current="page" to="#">
                <i className="fa-solid fa-jedi fa-lg"></i>    Inicio
                </a>
              </li>
              <li className="nav-item text-start  ">
                <a className="nav-link active bigHover" to="#">
                <i className="fa-solid fa-rocket fa-lg"></i>   ¿Cómo participar?{" "}
                </a>
              </li>
              <li className="nav-item  text-start">
                <a className="nav-link active bigHover" to="#">
                <i className="fa-solid fa-atom fa-lg"></i>   Entrevistas{" "}
                </a>
              </li>
              <li className="nav-item text-start ">
                <a className="nav-link active bigHover" aria-current="page" to="#">
                <i className="fa-solid fa-microscope fa-lg"></i>    Entrevistados  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}