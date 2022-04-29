import React, { useState } from 'react';
import { Form, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import "./UploadPhoto.scss";
import { useForm } from "react-hook-form";
import inputValidation from '../../../../lib/Validation';
import {UploadPhotoInterface} from '../../../../Interfaces/index'

const UploadPhoto = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<UploadPhotoInterface>();
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitHandler = handleSubmit((data) => {
        setIsLoading(true)
        console.log("data", data);
        console.log('success')
        reset()
    })
    return (
        <div className={'page_responsive'}>
            <h3>Upload Photo on Scrub for Admin Approval</h3>
            <Container>
                <Form onSubmit={onSubmitHandler}>
                    <Row className={'customer_upload_photo'}>
                        <Col md={12}>
                            <Form.Group className="mb-3">
                                <Form.Control type="file"{...register('image', inputValidation.image)} />
                                <small className="text-danger"> {errors.image && errors.image.message} </small>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <div className='text-center'>
                                {isLoading ? <Spinner className='mt-3' animation={'border'} /> :
                                    <Button className='all_btns' type="submit">
                                        Submit
                                    </Button>
                                }
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default UploadPhoto;