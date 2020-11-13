import React from "react";
import { Link } from "react-router-dom";
import history from "../../history";

const HeaderNavigator = ({ title }) => {
  const back = () => {
    window.history.back();
  };

  const forward = () => {
    window.history.forward();
  };
  return (
    <React.Fragment>
      <div className="header-pointer">
        <div className="header-pointer__navigator">
          <a
            href="#"
            aria-label="back button"
            className="navigator-icon"
            onClick={back}
          >
            <span className="fas fa-arrow-left"></span>
          </a>
          <a
            href="https://woozeee.herokuapp.com/onthego?kiosk=true"
            aria-label="forward button"
            className="navigator-icon"
            onClick={forward}
          >
            <span className="fas fa-arrow-right"></span>
          </a>
          <Link
            to="home"
            aria-label="Home button"
            className="navigator-home navigator-icon"
          >
            <span className="fas fa-home"></span>
          </Link>
        </div>
        <div className="navigator-page">
          <span>{title}</span>
        </div>
        <div className="navigator-setting">
          <a
            href="#"
            aria-label="Settings button"
            className="navigator-setting"
          >
            <span className="fas fa-cog"></span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderNavigator;
