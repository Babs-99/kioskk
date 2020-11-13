import React from "react";

const CardComponent = ({ img, desc, click }) => {
  return (
    <React.Fragment>
      <div onClick={click} className="service-card">
        <img src={img} alt={`${desc} service`} />
        <p>{desc}</p>
      </div>
    </React.Fragment>
  );
};

export default CardComponent;
