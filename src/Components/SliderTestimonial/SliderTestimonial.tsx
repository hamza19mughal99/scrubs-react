import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
// @ts-ignore
import Slider from 'react-slick';
import Avatar from "../../assets/img/avatar.png"
import {ImQuotesLeft} from "react-icons/im";
import "./SliderTestimonial.scss"
import {getReviews} from "../../api/review";


const SliderTestimonial = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getReviews()
            .then((res) => {
                setReviews(res.data)
                console.log(res.data)
                setIsLoading(false)
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };


    return (
        <Container className={'mb-5'}>
            <Row className={'justify-content-center'}>
                <Col md={9}>
                    {
                        !isLoading ? (
                            <Slider {...settings}>
                                {
                                    reviews.map((review: any) => (
                                        <div key={review._id} className='d-flex round_container'>
                                            <div className='Round_image'>
                                                <img className='circle_image' alt='img' src={Avatar} width={200} height={200} />
                                            </div>
                                            <div className='text_container'>
                                                <h6>{review.order.userInfo.firstName}</h6>
                                                <div className='d-flex'>
                                                    <div className='inverted_commas'><ImQuotesLeft /></div>
                                                    <div className='clientSay_container'><p className='mt-3 client_says'>{review.text}</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        ) : (
                            <div className="text-center">
                                <Spinner animation={"border"}/>
                            </div>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
};
export default SliderTestimonial
