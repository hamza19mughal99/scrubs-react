import React, {useEffect, useState} from 'react'
import {Col, Container, Form, Row} from 'react-bootstrap'
import './AddressDataType.scss'
import {IoIosArrowRoundBack} from 'react-icons/io'
import Banner from "../../../Components/Banner/Banner";
import Select from "react-select";
import {useNavigate} from 'react-router-dom';
import {Controller, useForm} from "react-hook-form";
import {IPersonalInformation} from "../../../Interfaces";
import inputValidation from "../../../lib/Validation";
import {getDecryptedCustomerInfo, storeEncryptedCustomerInfo} from "../../../utils/helper";
import {getTaxOption} from "../../../api/order";


const AddressData = () => {
    const {register, handleSubmit, control, formState: {errors}, setValue} = useForm<IPersonalInformation>();
    const [state, setState] = useState([]);


    const navigate = useNavigate()
    useEffect(() => {
        getTaxOption()
            .then((res) => {
                setState(res.data)
            })
        const customerInfo = getDecryptedCustomerInfo()
        if (customerInfo) {
            setValue("firstName", customerInfo.firstName)
            setValue("lastName", customerInfo.lastName)
            setValue("address", customerInfo.address)
            setValue("email", customerInfo.email)
            setValue("postalCode", customerInfo.postalCode)
            setValue("city", customerInfo.city)
            setValue("phoneNumber", customerInfo.phoneNumber)
            setValue("state", customerInfo.state)
        }
    }, [])

    const onFormSubmit = handleSubmit((data) => {
        storeEncryptedCustomerInfo(data)
        navigate("/payment-method")
    })

    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'}/>
            <Container>
                <Row>
                    <Form onSubmit={onFormSubmit}>
                        <Col md={6} className='mt-3'>
                            <div className='address_form_container'>
                                <h3>Address data and type of delivery</h3>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label>First Name</label>
                                            <Form.Control
                                                type="text" {...register('firstName', inputValidation.firstname)}
                                                placeholder="Enter first name"/>
                                            <small
                                                className="text-danger"> {errors.firstName && errors.firstName.message} </small>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label>Last Name</label>
                                            <Form.Control
                                                type="text" {...register('lastName', inputValidation.lastname)}
                                                placeholder="Enter last name"/>
                                            <small
                                                className="text-danger"> {errors.lastName && errors.lastName.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label>Address</label>
                                            <Form.Control type="text" {...register('address', inputValidation.address)}
                                                          placeholder="Enter your address"/>
                                            <small
                                                className="text-danger"> {errors.address && errors.address.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label>City</label>
                                            <Form.Control type="text" {...register('city', inputValidation.city)}
                                                          placeholder="Enter your city"/>
                                            <small
                                                className="text-danger"> {errors.city && errors.city.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label>Postal Code/ZIP</label>
                                            <Form.Control
                                                type="number" {...register('postalCode', inputValidation.firstname)}
                                                placeholder="Enter your postal code"/>
                                            <small
                                                className="text-danger"> {errors.postalCode && errors.postalCode.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label>Phone number</label>
                                            <Form.Control
                                                type="number" {...register('phoneNumber', inputValidation.phone)}
                                                placeholder="Enter your phone number"/>
                                            <small
                                                className="text-danger"> {errors.phoneNumber && errors.phoneNumber.message} </small>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <label>State</label>
                                        <Controller
                                            name="state"
                                            control={control}
                                            render={({field}) => {
                                                return (
                                                    <Select
                                                        {...field}
                                                        options={state}
                                                        className="basic-multi-select mb-3"
                                                        classNamePrefix="select"
                                                        placeholder="Select Category"
                                                    />
                                                );
                                            }}
                                        />

                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <label>E-mail</label>
                                            <Form.Control type="text" {...register('email', inputValidation.email)}
                                                          placeholder="Enter your email"/>
                                            <small
                                                className="text-danger"> {errors.email && errors.email.message} </small>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div className='steps_container'>
                                <div>
                                <span onClick={() => navigate("/order-summary")}>
                                    <IoIosArrowRoundBack className='back_icon'/>   Back
                                </span>
                                </div>
                                <div className='btns_container'>
                                    <div>
                                        <button className='continue_shopping'>CONTINUE SHOPPING</button>
                                    </div>
                                    <div>
                                        <button className='next_step' type={"submit"}>PROCEED TO PAYMENT</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Form>
                    <Col md={6}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default AddressData
