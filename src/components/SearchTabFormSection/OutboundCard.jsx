

import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
// import bagimg from '../../assets/img/icons/bag.png'
// import Switch from 'react-switch'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'

class OutboundCard extends Component {
    
    render() {
        return (
            <div>
                <Card>
                    <div style={{ backgroundColor: '#ffffff', padding: '20px', border: 'none', borderRadius: '50px'}}>
                        <p style={{color: '#043f7c'}}> <b>Selected Outbound</b> </p>
                        <hr style={{color: '#043f7c'}}/>
                        <Card body style={{marginLeft: '-20px', marginRight: '-20px', borderRadius: 'initial', border: 'none'}} >
                            <Row >
                                <Col md='12'>
                                    <h6 style={{color: '#043f7c'}}>Fri, 24 Jan 12:00 - 04:40</h6>
                                    <br/>
                                    <Row>
                                        <Col md='5'>
                                            <span style={{fontSize: '13.4px'}}>Murtala Muhammed International Airport (MMA)</span>
                                        </Col>
                                        <Col md='2'>
                                            <span style={{fontSize: '13.4px'}}>-</span>
                                        </Col>
                                        <Col md='5'>
                                        <span style={{fontSize: '13.4px'}}>London Heathrow Airport (LHR)</span>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Row>
                                        <Col md='8'>
                                            <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='50px' src={airpeaceimg} alt="" roundedCircle />&nbsp;&nbsp;Air Peace
                                        </Col>
                                        <Col md='4' style={{marginTop: '11px'}}>
                                            <span style={{fontSize: '14px'}}>7h10 • 2 changes</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Card>
            </div>
        );
    }
}

export default OutboundCard;
