import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import docImg from "../../../assets/img/about_Section.png";
import wearImg from "../../../assets/img/about3.png";
import {BsCheckCircleFill} from "react-icons/bs"
import Offer from "../../../Components/Offer/Offer";
import SliderTestimonial from "../../../Components/SliderTestimonial/SliderTestimonial";
import Banner from "../../../Components/Banner/Banner";
import "./About.scss";

const About = () => {
    return (
        <React.Fragment>
            <Banner heading={'ABOUT US'} cssClass={'about_main'} />

            <div className={'about_section'}>
                <Container fluid>
                    <Row className={'mt-5'}>
                        <Col md={6}>
                            <Container className={'about_text_section'}>
                                <h4>About medical Scrubs</h4>
                                <h5>
                                    Lorem Ipsum ink is the latest full trend lorem ipsum Lorem Ipsum
                                    ink is the latest full trend lorem ipsum
                                </h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                <p><BsCheckCircleFill /> It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                                <p><BsCheckCircleFill /> It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                                <p><BsCheckCircleFill /> It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                                <p><BsCheckCircleFill /> It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                            </Container>
                        </Col>
                        <Col md={6} className={'p-0'}>
                            <div className={'about_img_section'}>
                                <img src={docImg} alt={'doc-img'} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className={'about_med_scrub'}>
                    <Row>
                        <Col md={6} />
                        <Col md={6}>
                            <div className={'about_med_scrub_right'}>
                                <h5>Welcome to Medical Scrubs - your first choice
                                    for quality, service and value in scrubs
                                    workWear and uniforms.</h5>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that it has a more-or-less normal distribution of letters, as opposed to using
                                    'Content here, content here', making it look like readable English. Many desktop
                                    publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className={'wear_section'}>
                    <Row>
                        <Col md={6}>
                            <div className={'wear_text_section'}>
                                <h4>LOVE WHAT YOU WEAR</h4>
                                <p>At Scrub Hub we carry a wide selection of medical scrub uniforms for
                                    men and women in today's most fashionable looks and desired brands</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p>
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>

                        </Col>
                        <Col md={6}>
                            <div className={'wear_img_section'}>
                              <img src={wearImg} alt={'wear-img'} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className={'achievement_section'}>
                    <div className={'achievement_text_section'}>
                        <h3>OUR ACHIEVEMENTS</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <h5><BsCheckCircleFill /> The Best Medical Uniform 2022</h5>
                        <h5><BsCheckCircleFill /> Certified by the International Association</h5>
                        <h5><BsCheckCircleFill /> The Five Star Award</h5>
                    </div>
                </div>
                <Offer />
                <SliderTestimonial />
            </div>
        </React.Fragment>
    );
};
export default About;