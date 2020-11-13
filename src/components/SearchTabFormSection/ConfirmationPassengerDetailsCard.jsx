import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
import ButtonToggle from './ButtonToggle'

function ConfirmationPassengerDetailsCard() {

    // const [validated, setValidated] = useState(false);
    
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    // setValidated(true);
    // };
   
    return (
        <div>
            {/* <Card style={{backgroundColor: 'transparent', border: 'none'}}> */}
                <div style={{ backgroundColor: 'transparent', padding: '20px'}}>
                    <p style={{color: '#043f7c'}}> <b>Passenger Details (Main)</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></p>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p><b>Title:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>Mr </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Name:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>Ayodeji Moshood </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Dirth of Birth:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>21/06/1998 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Phone Number:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>07060460216 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Address:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>Lekki, Lagos </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>City:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>Lagos </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Postal Code:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>328101 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Country of Residence:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>Nigeria </p>
                        </Col>
                    </Row>
                </div>
                {/*  */}
                
            {/* </Card> */}
        </div>
        
    )
}

export default ConfirmationPassengerDetailsCard
