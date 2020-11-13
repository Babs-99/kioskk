import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import slider2 from '../../assets/img/slider/2.jpg'
import slider3 from '../../assets/img/slider/3.jpg'
import SexButtonGroup from '../SexButtonGroup/SexButtonGroups'
import FormSection from '../FormSection/FormSections'
import MultiStep from 'react-multistep'
import VehicleFormSections from '../FormSection/VehicleFormSections';
// const MultiStep = import from 'react-multistep'
import VehicleForm from '../FormSection/VehicleFormSections'
import AdditionalCover from '../FormSection/AdditionalCover'
import Covid19Content from './Covid19Content'
// import CardSelect from './CardSelectButton'
import CardSelectButton from './CardSelectButton'
import BaggageCard from './BaggageCard'
import OutboundCard from './OutboundCard'
import TicketCard from './TicketCard'

class TicketOptionsTab extends Component {
    render() {
        return (
            <div>
                
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                    {/* <MultiStep /> */}
                    <Col lg={12}>
                        <Row>
                            <Col md={8}>
                                <Covid19Content />
                                <br/>
                                <CardSelectButton />
                                <br/>
                                <BaggageCard />
                                {/* <br/>
                                <Button variant='danger' style={{width: '100%'}} type="submit">Go To Passenger Details </Button> */}
                                
                            </Col>
                            

                            <Col md={4}>
                                <OutboundCard />
                                <br/>
                                <TicketCard />
                            </Col>
                        </Row>
                        
                    </Col>
                {/* </Container> */}
            </div>
        );
    }
}

export default TicketOptionsTab;