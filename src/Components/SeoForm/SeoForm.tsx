import React from 'react'
import {Container,Col,Row,Form,Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import inputValidation from '../../lib/Validation';
import {SEOInterface} from '../../Interfaces/index'

const SEOForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SEOInterface>();
    const onSubmitHandler = handleSubmit((data) => {
        console.log("data", data);
        console.log('success')
        reset()
    })
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={9}>
                        <div className="mt-4">
                            <Form  onSubmit={onSubmitHandler}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" {...register('metaTitle', inputValidation.metaTitle)} placeholder="Meta title" />
                                    <small className="text-danger"> {errors.metaTitle && errors.metaTitle.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control type="text" {...register('metaDescription', inputValidation.metaDescription)} placeholder="Meta Description" />
                                    <small className="text-danger"> {errors.metaDescription && errors.metaDescription.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control type="text"  {...register('keywords', inputValidation.keywords)} placeholder="Keywords" />
                                    <small className="text-danger"> {errors.keywords && errors.keywords.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control type="text" {...register('tag1', inputValidation.tag1)} placeholder="Tags" />
                                    <small className="text-danger"> {errors.tag1 && errors.tag1.message} </small>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control type="text" {...register('tag2', inputValidation.tag2)} placeholder="Tags" />
                                    <small className="text-danger"> {errors.tag2 && errors.tag2.message} </small>
                                </Form.Group>

                                <div className='save_btn_container'>
                                    <Button className="all_btns" type="submit">Save</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default SEOForm