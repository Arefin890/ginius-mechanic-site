import React from "react";

import mc1 from "../../../images/mechanics/mechanic-1.jpg";
import mc2 from "../../../images/mechanics/mechanic-2.jpg";
import mc3 from "../../../images/mechanics/mechanic-3.jpg";
import mc4 from "../../../images/mechanics/mechanic-4.jpg";
import Expert from "../Expert/Expert";

const mechanics = [
  { name: "Watson Andress", img: mc1, expertize: "Alrounder Expert" },
  { name: "Thomas", img: mc2, expertize: "Alrounder Expert" },
  { name: "Wison", img: mc3, expertize: "Alrounder Expert" },
  { name: "Anderio", img: mc4, expertize: "Alrounder Expert" },
  // { name: "Guteres",img: mc1, expertize: "Alrounder Expert" },
  // { name: "Hamilton", img: mc1,expertize: "Alrounder Expert" },
];

const Experts = () => {
  return (
    <div className='container mt-5'>
      <h1>Our Experts</h1>
      <div className='row'>
        {mechanics.map((mechanic) => (
          <Expert key={mechanic.name} mechanic={mechanic}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
