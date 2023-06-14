import React from "react";
import { Link } from "react-router-dom";

export default function SingleVan({ van }) {
  return (
    <div className="van-tile">
      <img alt={`${van.name} outside`} src={van.imageUrl}/>
      <div className="van-info">
        <h3><Link to={`/vans/${van.id}`}>{van.name}</Link></h3>
        <p>${van.price}<span>/day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  );
}