
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import InputGroupText from "../components/InputGroup/InputGroupText/InputGroupText";
import MyModal from "../components/ModalComponent/index";
import Loader from "../components/LoaderComponent/index";
import CardComponent from "../components/CardComponent/index"
import HeaderNavigator from "../components/HeaderNavigator";
import loader from "../components/LoaderComponent/index";
import { Nav, Navbar } from 'react-bootstrap'


const Booking = () => {

  function showLoader() {
    document.getElementById("loader").style.display = "flex";
    setTimeout(hide, 5000);  // 5 seconds
  }

  function hide() {
    document.getElementById("loader").style.display = "none";
  }

  const [isBrowser, setBrowser] = useState(false);

  // const fullScreen = (url) => {
  //   window.open(url, "_blank", fullScreen);
  // };

  // const [show, ] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = useState(false);
  const [loaderShow, setLoaderShow] = useState(false);

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
        {/* <header>
          <HeaderNavigator title="" />
        </header> */}
        {/* )} */}
        <main id="main">
          <Navbar>
            <Navbar.Brand href="#home">
              <img src="./asset/img/logo.png" alt="econnect logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Book Trip</Nav.Link>
                <Nav.Link onClick={() => setModalShow(true)} href="#link">Check In</Nav.Link>
                <Nav.Link onClick={() => showLoader()} href="#boardpass">Print Boarding Pass</Nav.Link>
                <Nav.Link href="#explore">Explore</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary">Guest User</Button>
                <Nav.Link href="#deets">Sign In / Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

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

          {/* <div className="logo2">
            <img src="./asset/img/logo.png" alt="econnect logo" />
          </div> */}

          <div className="tabs left">
            <img src="./asset/img/booking.svg" alt="" />
            <p className="tabTitle"> Enter Booking Details</p>
          </div>

          <div className="tabs right" onClick={() => setModalShow(true)}>
            <img src="./asset/img/qricon.svg" alt="" />
            <p className="tabspan">Scan QR Code </p>
          </div>


          <div className="tabContent">
            <form>
            <div className="grid-container row d-flex justify-content-between px-5">
              {/* <div className="row d-flex justify-content-between"> */}
                <div className="grid-item col-5">
                  
                {/* <div className="col"> */}
                <div className="input-icons">
                  <i className="fa pl-3">
                    {/* <span> */}
                    <img src="./asset/img/contact.svg" alt="" />
                    {/* </span> */}
                  </i>
                  <input className="input-field" type="text" placeholder="First Name" />

                </div>
              </div>

              <div className="grid-item col-5">
                {/* <div className="col"> */}
                <div className="input-icons">
                  <i className="fa pl-3">
                    {/* <span> */}
                    <img src="./asset/img/booking.png" alt="" />
                    {/* </span> */}
                  </i>
                  <input className="input-field" type="text" placeholder="Booking reference" />

                </div>
              </div>

              <div className="grid-item col-2">
                {/* <div className="col"> */}
                <button className="boarding-but">
                  <a href="checkin">
                    Search
                          </a>
                </button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Create New account</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Username</p>
                    <input className="input-field2" type="text" placeholder="Username" />
                    <p>Email Address</p>
                    <input className="input-field2" type="text" placeholder="Email Address" />
                    <p>Password</p>
                    <input className="input-field2" type="text" placeholder="Password" />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
          </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
              </form>

            <MyModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>

          <CardComponent
            id="hotels"
            img="./asset/img/hotel.svg"
            desc="Hotels"
            left="100"
            svgTop="33">
          </CardComponent>

          <CardComponent
            id="rentals"
            img="./asset/img/car.svg"
            desc="Car Rentals"
            left="320"
            svgTop="41">
          </CardComponent>

          <CardComponent
            id="holiday"
            img="./asset/img/holiday.svg"
            desc="Book An Holiday"
            left="530"
            svgTop="36">
          </CardComponent>

          <CardComponent
            id="tours"
            img="./asset/img/tours.svg"
            desc="Tours & Activities"
            left="740"
            svgTop="36">
          </CardComponent>

          <CardComponent
            id="driver"
            img="./asset/img/drive.svg"
            desc="Chauffeur Drive"
            left="950"
            svgTop="36">
          </CardComponent>

          <CardComponent
            id="meet"
            img="./asset/img/meet.svg"
            desc="Meet & Greet"
            left="1160"
            svgTop="36">
          </CardComponent>
          {/* 
          <div className="form-div" >

            <Tabs activeKey="home" defaultActiveKey="home" transition={false}>

              <Tab eventKey="home" title={<span className="tabTitle"> <img src="./asset/img/booking.svg" alt="" /> Enter Booking Details</span>} >

                <form className="form-booking">
                  <div className="grid-container">
                    <div className="grid-item">
                      <div className="input-icons">
                        <i className="fa pt-3 pl-3">
                          <span> <img src="./asset/img/contact.svg" alt="" /> </span>
                        </i>
                        <input className="input-field" type="text" placeholder="First Name" />

                      </div>
                    </div>
                    <div className="grid-item">
                      <div className="input-icons">
                        <i className="fa pt-3 pl-3">
                          <span> <img src="./asset/img/booking.png" alt="" /> </span>
                        </i>
                        <input className="input-field" type="text" placeholder="Booking reference" />

                      </div>
                    </div>
                    <div className="grid-item">

                      <button className="boarding-but">
                        <a href="checkin">
                          Search
                          </a>
                      </button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Create New account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>Username</p>
                          <input className="input-field2" type="text" placeholder="Username" />
                          <p>Email Address</p>
                          <input className="input-field2" type="text" placeholder="Email Address" />
                          <p>Password</p>
                          <input className="input-field2" type="text" placeholder="Password" />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Save Changes
          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </form>

              </Tab>

              <Tab eventKey="qr" title={<span className="tabspan" onClick={() => setModalShow(true)}> <img src="./asset/img/qricon.svg" alt="" /> Scan QR Code </span>} >
                <MyModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Tab>

            </Tabs>

          </div>

          <div className="carder">
            <div className="grid-container">
              <div className="grid-items">
                <div className="booking-card">
                  <img src="./asset/img/hotel.png" className="img2" />
                  <p>Hotel</p>

                </div>

              </div>

              <div className="grid-items">
                <div className="booking-card">
                  <img src="./asset/img/car.png" className="img2" />
                  <br />


                  <p style={{ paddingTop: "10px" }}>Car Rentals</p>
                </div>

              </div>

              <div className="grid-items">
                <div className="booking-card">
                  <img src="./asset/img/holiday.png" className="img2" />
                  <p>Book an Holiday</p>
                </div>

              </div>


              <div className="grid-items">
                <div className="booking-card">
                  <img src="./asset/img/tours.png" className="img2" />
                  <p>Tours & Activites</p>
                </div>

              </div>

              <div className="grid-items">
                <div className="booking-card">
                  <img src="./asset/img/drive.png" className="img2" />
                  <p>Chaffeur Drive</p>
                </div>

              </div>
              <div className="grid-items">
                <div className="booking-card">
                  <img src="./asset/img/meet.png" className="img2" />
                  <p>Meet & Greet</p>
                </div>

              </div>

            </div>
          </div>
           */}

          <Loader />
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default Booking;
