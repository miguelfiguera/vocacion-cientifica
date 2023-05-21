import React from "react";

export default function entrevista({object}) {
  return (
    <div className="container">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${object.something}` }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
