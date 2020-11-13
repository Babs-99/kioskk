import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card, Nav, NavItem, Form, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import footerimg from '../../assets/img/footerimg.png'
import econnectwhite from '../../assets/img/econnect-white.png'
import googleplaystore from '../../assets/img/googleplaystore.png'
import appstore from '../../assets/img/appstore.png'
import blogdateimg from '../../assets/img/blogdate.png'

class FooterSection extends Component {
    render() {
        return (
            <div>
                
                <Container className='' style={{ maxWidth: '100%', backgroundColor: '#043f7c'}}>
                    <Col lg={12}>
                        <Row>
                            <Col md={2} style={{marginTop: '50px'}}>
                                <Nav defaultActiveKeyxx="#" className="flex-column">
                                    <h5 style={{color: 'white'}}> <b>Information</b></h5> 
                                    {/* <h4 style={{color: 'white'}}><b></b> </h4> */}
                                    <Nav.Link style={{padding: '.5rem 1rem'}} href="#">About Us</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Privacy Policy</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Delivery Information</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Terms and Conditions</Nav.Link>
                                </Nav>
                            </Col> 
                            <Col md={2} style={{marginTop: '50px'}}>
                                <Nav defaultActiveKeyxx="#" className="flex-column">
                                    <h5 style={{color: 'white'}}> <b>My Account</b></h5>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} href="#">About Us</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Privacy Policy</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Delivery Information</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Terms and Conditions</Nav.Link>
                                </Nav>
                            </Col> 
                            <Col md={2} style={{marginTop: '50px'}}>
                                <Nav defaultActiveKeyxx="#" className="flex-column">
                                    <h5 style={{color: 'white'}}> <b>More Info</b></h5>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} href="#">About Us</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Privacy Policy</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Delivery Information</Nav.Link>
                                    <Nav.Link style={{padding: '.5rem 1rem'}} eventKey="#">Terms and Conditions</Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={3} style={{marginTop: '50px'}}>
                                <Nav defaultActiveKeyxx="#" className="flex-column">
                                    <h5 style={{color: 'white'}}> <b>News Letter</b> </h5>
                                    <p style={{color: 'white'}}>Don't miss any updates or promotions by signing up to our newsletter</p>
                                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>Newsletter</Form.Label>
                                    <InputGroup className="mb-2">
                                        <FormControl id="inlineFormInputGroup" placeholder="Your Email" />
                                        <InputGroup.Prepend>
                                            <Button style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}} variant="danger">
                                                <i className="fa fa-location-arrow"></i>
                                            </Button>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </Nav>
                            </Col>
                            <Col md={3} style={{marginTop: '50px'}}>
                                <Nav defaultActiveKeyxx="#" className="flex-column">
                                    <h5 style={{color: 'white'}}> <h5><b>Blog</b></h5> </h5>
                                    <Image src={footerimg} fluid />
                                    <br/>
                                    <Row>
                                        <Col md='9'>
                                        <p style={{color: 'white'}}> <b>Best Shopping Store To Buy Everything You Need</b> </p>
                                        </Col>
                                        <Col md='2' className='ml-4'>
                                            <Image className='ml-auto' src={blogdateimg} />
                                        </Col>
                                    </Row>
                                    <p style={{color: 'white'}}>The trend of online shopping is increasing regularly.</p>
                                    {/* <p style={{color: 'white'}}>The trend of online shopping is increasing regularly. All individuals love to shop for things online instead of visiting the market...</p> */}
                                    <Button className='ml-auto' style={{clear: 'both', borderRadius: '20px', fontSize: '12px', width: '120px' }} variant="light">Read More <i className="fa fa-arrow-right"></i></Button>
                                </Nav>
                            </Col>
                        </Row>
                        <br/>
                    </Col>
                    <hr style={{backgroundColor: 'white'}}/>
                    <Col lg={12}>
                        <Row>
                            <Col md={8} className='p-3'>
                                <h6 style={{color: 'white', fontSize: '14px'}}> Copyright © 2020, eConnect NetPower Limited. All Rights Reserved </h6>
                            </Col> 
                            
                            <Col md={4}>
                                <Row>
                                    <Col sm={4} className='mb-4'>
                                        <Image src={econnectwhite} />
                                    </Col>
                                    <Col sm={4} className='mb-4'>
                                        <Image src={googleplaystore} />
                                    </Col>
                                    <Col sm={4} className='mb-4'>
                                        <Image src={appstore} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    {/* <br/> */}
                </Container>
            </div>
        );
    }
}

export default FooterSection;