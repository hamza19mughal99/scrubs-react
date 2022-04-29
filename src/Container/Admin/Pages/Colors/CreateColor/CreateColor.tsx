import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { errorNotify, successNotify } from "../../../../../utils/toast";
import inputValidation from '../../../../../lib/Validation';
import { ColorInterface } from '../../../../../Interfaces/index'
import { useNavigate } from "react-router-dom";
import { createColor } from "../../../../../api/admin/color";

const CreateColor = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ColorInterface>();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitHandler = handleSubmit(async(data) => {
        try {
            const color = await createColor(data);
            successNotify(color.data.message)
            setIsLoading(false);
            navigate("/admin/colors")
            reset();
        } catch (e: any) {
            errorNotify(e.response.data.message);
            setIsLoading(false);
        }
    })

    return (
        <div className={'page_responsive'}>
            <h3> Create Colors</h3>
            <div className={'create_product_btn'}>
                <Button onClick={() => navigate('/admin/colors')}>Back</Button>
            </div>

            <Container fluid>
                <Row className={'category'}>
                    <Col md={6}>
                        <Form onSubmit={onSubmitHandler}>
                            <Row>
                                <Col md={8}>
                                    <Form.Group className="mb-3">
                                        <label>Color Name</label>
                                        <Form.Control {...register('name', inputValidation.colorName)} type="text" />
                                        <small className="text-danger"> {errors.name && errors.name.message} </small>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <label>Color Picker</label>
                                        <Form.Control {...register('code', inputValidation.colorPicker)} type="color" />
                                        <small className="text-danger"> {errors.code && errors.code.message} </small>
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    {
                                        !isLoading ?
                                          <Button type="submit"> Create Color</Button>
                                          :
                                          <Spinner animation={"border"} />
                                    }
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default CreateColor;
