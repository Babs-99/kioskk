import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import HeaderNavigator from "../components/HeaderNavigator";
// import history from "../history";

const Home = () => {
  const [isBrowser, setBrowser] = useState(false);

  const fullScreen = (url) => {
    window.open(url, "_blank", fullScreen);
  };

  useEffect(() => {
    if (window.navigator.userAgent) {
      setBrowser(false);
    }

    if (
      typeof window !== "undefined" &&
      typeof window.process === "object" &&
      window.process.type === "renderer"
    ) {
      setBrowser(true);
    }
  }, []);
  return (
    <React.Fragment>
      <Layout page={"Welocme Page"}>
        {/* {isBrowser && ( */}
          <header>
            <HeaderNavigator title="" />
          </header>
        {/* )} */}
        <main id="main">
          <div>
            <video loop={true} autoPlay={true} alt="background-video">
              <source
                src="https://res.cloudinary.com/ibk-code/video/upload/v1597919613/plane_1_srkqyb.mp4"
                type="video/mp4"
              />
            </video>
            <div className="gradient"></div>
          </div>
          <div className="logo">
            <img src="./asset/img/logo.png" alt="econnect logo" />
          </div>
          <div className="welcome-heading">
            <h1>
              <span>Welcome to the</span>
              <span>future</span>
            </h1>
          </div>
          <div className="bottom-wrapper">
            <p>
              ...explore and do so much more on our self servicve platform here
            </p>
            <div className="bottom-button">
              <button
                className="btn-action-1"
                // onClick={() =>
                //   fullScreen("https://localhost:3001/onthego?kiosk=true")
                // }
              >
                <a href="https://localhost:3001/onthego?kiosk=true">
                Buy Ticket
                 <span className="fas fa-ticket-alt"></span>
                </a>
              </button>

              <button className="btn-action-1" >
              <a href="booking">
                Print Boarding Pass <span className="fas fa-print"></span>
                </a>
              </button>
        
              <button className="btn-action-1 btn-action-3">
                <a href="https://www.ubagroup.com/">
                  <span>UBA</span>
                  <img src="./asset/img/uba2.png" />
                </a>
              </button>
              <button
                className="btn-action-2"
                // onClick={() =>
                //   fullScreen("http://woozeee.herokuapp.com/onthego?kiosk=true")
                // }
              >
                <a href="http://woozeee.herokuapp.com/?kiosk=true">
                  {" "}
                  Explore{" "}
                  <span className="far fa-arrow-alt-circle-right"></span>
                </a>
              </button>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
