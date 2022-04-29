import React from 'react'
import { Container, Col, Row, Form,Button} from 'react-bootstrap'
import './Slider.scss'
import { useForm } from "react-hook-form";
import inputValidation from '../../../../lib/Validation';
import {SliderInterface} from '../../../../Interfaces/index'

const Slider = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SliderInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        console.log('success')
        reset()
    })
    return (
        <div className="page_responsive">
            <h3>Slider</h3>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="slider_container">
                            <Form onSubmit={onSubmitHandler}>
                                <Form.Group className="mb-3">
                                    <label>Upload image 1 for Banner</label>
                                    <Form.Control {...register('image1', inputValidation.image1)} type="file" />
                                    <small className="text-danger"> {errors.image1 && errors.image1.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <label>Upload image 2 for Banner</label>
                                    <Form.Control {...register('image2', inputValidation.image2)} type="file" />
                                    <small className="text-danger"> {errors.image2 && errors.image2.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <label>Upload image 3 for Banner</label>
                                    <Form.Control {...register('image3', inputValidation.image3)} type="file" />
                                    <small className="text-danger"> {errors.image3 && errors.image3.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <label>Upload image 4 for Banner</label>
                                    <Form.Control {...register('image4', inputValidation.image4)} type="file" />
                                    <small className="text-danger"> {errors.image4 && errors.image4.message} </small>
                                </Form.Group>

                                <div className='save_container'>
                                    <Button type="submit" className="all_btns">Save</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Slider