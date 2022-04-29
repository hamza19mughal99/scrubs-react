import React, {useEffect, useState, useCallback} from 'react';
import './Product.scss';
import {Container, Card, Spinner} from 'react-bootstrap'
// @ts-ignore
import Slider from 'react-slick';
import ProductColors from "./ProductColors/ProductColors";
import { BsCart } from 'react-icons/bs'
import {allProductData} from "../../../../hooks/admin"
import { FaHeart } from 'react-icons/fa'
import {FiHeart} from "react-icons/fi"
import { useNavigate } from 'react-router-dom';
import {getFewProduct} from "../../../../api/product";

const Product = () => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([]);
    const  [toggleHeart, setToggleHeart] = useState(false)

    const changeColor = () => {
        setToggleHeart(!toggleHeart)
    }

    useEffect(() => {
        setIsLoading(true)
        getFewProduct()
            .then((res) => {
                setIsLoading(false)
                setProducts(res.data)
                console.log(res.data)
            })
    }, [])


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <ProductColors />
            <Container>

                    {
                        !isLoading ? (
                            products.length > 0 ?
                                (
                                    <Slider {...settings} >
                                        {
                                            products.map((data: any) => {
                                                return (
                                                    <div className='cursor_pointer' key={data._id}>
                                                        <Card className="cards_slider">
                                                            <Card.Img variant="top" className="card_img" src={data.images[0].avatar} height={300} />
                                                            <div className='addToCard_container'>
                                                                <div className={'wishlist'}>
                                                                    <FiHeart onClick={changeColor} className={
                                                                        toggleHeart ? 'heart activeHeart' : 'heart'
                                                                    } />
                                                                </div>
                                                                <div className='add_to_cart'>
                                                                    <BsCart />
                                                                </div>
                                                            </div>
                                                            <Card.Body>
                                                                <Card.Title>
                                                                    {`${data.name.slice(0, 30)}...`}
                                                                </Card.Title>

                                                                <Card.Text>
                                                                   $ {data.price}
                                                                </Card.Text>
                                                                <button onClick={()=>navigate(`/shop-description/${data._id}`)}>Shop Now</button>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                ) : (
                                    <div className={"text-center"}>
                                        <p>No Product Found</p>
                                    </div>
                                )
                        ) : (
                            <div className={"text-center"}>
                                <Spinner animation={"border"}/>
                            </div>
                        )
                    }

            </Container>
        </React.Fragment>
    )
}
export default Product
