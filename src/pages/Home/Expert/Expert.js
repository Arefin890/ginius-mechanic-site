import React from "react";
import "./Expert.css";

const Expert = ({ mechanic }) => {
  const { name, img, expertize } = mechanic;
  console.log(name);
  return (
    <div className='expert col-lg-3 col-sm-6 col-12'>
      <img src={img} alt='' />
      <h3>{name}</h3>
      <h4 className='text-danger'>{expertize}</h4>
    </div>
  );
};

export default Expert;
