import React from "react";
import { useState, useEffect } from "react";
import headerBg from "../assets/background.jpeg";
import { headerStore } from "../stores";

export default function Header() {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", function () {
    setSize(window.innerWidth);
  });

  const bannerHeight = size < 600 ? "20rem" : "30rem";

  const headerActual = headerStore((state) => state.headerTitle);

  return (
    <div
      className=" my-0 py-0 justify-content-center align-content-center myShow"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        height: bannerHeight,
      }}
    >
      <div
        className="container-fluid "
        style={{
          backgroundColor: "black",
          height: bannerHeight,
          opacity: "0.5",
        }}
      ></div>
      <strong>
        <h1
          className=" my-0 py-0 text-light fs-1"
          style={{
            scale: "1.2",
            backgroundColor: "transparent",
            translate: "0% -600%",
            scale: "2",
          }}
          id="HeaderTitle"
        >
          {headerActual}
        </h1>
      </strong>
    </div>
  );
}
