import React, { useState } from 'react';
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi'
import { useForm } from "react-hook-form";
import inputValidation from '../../../../lib/Validation';
import "./CartDetails.scss";
import { ShippingDetails } from '../../../../Interfaces/index'
import { errorNotify } from "../../../../utils/toast";

const CartDetails = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ShippingDetails>();
    const [isLoading, setIsLoading] = useState(false)
    const [paymentChange, setPaymentChange] = useState("")

    const onSubmitHandler = handleSubmit((data) => {
        setIsLoading(true)
        if (!paymentChange) {
            setIsLoading(false)
            errorNotify('please select any method')
        }
        else {
            console.log("data", data);
            reset()
        }

    })

    return (
        <Container fluid>
            <div className="order_border_box">
                <div className="order_form_container">
                    <div className="shipping_container">
                        <h5 className='shipping_address'>Shipping Address</h5>
                        <div>
                            <span><FiEdit className='edit_icon' /></span>
                            <small className="change"> Change</small>
                        </div>
                    </div>
                    <Form onSubmit={onSubmitHandler}>
                        <Row>
                            <Col md={12} className="mt-2">
                                <Form.Group className="mb-1">
                                    <label className='order_form_label'>Name</label>
                                    <Form.Control type="text" placeholder="Enter full name" {...register('name', inputValidation.name)} />
                                    <small className="text-danger"> {errors.name && errors.name.message} </small>
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mt-2">
                                <Form.Group className="mb-3">
                                    <label className='order_form_label'>Address</label>
                                    <span className='home_icon'><FaHome /></span>
                                    <Form.Control type="text" placeholder="Enter your address" {...register('address', inputValidation.address)} />
                                    <small className="text-danger"> {errors.address && errors.address.message} </small>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <label className='order_form_label'>City</label>
                                    <Form.Control type="text" placeholder="Enter your city" {...register('city', inputValidation.city)} />
                                    <small className="text-danger"> {errors.city && errors.city.message} </small>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3 dropdown">
                                    <label className='order_form_label'>Country</label>
                                    <Form.Control type="text" placeholder="Enter your country" {...register('country', inputValidation.country)} />
                                    <small className="text-danger"> {errors.country && errors.country.message} </small>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Select onChange={(e) => setPaymentChange(e.target.value)}>
                                    <option hidden value={""}>Please select</option>
                                    <option value="1">Paypal</option>
                                    <option value="2">Master Card</option>
                                    <option value="3">Credit Card</option>
                                </Form.Select>

                            </Col>

                            {paymentChange ?
                                <React.Fragment>
                                    <Col md={12} className='mt-2'>
                                        <label className='order_form_label'>Card Number</label>
                                        <Form.Control type="number" placeholder="Enter your card number" {...register('cardNumber', inputValidation.cardNumber)} />
                                        <small className="text-danger"> {errors.cardNumber && errors.cardNumber.message} </small>
                                    </Col>

                                    <Col md={6}>
                                        <label className='order_form_label'>CVV</label>
                                        <Form.Control type="number" placeholder="Enter your card number" {...register('cvv', inputValidation.cvv)} />
                                        <small className="text-danger"> {errors.cvv && errors.cvv.message} </small>
                                    </Col>

                                    <Col md={6}>
                                        <label className='order_form_label'>Expires</label>
                                        <Form.Control type="date" placeholder="Enter your card number" {...register('expires', inputValidation.expires)} />
                                        <small className="text-danger"> {errors.expires && errors.expires.message} </small>
                                    </Col>
                                </React.Fragment>
                                : null
                            }

                            <Col md={12}>
                                <div className="border_btn_container mt-3">
                                    {isLoading ? <Spinner animation={'border'} /> : <button className='save_btn mx-2'>Save</button>}
                                    {/*<button className='cancel_btn'>Cancel</button>*/}
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default CartDetails;
