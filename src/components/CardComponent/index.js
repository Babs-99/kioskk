import React from "react";

const CardComponent = ({ img, desc, click, id, left, svgTop }) => {
  return (
    <React.Fragment>
      <div onClick={click} style={{ left: `${left}px` }} className="service-card" id={id}>
        <img src={img} style={{top: `${svgTop}px`}} alt={`${desc} service`} />
        <p>{desc}</p>
      </div>
    </React.Fragment>
  );
};

export default CardComponent;
