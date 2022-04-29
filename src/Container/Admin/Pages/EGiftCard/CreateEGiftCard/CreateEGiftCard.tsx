import React, {useEffect, useState} from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import inputValidation from "../../../../../lib/Validation";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { EgiftCardInterface } from '../../../../../Interfaces/index'
import {errorNotify, successNotify} from "../../../../../utils/toast";
import {createGift, getGiftById, updateGiftById} from "../../../../../api/admin/gift";
import {getAttributesById} from "../../../../../api/admin/attribute";

const CreateEGiftCard = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const isAddMode = !id;
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<EgiftCardInterface>();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<null | File>(null);

    useEffect(() => {
        if (!isAddMode) {
            getGiftById(id!)
                .then((res) => {
                    setValue("name", res.data.name);
                    setValue("code", res.data.code);
                    setValue("price", res.data.price);
                    setValue("description", res.data.description);
                })
        }
    }, [])

    const onSubmitHandler = handleSubmit(  (data) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("code", data.code);
        formData.append("price", data.price);
        formData.append("description", data.description);
        console.log("LOREM")
        if (!isAddMode) {
            try {
                if (selectedFile) {
                    // @ts-ignore
                    formData.append("image", selectedFile);
                }
                updateGiftById(id!, formData)
                    .then((gift) => {
                        successNotify(gift.data.message)
                        navigate("/admin/e-giftcard")
                        setIsLoading(false)
                    })

            } catch (e: any) {
                errorNotify(e.response.data.message)
                setIsLoading(false)
            }
        } else {
            try {
                console.log(data)
                // @ts-ignore
                formData.append("image", selectedFile);

                createGift(formData)
                    .then((gift) => {
                        console.log(gift)
                        successNotify(gift.data.message)
                        navigate("/admin/e-giftcard")
                        setIsLoading(false)
                    })

            } catch (e: any) {
                errorNotify(e.response.data.message)
                setIsLoading(false)
            }
        }

    })

    return (
        <div className={'page_responsive'}>
            <h3>{!isAddMode ? "Update" : "Create"} E-Gift Card</h3>
            <div className={'create_product_btn'}>
                <Button className="all_btns" onClick={() => navigate('/admin/e-giftcard')}>Back</Button>
            </div>
            <Container className={'mt-4'}>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" {...register('name', inputValidation.couponName)} placeholder="Enter E-Gift Card Name" />
                        <small className="text-danger"> {errors.name && errors.name.message} </small>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" {...register('code', inputValidation.eGiftCardCode)} placeholder="Enter E-Gift Card Code" />
                        <small className="text-danger"> {errors.code && errors.code.message} </small>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="number" {...register('price', inputValidation.egiftPrice)} placeholder="Enter Price" />
                        <small className="text-danger"> {errors.price && errors.price.message} </small>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="file"
                                      required={isAddMode}
                                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                          setSelectedFile(e.target.files![0])
                                      }}
                                      placeholder="Enter E-gift card image" />
                        <small className="text-danger"> {errors.image && errors.image.message} </small>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={3} placeholder="Description" {...register('description', inputValidation.egiftDescription)} />
                        <small className="text-danger"> {errors.description && errors.description.message} </small>
                    </Form.Group>

                    <div className="text-end">
                        { !isLoading ? (
                          <Button className="all_btns" type="submit">
                              {!isAddMode ? "Update" : "Create"} E-Gift Card
                          </Button>
                        ): <Spinner animation={"border"} />
                        }                    </div>
                </Form>
            </Container>
        </div>
    );
};
export default CreateEGiftCard;
