import React from "react";

export default function NewsItems({ article }) {
  const { title, destription, urlToImage, url } = article;
  return (
    <div
      className="card py-3 px-3 my-3 mx-3 bg-dark text-light"
      style={{ width: "200px", height: "360px" }}>
      <img
        src={urlToImage}
        className="card-img-top "
        alt=""
        style={{ maxWidth: "345" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {destription ? destription.slice(0, 90) : "Details coming soon..."}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
}
