import React from "react";
import { headerStore } from "../stores";
import { useState } from "react";

export default function Inicio() {
  const changeTitle = headerStore((state) => state.vocation);

  const [size, setSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });

  const thisStyles =
    size > 900
      ? { width: "50%", height: "300px" }
      : size >= 750
      ? { width: "66%", height: "200px" }
      : size > 400
      ? { width: "66%", height: "100px" }
      : { display: "none" };

  return (
    <div onLoad={changeTitle} className="container mt-5 shadow-lg rounded-3 ">
      {" "}
      <h1 className="center-text mb-5">Objetivo del proyecto</h1>
      <p className="ps-5 mb-5 text-start">
        Este proyecto busca recopilar testimonios de científicos, de hoy en día
        y de todo el mundo, acerca de qué los motivó a estudiar, desarrollarse
        profesionalmente y continuar en el área científica de su preferencia,
        para así, con el tiempo, identificar variables que puedan ser usadas
        para la elaboración de políticas públicas que favorezcan la vocación
        científica, o en su defecto, una mayor alfabetización científica.
      </p>
      <div className="container justify-content-center pb-5 rounded-3">
        <iframe
          style={thisStyles}
          src="https://www.youtube.com/embed/Haj59FavvAs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
