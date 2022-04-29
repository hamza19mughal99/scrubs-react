import React, { useEffect } from "react";
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import inputValidation from '../../../../lib/Validation';
import { ShippingInterface } from '../../../../Interfaces/index'
import { successNotify } from "../../../../utils/toast";
import { getShippingCost, updateShippingCost } from "../../../../api/admin/shippingCost";

const ShippingCost = () => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<ShippingInterface>();

    useEffect(() => {
        getShippingCost()
          .then((res) => {
              setValue("price", res.data.price);
          })
    }, [])

    const onSubmitHandler = handleSubmit((data) => {
        updateShippingCost(data)
          .then((res) => {
              successNotify(res.data.message)
          })
    })
    return (
        <div className={'page_responsive'}>
            <h3>Shipping Cost</h3>
            <Container>
                <Row>
                    <Col md={12}>
                        <Form onSubmit={onSubmitHandler}>
                            <Form.Group className="mb-3 mt-4">
                                <Form.Control type="number" min="1" {...register('price', inputValidation.shippingCost)} placeholder="Enter flat rate shipping cost" />
                                <small className="text-danger"> {errors.price && errors.price.message} </small>
                            </Form.Group>
                            <div>
                                <Button type= "submit" className="all_btns">Save</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ShippingCost;
