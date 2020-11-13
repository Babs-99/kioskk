import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'

import InnerTabPanel from '../SearchTabFormSection/InnerTabPanel'
import FlightSearchMultiStepper from '../MultiStepper/FlightSearchMultiStepper'
import GoogleMap from './GoogleMap';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//       backgroundColor: 'transparent',
//     },
//     backButton: {
//       marginRight: theme.spacing(1),
//     },
//     instructions: {
//       marginTop: theme.spacing(1),
//       marginBottom: theme.spacing(1),
//     },
//   }));

function FlightSelectTab() {
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

    setValidated(true);
    };

//     const classes = useStyles();
//     const [activeStep, setActiveStep] = React.useState(0);
//     const steps = getSteps();

//     const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// };

//     const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// };

//     const handleReset = () => {
//     setActiveStep(0);
// };
    return (
        // <div>
        //     <Container className='p-4' as={Col} lg={12} style={{maxWidth: '100%' }}>
        <div fluid>
            <Container style={{backgroundColor: '#043f7c', paddingTop: '20px'}} direction='row'  fluid>
                <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} stylex={{marginTop: '14px', height: '55px'}}>
                            <Form.Row stylex={{backgroundColor: '#043f7c', width: '100%', paddingTop: '20px'}}>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    {/* <fromdata /> */}
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="From:" required type='text' defaultValue='Murtala Mohammed Airport' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='London, England' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    <InputGroup >
                                        <FormControl placeholder='Depature Date' />
                                        <FormControl placeholder='+ Add Return' />
                                    </InputGroup>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control required type="text" placeholder="Passengers" defaultValuexx="Mark" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button href='flightsearch2' variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                    {/* <Button variant="contained" color="primary" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button> */}
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            {/* <br/> */}
            <Container fluid>
                <Col lg={12}>
                    <Row>
                        <Col md={8}>
                            <InnerTabPanel />
                        </Col>
                        <Col md={4} className='d-none d-lg-block'>
                            <GoogleMap />
                        </Col>
                    </Row> 
                </Col>
            </Container>
            
        </div>
    )
}

export default FlightSelectTab
