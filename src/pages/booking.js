import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import {Modal, Button} from "react-bootstrap";
import InputGroupText from "../components/InputGroup/InputGroupText/InputGroupText";

import HeaderNavigator from "../components/HeaderNavigator";

const Booking = () => {
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
                src="https://res.cloudinary.com/dn6yxmgoy/video/upload/v1604673137/production_ID_4684133_m0zbvf.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="logo2">
            <img src="./asset/img/logo.png" alt="econnect logo" />
          </div>

          <div className="form-div">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
           
              <Tab eventKey="home" title="Enter Booking Details" >
                  
                <form className="form-booking">
                  <div class="grid-container">
                    <div class="grid-item">
                    <div class="input-icons"> 
                        <i class="fa fa-user-circle" style={{paddingTop:"23px", fontSize: "22px", paddingLeft: "13px"}}></i> 
                        <input class="input-field" type="text" placeholder="Last Name" /> 
     
                      </div>
                    </div>
                    <div class="grid-item">
                    <div class="input-icons"> 
                        <i class="fa fa-plane" style={{paddingTop:"25px", fontSize: "18px", paddingLeft: "13px"}}></i> 
                        <input class="input-field2" type="text" placeholder="Booking reference"/> 
     
                      </div>
                    </div>

                    <div class="grid-item">
     
                      <button className="boarding-but">
                          <a href="checkin">
                          Search
                          </a>
                          </button>

                      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Username</p>
        <input class="input-field2" type="text" placeholder="Username"/> 
         <p>Email Address</p>
        <input class="input-field2" type="text" placeholder="Email Address"/> 
          <p>Password</p>
        <input class="input-field2" type="text" placeholder="Password"/> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
                    </div>
                  </div>
                  {/*
                   */}
                </form>
                
              </Tab>
              

              <Tab eventKey="qr" title="Scan QR Code">
              <form className="form-booking">
                  <div class="grid-container">
                  <div class="grid-item">
                    <div class="input-icons"> 
                        <i class="fa fa-user-circle" style={{paddingTop:"23px", fontSize: "22px", paddingLeft: "13px"}}></i> 
                        <input class="input-field" type="text" placeholder="Last Name" /> 
     
                      </div>
                    </div>
                    <div class="grid-item">
                    <div class="input-icons"> 
                        <i class="fa fa-plane" style={{paddingTop:"25px", fontSize: "18px", paddingLeft: "13px"}}></i> 
                        <input class="input-field2" type="text" placeholder="Booking reference"/> 
     
                      </div>
                    </div>

                    <div class="grid-item">
                      <button className="boarding-but">Search</button>
                    </div>
                  </div>
                  {/*
                   */}
                </form>
              </Tab>
            </Tabs>
          </div>
                   
<div className="carder">
<div class="grid-container">
<div class="grid-items">
       <div className="booking-card">
       <img src="./asset/img/hotel.png" className="img2" />
       <p>Hotel</p>
       
       </div>

       </div>

       <div class="grid-items">
       <div className="booking-card">
       <img src="./asset/img/car.png" className="img2" />
       <br/>
       
    
       <p style={{paddingTop:"10px"}}>Car Rentals</p>
       </div>

       </div>

       <div class="grid-items">
       <div className="booking-card">
       <img src="./asset/img/holiday.png" className="img2" />
       <p>Book an Holiday</p>
       </div>

       </div>


       <div class="grid-items">
       <div className="booking-card">
       <img src="./asset/img/tours.png" className="img2" />
       <p>Tours & Activites</p>
       </div>

       </div>

       <div class="grid-items">
       <div className="booking-card">
       <img src="./asset/img/drive.png" className="img2" />
       <p>Chaffeur Drive</p>
       </div>

       </div>
       <div class="grid-items">
       <div className="booking-card">
       <img src="./asset/img/meet.png" className="img2" />
       <p>Meet & Greet</p>
       </div>

       </div>

       </div>

 </div>
  

        </main>
      </Layout>
    </React.Fragment>
  );
};

export default Booking;
