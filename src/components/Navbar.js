import React from "react";
import dino from "../assets/favicon.svg";
import { Link, NavLink } from "react-router-dom";
import { headerStore } from "../stores";

export default function Navbar() {

  const changeTitleVocation=headerStore((state)=>state.vocation)
  const changeTitleParticipation=headerStore((state)=>state.comoParticipar)
  const changeTitleEntrevistados=headerStore((state)=>state.entrevistados)
  const changeTitleEntrevistas=headerStore((state)=>state.entrevistas)



  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/vocacion-cientifica/">
          Vocación Científica{" "}
          <img
            className="ms-2 bigHover"
            src={dino}
            alt="dinosaurio"
            style={{ maxHeight: "50px" }}
          />
        </Link>
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
          style={{ maxWidth: "250px" }}
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
                <Link
                  className="nav-link active  bigHover"
                  aria-current="page"
                  to="/vocacion-cientifica/"
                  onClick={changeTitleVocation}
                >
                  <i className="fa-solid fa-jedi fa-lg"></i> Inicio
                </Link>
              </li>
              <li className="nav-item text-start  ">
                <Link
                  className="nav-link active bigHover"
                  to="/vocacion-cientifica/comoparticipar"
                  onClick={changeTitleParticipation}
                >
                  <i className="fa-solid fa-rocket fa-lg"></i> ¿Cómo participar?{" "}
                </Link>
              </li>
              <li className="nav-item  text-start">
                <Link
                onClick={changeTitleEntrevistas}
                  className="nav-link active bigHover"
                  to="/vocacion-cientifica/entrevistas"
                >
                  <i className="fa-solid fa-atom fa-lg"></i> Entrevistas{" "}
                </Link>
              </li>
              {/*<li className="nav-item text-start ">
                <Link
                onClick={changeTitleEntrevistados}
                  className="nav-link active bigHover"
                  aria-current="page"
                  to="/vocacion-cientifica/entrevistados"
                >
                  <i className="fa-solid fa-microscope fa-lg"></i> Entrevistados
                </Link>
                 </li>*/}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
