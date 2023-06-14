import React from "react";

export default function SingleVan({ van }) {
  return (
    <div className="van-tile">
      <img src={van.imageUrl}/>
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  );
}