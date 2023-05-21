import React from "react";

export default function Entrevista({object}) {
  return (
    <div className="card mx-4 my-5 shadow-lg" style={{maxWidth:'350px'}}>
      <iframe className="card-img-top"
        style={{minHeight:'350px'}}
        src={`https://www.youtube.com/embed/${object.interview}` }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="card-body border border-bottom">
        <h1 className="fs-4 card-title">{object.name}</h1>
        <p className="card-text">{object.jobDescription}</p>
        {object.jobTitle ? <p className="card-text">{object.jobTitle}</p> : ''}

      </div>

      <div className="modal-footer py-2">
    {object.email!==''? <a href={`mailto:${object.email}`} className="mx-3"><i class="fa-solid fa-envelope fa-2xl"></i></a>:''}
      {object.linkedin !==''? <a href={object.linkedin} className="mx-3"><i class="fa-brands fa-linkedin fa-2xl"></i></a> : ''}

      </div>
    </div>
  );
}
