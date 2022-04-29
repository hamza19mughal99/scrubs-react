import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "../Category.scss";
import { useForm } from "react-hook-form";
import { errorNotify, successNotify } from "../../../../../utils/toast";
import inputValidation from '../../../../../lib/Validation';
import { CategoriesInterface } from '../../../../../Interfaces/index'
import { useNavigate, useParams } from "react-router-dom";
import { createCoupon, editCoupon } from "../../../../../api/admin/coupon";
import { createCategories, getCategoryById, updateCategories } from "../../../../../api/admin/category";

const CreateCategory = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<CategoriesInterface>();
    const { id } = useParams();
    const isAddMode = !id;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isAddMode) {
            getCategoryById(id!)
              .then((res) => {
                  setValue("name", res.data.name)
              })
        }
    }, [])

    const onSubmitHandler = handleSubmit( async (data) => {
        setIsLoading(true);
        if (!isAddMode) {
            try {
                const category = await updateCategories(data, id!);
                successNotify(category.data.message)
                setIsLoading(false);
                navigate("/admin/categories")
            } catch (e: any) {
                errorNotify(e.response.data.message);
                setIsLoading(false);
            }
        } else {
            try {
                const category = await createCategories(data);
                successNotify(category.data.message)
                setIsLoading(false);
                navigate("/admin/categories")
                reset();
            } catch (e: any) {
                errorNotify(e.response.data.message);
                setIsLoading(false);
            }
        }
    })

    return (
        <div className={'page_responsive'}>
            <h3>{!isAddMode ? "Update" : "Create"} Categories</h3>
            <div className={'create_product_btn'}>
                <Button onClick={() => navigate('/admin/categories')}>Back</Button>
            </div>

            <Container fluid>
                <Row className={'category'}>
                    <Col md={6}>
                        <Form onSubmit={onSubmitHandler}>
                            <Row>
                                <Col md={8}>
                                    <Form.Group className="mb-3">
                                        <label>Category Name</label>
                                        <Form.Control {...register('name', inputValidation.name)} type="text" />
                                        <small className="text-danger"> {errors.name && errors.name.message} </small>
                                    </Form.Group>
                                </Col>
                                <Col md={8}>
                                    {
                                        !isLoading ?
                                          <Button type="submit">{!isAddMode ? "Update" : "Create"} Category</Button>
                                          : <Spinner animation={"border"} />
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

export default CreateCategory;
