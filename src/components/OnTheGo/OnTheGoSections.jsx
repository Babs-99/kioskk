import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, CardDeck, View, Stylesheet } from 'react-bootstrap';
import cardimg from '../../assets/img/cardimg/1.jpg'
import cardimg2 from '../../assets/img/cardimg/2.jpg'
import cardimg3 from '../../assets/img/cardimg/3.jpg'
import cardimg4 from '../../assets/img/cardimg/4.jpg'
import cardimg5 from '../../assets/img/cardimg/5.jpg'
import paris from '../../assets/img/cardimg/paris.png'
import city from '../../assets/img/cardimg/city.png'
import clickandshop from '../../assets/img/icons/home/click-shop-w.png'
import clickandplay from '../../assets/img/icons/home/click-play-w.png'
import moneymatters from '../../assets/img/icons/home/money-matters-w.png'
import dispatch from '../../assets/img/icons/home/dispatch-w.png'
import lineimg from '../../assets/img/icons/line.png'
// import slider3 from '../../assets/img/slider/3.jpg'
import LikeButton from '../LikeButton/LikeButton'

class OnTheGoSection extends Component {
    render() {
        return (
            <div>
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                    <Col lg={12}>
                        <Row>
                            <Col md='10' align='left' style={{color: '#043f7c'}}>
                                <span style={{color: '#000000', fontSize: '17px'}}> <Image src={lineimg} alt=""/> &nbsp; <b>DEALS OF THE DAY</b> </span>
                            </Col>
                            <Col md='2' align='right' style={{color: '#043f7c'}}>
                                <Button style={{borderRadius: '100px', fontSize: '12px', marginTop: '-5px'}} size="sm" variant="outline-danger">View More <i class='fa fa-arrow-right'></i> </Button>{' '}
                            </Col>
                        </Row>
                        
                        {/* <p> Deals of The Day</p> */}
                        <hr/>
                        <CardDeck>
                            {/* on the go */}
                            <Card style={{heightxx: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none', positionxx: 'relative'}}>
                                <Card.Img variant="top" src={paris} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}>
                                    <i align='center' style={{fontSize: '15px'}} class="fa fa-plane"/>
                                </span>
                                <Card.Body>
                                    <Card.Title><h6>On The Go</h6></Card.Title>
                                    <br/>
                                    <Row style={{marginTop: '-17px'}}>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_takeoff</span>
                                            <p style={{fontSize: '8px'}}>Lagos</p>
                                        </Col>
                                        <Col md='6' align='center' style={{marginTop: '2px'}}>
                                            <hr style={{color: '#043f7c'}}/>
                                        </Col>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_land</span>
                                            <p style={{fontSize: '8px'}}>Paris</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                      <h6><b>&#8358;125,000.00</b></h6>
                                      <span style={{fontSize: '15px'}} class="material-icons">user</span>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}> <b>Book Now</b> </small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>

                            <Card style={{heightxx: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none', positionxx: 'relative'}}>
                                <Card.Img variant="top" src={city} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}>
                                    <i align='center' style={{fontSize: '15px'}} class="fa fa-plane"/>
                                </span>
                                <Card.Body>
                                    <Card.Title><h6>On The Go</h6></Card.Title>
                                    <br/>
                                    <Row style={{marginTop: '-17px'}}>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_takeoff</span>
                                            <p style={{fontSize: '8px'}}>Abuja</p>
                                        </Col>
                                        <Col md='6' align='center' style={{marginTop: '2px'}}>
                                            <hr style={{color: '#043f7c'}}/>
                                        </Col>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_land</span>
                                            <p style={{fontSize: '8px'}}>London</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        <h6><b>&#8358;291,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}> <b>Book Now</b> </small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>

                            <Card style={{heightxx: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none', positionxx: 'relative'}}>
                                <Card.Img variant="top" src={paris} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}>
                                    <i align='center' style={{fontSize: '15px'}} class="fa fa-plane"/>
                                </span>
                                <Card.Body>
                                    <Card.Title><h6>On The Go</h6></Card.Title>
                                    <br/>
                                    <Row style={{marginTop: '-17px'}}>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_takeoff</span>
                                            <p style={{fontSize: '8px'}}>Abuja</p>
                                        </Col>
                                        <Col md='6' align='center' style={{marginTop: '2px'}}>
                                            <hr style={{color: '#043f7c'}}/>
                                        </Col>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_land</span>
                                            <p style={{fontSize: '8px'}}>London</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        <h6><b>&#8358;291,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}> <b>Book Now</b> </small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>

                            <Card style={{heightxx: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none', positionxx: 'relative'}}>
                                <Card.Img variant="top" src={city} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}>
                                    <i align='center' style={{fontSize: '15px'}} class="fa fa-plane"/>
                                </span>
                                <Card.Body>
                                    <Card.Title><h6>On The Go</h6></Card.Title>
                                    <br/>
                                    <Row style={{marginTop: '-17px'}}>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_takeoff</span>
                                            <p style={{fontSize: '8px'}}>Abuja</p>
                                        </Col>
                                        <Col md='6' align='center' style={{marginTop: '2px'}}>
                                            <hr style={{color: '#043f7c'}}/>
                                        </Col>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_land</span>
                                            <p style={{fontSize: '8px'}}>London</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        <h6><b>&#8358;291,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}> <b>Book Now</b> </small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            {/* end on the go */}
                            
                            {/* end dispatch */}
                        </CardDeck>
                    </Col>
                {/* </Container> */}
            </div>
        );
    }
}

export default OnTheGoSection;