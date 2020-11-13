import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
import ButtonToggle from './ButtonToggle'

function ConfirmationFlightDetailsCard() {

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
                    <p style={{color: '#043f7c'}}> <b>Flight Details</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></p>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p><b>Flight Type:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>One Way </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Flight From:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>Murtala Muhammed International Airport, Lagos, Nigeria </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Flight To:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>London Heathrow Airport, England </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Departure Date:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>22/06/2020 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Passenger:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>1 Adult, 0 Children, 0 Infant </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Travel Class:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>Businees </p>
                        </Col>
                    </Row>
                </div>
                {/*  */}
                
            {/* </Card> */}
        </div>
        
    )
}

export default ConfirmationFlightDetailsCard
