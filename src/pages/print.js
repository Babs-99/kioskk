import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import HeaderNavigator from "../components/HeaderNavigator";

const Print = () => {
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
                  src="https://res.cloudinary.com/dn6yxmgoy/video/upload/v1604493606/board_tp8wuf.mp4"
                  type="video/mp4"
                />
              </video>
            
            </div>
            <div className="logo">
              <img src="./asset/img/logo.png" alt="econnect logo" />
            </div>
 
            <div className="bottom-wrapper">
              <p>
              We need to retrieve your Booking Details. Please Select Any Option Below              </p>
              <div className="bottom-button">
                <button
                  className="btn-action-1"
                  onClick={() =>
                    fullScreen("https://localhost:3001/onthego?kiosk=true")
                  }
                >
                  <a href="https://localhost:3001/onthego?kiosk=true">
                  Scan QR Code {" "}
                   <span className="fa fa-qrcode"></span>
                  </a>
                </button>

                <button
                  className="btn-action-2"
                  onClick={() =>
                    fullScreen("http://woozeee.herokuapp.com/onthego?kiosk=true")
                  }
                >
                  <a href="http://woozeee.herokuapp.com/?kiosk=true">
                    {" "}
                    Enter Booking Details{" "}
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
  
  export default Print;
  