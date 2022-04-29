import React, {useState} from 'react';
import {Container, Col, Row, Form, Spinner} from 'react-bootstrap'
import "./UploadPhoto.scss";
import {FiUpload} from "react-icons/fi";
import {createPictureApproval} from "../../../../api/admin/pictureApproval";
import {successNotify} from "../../../../utils/toast";

const UploadPhoto = () => {

    const [file, setFile] = useState<any>(null)
    const [preview, setPreview] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const onImageUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        const formData = new FormData();
        formData.append("image", file)
        const res = await createPictureApproval(formData)
        successNotify(res.data.message)
        setPreview(null)
        setFile(null)
        setIsLoading(false)
    }

    return (
        <div className={'upload_photo_section'}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='add_your_photo' >
                            <div className='inner_add_photo'>
                                <h3>Add your Photo</h3>
                                <span> With US </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='upload_photo'>
                            <div className='inner_upload_photo'>
                                <div className={'upload_img'}>
                                    <Form onSubmit={onImageUpload}>
                                        {
                                            preview ?
                                            <img width={50} height={50} alt={"preview"} src={preview}/>
                                                : null
                                        }
                                        <input
                                            type="file"
                                            name="file-input"
                                            onChange={(e) => {
                                                setFile(e.target.files![0]);
                                                setPreview(URL.createObjectURL(e.target.files![0]))
                                            }
                                        }
                                            id="file-input"
                                            required
                                            className="file_input" />
                                        <label className="file_label" htmlFor="file-input">
                                            <FiUpload />
                                            <span>Upload your photo</span>
                                        </label>
                                        {
                                            !isLoading ? (
                                                <button className={'btn mx-2'}>
                                                    Upload
                                                </button>
                                            ) : (
                                                <div className="text-center">
                                                    <Spinner animation={"border"}/>
                                                </div>
                                            )
                                        }
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default UploadPhoto;
