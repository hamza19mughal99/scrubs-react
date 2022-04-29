import React from 'react'
import './Brand.scss';
import { Container } from 'react-bootstrap';
import {shopByBrand} from "../../hooks/others/Brand";
// @ts-ignore
import Slider from 'react-slick';


const Brand = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='shop_by_brand'>
            <Container>
                <div className='shop_brand'>
                    <h3> SHOP BY BRAND </h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <Slider {...settings} >
                    {
                        shopByBrand.map((data) => {
                            const { id, img } = data
                            return (
                                <div key={id}>
                                    <img src={img} width={100} alt={'img'} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </Container>
        </div>
    )
}
export default Brand;