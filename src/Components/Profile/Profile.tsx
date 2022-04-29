import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Spinner, Button } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import Card5 from "../../assets/img/card5.jpg";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import { errorNotify, successNotify } from "../../utils/toast";
import inputValidation from '../../lib/Validation';
import "./Profile.scss";
import { ProfileInterface } from '../../Interfaces/index'
import {useNavigate} from 'react-router-dom';
import { getProfile, updateProfile } from "../../api/admin/auth";
import {roleSelect} from "../../api/admin/role";

const Profile: React.FC<any> = ({ role, heading }) => {
    const navigate = useNavigate();
    const [roleOptions, setRoleOptions] = useState<any>([]);
    const { register, handleSubmit, setValue, formState: { errors }, control, getValues } = useForm<ProfileInterface>();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<null | File>(null);
    const [preview, setPreview] = useState<any>(null);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false)

    useEffect(() => {
        getProfile()
            .then((res) => {
                setValue("name", res.data.name);
                setValue("phoneNumber", res.data.phoneNumber)
                setValue("address", res.data.address)
                setValue("email", res.data.email)
                setIsSuperAdmin(res.data.isSuperAdmin)
                setPreview(res.data.profilePicture.avatar)
            })
    }, [])

    useEffect(() => {
        roleSelect()
            .then((res) => {
                setRoleOptions(res.data)
            })
    }, [])

    const onSubmitHandler = handleSubmit( async (data) => {
        setIsLoading(true);

        try {

            if (selectedFile) {
                const formData = new FormData();
                formData.append("name", data.name);
                formData.append("phoneNumber", data.phoneNumber);
                formData.append("address", data.address);
                formData.append("profilePicture", selectedFile)
                const profile  = await updateProfile(formData)
                successNotify(profile.data.message)
                setIsLoading(false)
            } else {
                const formData = {
                    name: data.name,
                    phoneNumber: data.phoneNumber,
                    address: data.address
                }
                const profile  = await updateProfile(formData)
                successNotify(profile.data.message)
                setIsLoading(false)
            }

        } catch (e: any) {
            errorNotify(e.response.data.message)
            setIsLoading(false)
        }
    })
    return (
        <div className={'page_responsive'}>
            <h3>{heading}</h3>
            <Container>
                <Form onSubmit={onSubmitHandler}>
                    <Row className={'profile_section'}>
                        <Col md={9} className={'profile_img mb-2'}>
                            <img src={preview ? preview : Card5} alt={'profile_img'} />
                        </Col>
                        <Col md={9} className={'d-flex justify-content-end mb-5 p-0'}>
                            <div className={'input_file'}>
                                <input
                                    type="file"
                                    id="file-input"
                                    onChange={(e) => {
                                        setSelectedFile(e.target.files![0])
                                        setPreview(URL.createObjectURL(e.target.files![0]))
                                    }}
                                    className="file_input" />
                                <label className="file_label" htmlFor="file-input">
                                    <FiUpload />
                                    <span>Upload your photo</span>
                                </label>
                            </div>
                        </Col>
                        <Col md={9}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" {...register('name', inputValidation.name)} placeholder="Enter your Name" />
                                <small className="text-danger"> {errors.name && errors.name.message} </small>
                            </Form.Group>
                        </Col>
                        <Col md={9}>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" disabled {...register('email', inputValidation.email)} placeholder="Enter your Email" />
                                <small className="text-danger"> {errors.email && errors.email.message} </small>
                            </Form.Group>
                        </Col>
                        <Col md={9}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" {...register('phoneNumber', inputValidation.contactNo)} placeholder="Enter your Contact Number" />
                                <small className="text-danger"> {errors.phoneNumber && errors.phoneNumber.message} </small>
                            </Form.Group>
                        </Col>
                        <Col md={9}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" {...register('address', inputValidation.address)} placeholder="Enter your Address" />
                                <small className="text-danger"> {errors.address && errors.address.message} </small>
                            </Form.Group>
                        </Col>
                        {
                            role && !isSuperAdmin ? (
                                <Col md={9}>
                                    <Controller
                                        name="role"
                                        control={control}
                                        render={({ field }) => {
                                            return (
                                                <Select
                                                    {...field}
                                                    options={roleOptions}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    placeholder="Select Role"
                                                />
                                            );
                                        }}
                                    />
                                </Col>
                            ) : null
                        }
                        <Col md={9}>
                            <div className='text-center'>
                                {isLoading ? <Spinner className='mt-3' animation={'border'} /> :
                                    <Button className='all_btns' type="submit">
                                        Save Changes
                                    </Button>
                                }
                            </div>

                            <div>
                                <Button className='all_btns mx-2' onClick={()=> navigate("/" + (role ? "admin" : "customer") + "/reset-password")}>Update Password</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};
export default Profile;
