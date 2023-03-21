import React from "react";
import { useNavigate } from "react-router-dom";

import data from "../../data";

const Card = () => {
  // console.log(data);
  const navigate = useNavigate();

  return (
    
      <div class="row">
        {data.map((item) => {
          const { name, text, img } = item;
          return (
            
              <div class="col-sm-12 col-md-6 col-lg-4 text-center">
                <div onClick={() => navigate(`/${name}`)}>
                  <img src={img} alt="" width="250px"/>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
              </div>
            
          );
        })}
      </div>
    
  );
};

export default Card;
