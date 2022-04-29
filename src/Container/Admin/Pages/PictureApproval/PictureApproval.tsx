import React, { useEffect, useState } from 'react'
import {Container, Col, Row, Card, Button, Spinner} from 'react-bootstrap'
import './PictureApproval.scss'
import cardImage1 from '../../../../assets/img/offer_gift.png'
import cardImage2 from '../../../../assets/img/offer_gift.png'
import cardImage3 from '../../../../assets/img/offer_gift.png'
import cardImage5 from '../../../../assets/img/offer_gift.png'
import {getPictureApproval} from "../../../../api/admin/pictureApproval";
import {errorNotify} from "../../../../utils/toast";

const PictureApproval = () => {

    const [images, setImages] = useState<any>([]);
    const [selectedImages, setSelectedImages] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getPictureApproval()
            .then((res) => {
                setIsLoading(false)
                setImages(res.data.map((data: any) => {
                    return {
                        ...data,
                        isChecked: false
                    }
                }))
            })
    }, [])
    const [approvalData, setApprovalData] = useState<any>([
        {
            id: 1,
            img: cardImage1,
            isChecked: false,
        },
        {
            id: 2,
            img: cardImage2,
            isChecked: false,
        },
        {
            id: 3,
            img: cardImage3,
            isChecked: false,
        },
        {
            id: 4,
            img: cardImage5,
            isChecked: false,
        },
        {
            id: 5,
            img: cardImage1,
            isChecked: false,
        },
        {
            id: 6,
            img: cardImage2,
            isChecked: false,
        },
        {
            id: 7,
            img: cardImage3,
            isChecked: false,
        },
        {
            id: 8,
            img: cardImage5,
            isChecked: false,
        },
        {
            id: 9,
            img: cardImage3,
            isChecked: false,
        },
        {
            id: 10,
            img: cardImage5,
            isChecked: false,
        },

    ])

    const onChangeHandler = (data: any) => {
        setImages(
            images.map((image: any) => {
                if (image._id === data._id) {
                    console.log(image.isChecked)
                    if (!image.isChecked) {
                        const selectedImagesClone = selectedImages.concat();
                        selectedImagesClone.push(image);
                        setSelectedImages(selectedImagesClone)
                    }  else {
                        const selectedImagesClone = selectedImages.concat();
                        const found = selectedImagesClone.findIndex((img: any) => img._id === image._id);
                        console.log(found)
                        selectedImagesClone.splice(found, 1)
                        setSelectedImages(selectedImagesClone)
                    }
                    return { ...image, isChecked: !image.isChecked }
                }
                else {
                    return image;
                }
            })
        )
    }

    const onDownloadHandler = async () => {
        if (selectedImages.length <= 0) {
            errorNotify("Please select at least one image")
        } else {
            for (let i = 0; i< selectedImages.length; i++) {
                const response = await fetch(selectedImages[i].avatar);
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = `picture-${i}.jpeg`;
                    a.click();
                });
            }
        }
    }



    return (
        <div className="page_responsive">
            <h3>Picture Approval</h3>
            <Container>
                <Row>
                    {
                        !isLoading ? (
                            images.length > 0 ? (
                                <Col md={12} className="picture_container">
                                    <div className='picture_approval'>
                                        {images.map((data: any) => {
                                            return (
                                                <div key={data._id} className="mb-3">
                                                    <Card>
                                                        <input type="checkbox" checked={!!data.isChecked} onChange={() => onChangeHandler(data)} />
                                                        <Card.Img className="img-fluid" variant="top" src={data.avatar} />
                                                    </Card>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <div className='approve_deny_container'>
                                        <div>
                                            <Button className='all_btns' onClick={() => onDownloadHandler()}>Download</Button>
                                        </div>
                                    </div>
                                </Col>
                            ) : (
                                <div className={"text-center"}>
                                    <p>No Images Found</p>
                                </div>
                            )
                        ) : (
                            <div className="text-center">
                                <Spinner animation={"border"}/>
                            </div>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}
export default PictureApproval
