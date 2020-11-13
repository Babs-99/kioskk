import React from 'react';

function LoaderComponent(props) {

  return (

    <React.Fragment>
      <div id="loader" className="loader">
        <div className="balls d-flex justify-content-md-between align-items-center">
          <div className="d-flex green-ball justify-content-start align-items-center"></div>
          <div className="d-flex blue-ball justify-content-end"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoaderComponent