import React from 'react';
import { Container, Col, Row } from "react-bootstrap"
import "./Testimonials.scss";
import {ImQuotesLeft} from "react-icons/im";
import {testimonialsData} from "../../../hooks/others/testimonials"
import Banner from "../../../Components/Banner/Banner";

const Testimonials = () => {

    return (
        <React.Fragment>
            <Banner heading={'TESTIMONIALS'} cssClass={'about_main'} />
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='container_text text-center mt-4'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio alias fugiat eum nostrum odio?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi saepe ratione iste et nisi nihil natus ipsa commodi. Recusandae inventore minus esse ut similique, distinctio alias fugiat eum nostrum odio
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className={'main_testimonials'}>
                    <Col md={10}>
                        {testimonialsData.map((data) => {
                            return (
                                <div className='d-flex round_container' key={data.id}>
                                    <div className='round_image'>
                                        <img src={data.img} width={200} height={200} alt={'img'}/>
                                    </div>
                                    <div className='text_container'>
                                        <h6 className='client_name'>{data.name}</h6>
                                        <small className='nursing_color'>{data.role}</small>

                                        <div className='d-flex'>
                                            <div className='inverted_commas'> <ImQuotesLeft /> </div>
                                            <div className='clientSay_container'>
                                                <p className='mt-3'>{data.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default Testimonials;