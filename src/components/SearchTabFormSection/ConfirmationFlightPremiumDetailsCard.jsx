import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
import ButtonToggle from './ButtonToggle'

function ConfirmationFlightPremiumDetailsCard() {

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
                    <p style={{color: '#043f7c'}}> <b>Flight Premium)</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></p>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p><b>Sub Total:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>&#8358;199,145 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Service Charge:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p>&#8358;18,993 </p>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col md={6}>
                            <h4 style={{color: 'red'}}> <b>Total Amount:</b> </h4>
                        </Col>
                        <Col md={6}>
                            <h4 style={{color: 'red'}}>&#8358;218,138 </h4>
                        </Col>
                    </Row>
                </div>
                {/*  */}
                
            {/* </Card> */}
        </div>
        
    )
}

export default ConfirmationFlightPremiumDetailsCard
