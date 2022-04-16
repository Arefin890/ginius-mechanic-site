import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div className='service mt-5'>
      <img src={img} alt='' />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Service;
