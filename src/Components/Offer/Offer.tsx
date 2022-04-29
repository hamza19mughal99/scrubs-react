import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import offer from "../../assets/img/offer_gift.png";
import "./Offer.scss";

const Offer = () => {
    return (
        <div className={'offer_section'}>
            <h2>SCRUBS EXCLUSIVE OFFER</h2>
            <Container>
                <Row className={'justify-content-center'}>
                    <Col md={3} className={'p-0'}>
                        <div className={'freeShip'}>
                            <h3>Free Shipping</h3>
                            <h4>No Minimum!</h4>
                            <p>USE CODE: FREESHIP</p>
                            <Button>COPY CODE</Button>
                        </div>
                    </Col>
                    <Col md={4} className={'p-0'}>
                        <div className={'freeShip_inspired'}>
                            <h3>INSPIRED</h3>
                            <h4>BY THE CAREGIVER.</h4>
                            <h1> WE </h1>
                            <h1>THANK YOU</h1>
                        </div>
                    </Col>
                    <Col md={3} className={'p-0'}>
                        <div className={'freeShip'}>
                            <h5>Free $10 Gift Card</h5>
                            <p>with @100 Gift Card Purchase!</p>
                            <img src={offer} alt={'offer'} />
                            <p>USE CODE: FREECC</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Offer;