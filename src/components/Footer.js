import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid row align-items-start mt-5 mb-4">
      <a href="mailto:vocacion.cientifica@gmail.com" className="col">
      <i class="fa-solid fa-envelope fa-2xl"></i>        {" "}
      </a>
      <a href="https://twitter.com/Sci_Vocation" className="col">
      <i class="fa-brands fa-square-twitter fa-2xl"></i>
      </a>
      <a href="https://www.youtube.com/@proyecto.vocacion.cientifica" className="col">
        <i className='fa-brands fa-youtube fa-2xl'></i>

      </a>
    </div>
  );
}
