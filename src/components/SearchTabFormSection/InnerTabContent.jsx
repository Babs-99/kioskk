import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image,  Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import arikairimg from '../../assets/img/icons/flightbrands/arikair.png'
import danaairimg from '../../assets/img/icons/flightbrands/danaair.png'

class InnerTabContent extends Component {
    render() {
        return (
            <div>
                <Card body>
                    <h6 style={{color: '#50c878', fontSize: '12px'}}>FASTEST</h6>
                    <Row>
                        <Col md='3'>
                            <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='50px' src={airpeaceimg} alt="" roundedCircle />&nbsp;&nbsp;<span style={{fontSize: '14px'}}>Air Peace</span>
                        </Col>
                        <Col md='1' align='center'>
                            <span style={{fontSize: '15px'}}><b>00:30</b></span>
                            <br/>
                            <span style={{fontSize: '12px', textAlign: 'center'}}>LOS</span>
                        </Col>
                        <Col md='1' style={{marginRight: '-45px', marginTop: '8px', color: '#043f7c'}}>
                            <span class="material-icons">flight_takeoff</span>
                        </Col>
                        <Col md='3' align='center' style={{marginTop: '-20px'}}>
                            <span style={{fontSize: '12px'}}>22h 30m</span>
                            <hr style={{color: '#043f7c'}}/>
                            <span style={{fontSize: '12px'}}>1 Stop - DOH</span>
                        </Col>
                        <Col md='1' style={{marginLeft: '-15px', marginTop: '8px', color: '#043f7c'}}>
                            <span class="material-icons">
                            flight_land
                            </span>
                        </Col>
                        <Col md='2' align='center' style={{marginLeft: '-65px'}}>
                            <span><b>11:50</b></span>
                            <br/>
                            <span style={{fontSize: '12px'}}>LDN</span>
                        </Col>
                        <Col classNamexx='float-right' md='2' >NGN 245,940</Col>
                    </Row>
                </Card>
                <br/>
                <Card body>
                    <h6 style={{color: '#50c878', fontSize: '12px'}}>FASTEST</h6>
                    <Row>
                        <Col md='3'>
                            <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='50px' src={arikairimg} alt="" roundedCircle />&nbsp;&nbsp;<span style={{fontSize: '14px'}}>Arik Air</span>
                        </Col>
                        <Col md='1' align='center'>
                            <span style={{fontSize: '15px'}}><b>00:30</b></span>
                            <br/>
                            <span style={{fontSize: '12px', textAlign: 'center'}}>LOS</span>
                        </Col>
                        <Col md='1' style={{marginRight: '-45px', marginTop: '8px', color: '#043f7c'}}>
                            <span class="material-icons">
                            flight_takeoff
                            </span>
                        </Col>
                        <Col md='3' align='center' style={{marginTop: '-20px'}}>
                            <span style={{fontSize: '12px'}}>22h 30m</span>
                            <hr style={{color: '#043f7c'}}/>
                            <span style={{fontSize: '12px'}}>1 Stop - DOH</span>
                        </Col>
                        <Col md='1' style={{marginLeft: '-15px', marginTop: '8px', color: '#043f7c'}}>
                            <span class="material-icons">
                            flight_land
                            </span>
                        </Col>
                        <Col md='2' align='center' style={{marginLeft: '-65px'}}>
                            <span><b>11:50</b></span>
                            <br/>
                            <span style={{fontSize: '12px'}}>LDN</span>
                        </Col>
                        <Col className='float-right' md='2' >NGN 245,940</Col>
                    </Row>
                </Card>
                <br/>
                <Card body>
                    <h6 style={{color: '#50c878', fontSize: '12px'}}>FASTEST</h6>
                    <Row>
                        <Col md='3'>
                            <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='50px' src={danaairimg} alt="" roundedCircle />&nbsp;&nbsp;<span style={{fontSize: '14px'}}>Dana Air</span>
                        </Col>
                        <Col md='1' align='center'>
                            <span style={{fontSize: '15px'}}><b>00:30</b></span>
                            <br/>
                            <span style={{fontSize: '12px', textAlign: 'center'}}>LOS</span>
                        </Col>
                        <Col md='1' style={{marginRight: '-45px', marginTop: '8px', color: '#043f7c'}}>
                            <span class="material-icons">
                            flight_takeoff
                            </span>
                        </Col>
                        <Col md='3' align='center' style={{marginTop: '-20px'}}>
                            <span style={{fontSize: '12px'}}>22h 30m</span>
                            <hr style={{color: '#043f7c'}}/>
                            <span style={{fontSize: '12px'}}>1 Stop - DOH</span>
                        </Col>
                        <Col md='1' style={{marginLeft: '-15px', marginTop: '8px', color: '#043f7c'}}>
                            <span class="material-icons">
                            flight_land
                            </span>
                        </Col>
                        <Col md='2' align='center' style={{marginLeft: '-65px'}}>
                            <span><b>11:50</b></span>
                            <br/>
                            <span style={{fontSize: '12px'}}>LDN</span>
                        </Col>
                        <Col className='float-right' md='2' >NGN 245,940</Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default InnerTabContent;
