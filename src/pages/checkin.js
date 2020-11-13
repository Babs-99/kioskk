import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import {Modal, Button} from "react-bootstrap";
import InputGroupText from "../components/InputGroup/InputGroupText/InputGroupText";

import HeaderNavigator from "../components/HeaderNavigator";

const Checkin = () => {
  const [isBrowser, setBrowser] = useState(false);

  const fullScreen = (url) => {
    window.open(url, "_blank", fullScreen);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <div className="booking-vid">
            <video
              loop={true}
              autoPlay={true}
              alt="background-video"
              className="booking-video"
            >
              <source
                src="https://res.cloudinary.com/dn6yxmgoy/video/upload/v1604493606/board_tp8wuf.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="logo2">
            <img src="./asset/img/logo.png" alt="econnect logo" />
          </div>

         <div className="check-text">
             <p>Select Guest(s) you would like to Check-In  </p>
         </div>
                   

  

        </main>
      </Layout>
    </React.Fragment>
  );
};

export default Checkin;
