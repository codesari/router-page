import React from "react";
import { useNavigate } from "react-router-dom";

import data from "../../data";

const Card = () => {
  // console.log(data);
  const navigate = useNavigate();

  return (
    <div className="box">
      {data.map((item) => {
        const { name, text, img } = item;
        return (
          <div onClick={() => navigate(`/${name}`)}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
