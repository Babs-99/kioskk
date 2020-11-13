

import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
// import bagimg from '../../assets/img/icons/bag.png'
// import Switch from 'react-switch'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'

class TicketCard2 extends Component {
    
    render() {
        return (
            <div>
                <Card>
                    <div style={{ backgroundColor: '#ffffff', padding: '20px', border: 'none', borderRadius: '50px'}}>
                        {/* <p style={{color: '#043f7c'}}> <b>Selected Outbound</b> </p>
                        <hr style={{color: '#043f7c'}}/> */}
                        <Card body style={{marginLeft: '-20px', marginRight: '-20px', borderRadius: 'initial', border: 'none'}} >
                            <Row >
                                <Col md='12'>
                                    {/* <h6 style={{color: '#043f7c'}}>Ticket (1 Adult)</h6>
                                    <br/> */}
                                    <Row>
                                        <Col md='8'>
                                            <span style={{fontSizexx: '13.4px'}}>Ticket (1 Adult)</span>
                                        </Col>
                                        <Col md='4'>
                                            <span style={{fontSizexx: '13.4px'}}>&#8358; 199,145</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='8'>
                                            <span style={{fontSizexx: '13.4px'}}>Service Fee</span>
                                        </Col>
                                        <Col md='4'>
                                            <span style={{fontSizexx: '13.4px'}}>&#8358; 18,993</span>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col md='8'>
                                            <h5 style={{color: '#043f7c'}}> <b>Total (taxes included)</b> </h5>
                                        </Col>
                                        <Col md='4'>
                                            <h5 style={{color: '#043f7c'}}> <b>&#8358; 199,145</b> </h5>
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

export default TicketCard2;
