import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { Container, Col, Row, Form, Spinner } from 'react-bootstrap';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Banner from "../../../Components/Banner/Banner";
import Brand from "../../../Components/Brand/Brand";
import Offer from "../../../Components/Offer/Offer";
import SliderTestimonial from "../../../Components/SliderTestimonial/SliderTestimonial";
import ContactImage from '../../../assets/img/contact-us-image.png';
import inputValidation from '../../../lib/Validation';
import "./Contact.scss";
import {ContactInterface} from '../../../Interfaces/index'

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInterface>();
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitHandler = handleSubmit((data) => {
        setIsLoading(true)
        console.log('success')
        reset()
    })

    return (
        <React.Fragment>
            <Banner heading={'CONTACT US'} cssClass={'about_main'} />
            <Container>
                <Row>
                    <Col md={6} className='mt-4 border_box'>
                        <div className="get_in_touch_container">
                            <h4>GET IN TOUCH WITH US</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis, molestiae cum iusto, illum ullam similique . Numquam iure sequi explicabo est!</p>
                        </div>
                        <div className='form_container'>
                            <h6> Send Message </h6>
                            <Form onSubmit={onSubmitHandler}>
                                <Row>
                                    <Col md={6} className="mt-2">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Enter full name" {...register('name', inputValidation.name)} />
                                            <small className="text-danger"> {errors.name && errors.name.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mt-2">
                                        <Form.Group className="mb-3">
                                            <Form.Control type="text" placeholder="Enter email address" {...register('email', inputValidation.email)} />
                                            <small className="text-danger"> {errors.email && errors.email.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Control as="textarea" rows={3} placeholder="Message" {...register('textMessage', inputValidation.textMessage)} />
                                            <small className="text-danger"> {errors.textMessage && errors.textMessage.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} className={'text-center'}>
                                        { isLoading ? <Spinner animation="border" /> : <button type="submit"> Submit </button> }
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <hr />
                        <div className='border_icons_container'>
                            <Col className='mt-3' md={3}>
                                <Fab size="small" aria-label="home"> <HomeIcon  /> </Fab>
                                <p> Dummy Address Put here </p>
                            </Col>
                            <Col className='mt-3' md={3}>
                                <Fab size="small" aria-label="Phone"> <PhoneIcon /> </Fab>
                                <p> +00-012-264412 </p>
                            </Col>
                            <Col className='mt-3' md={3}>
                                <Fab size="small" aria-label="email"> <EmailIcon /> </Fab>
                                <p> info@yourdomain.com </p>
                            </Col>
                        </div>
                    </Col>
                    <Col className='mb-2' md={6}>
                        <div className="contact_image_container">
                            <img src={ContactImage} alt={'img'} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Brand />
            <Offer />
            <SliderTestimonial />
        </React.Fragment>
    );
};
export default Contact;