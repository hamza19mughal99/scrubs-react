import React, {useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { GrClose } from 'react-icons/gr';
import Banner from "../../../Components/Banner/Banner";
import {useNavigate} from 'react-router-dom'
import Card from "../../../assets/img/card8.jpg"
import {removeCart} from "../../../utils/helper";
import {errorNotify} from "../../../utils/toast";

const WishList = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useState<any>([
        {
            _id: 1,
            avatar: Card,
            name: 'blue kameez',
            inventory: {
                color: 'blue',
                size: 'sm',
            },
            discountPrice: 120
        }
    ]);

    const onRemoveWishListItemHandler = (id: string) => {
        const wishClone = cart.concat();
        const foundIndex = wishClone.findIndex((item: any) => item.inventory._id === id);
        wishClone.splice(foundIndex, 1)
        setCart(wishClone)
        if (wishClone.length <= 0) {
            navigate("/")
            errorNotify("Cart is empty!")
            removeCart()
        }
    }

    const goToShopDesc = (id: number) => {
        navigate(`/shop-description/${id}`)
    }

    return (
        <React.Fragment>
            <Banner heading={'WISHLIST'} cssClass={'shop_main'} />
            <Container>
                <h5 className='mt-4'>WishList Summary</h5>
                <div className='summary_container'>
                    <Row className='product_head'>
                        <Col md={2}>
                            <h6>Product</h6>
                        </Col>
                        <Col md={2}>
                            <h6 className='text-center'>Color</h6>
                        </Col>
                        <Col md={2}>
                            <h6 className='text-center'>Size</h6>
                        </Col>
                        <Col md={2}>
                            <h6 className='text-center'>Price</h6>
                        </Col>
                        <Col md={2}>
                            <h6 className='text-center'>Actions</h6>
                        </Col>
                    </Row>

                    {cart.map((data: any) => {
                        return (
                            <Row key={data._id} className="mb-4">
                                <Col md={3} xs={6}>
                                    <div className='summer_vibes_container'>
                                        <div className='img_container'>
                                            <img src={data.avatar} alt='product_logo' />
                                        </div>
                                        <div className='mt-4'>
                                            <b>{data.name}</b>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={2} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <span>{data.inventory.color}</span>
                                    </div>
                                </Col>
                                <Col md={2} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <span>{data.inventory.size}</span>
                                    </div>
                                </Col>
                                <Col md={2} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <b>{data.discountPrice}</b>
                                    </div>
                                </Col>
                                <Col md={2} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <button className={'btn'} onClick={() => goToShopDesc(data._id)}> View </button>
                                    </div>

                                </Col>
                                <Col md={1} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <span>
                                            <GrClose className='cross_icon' onClick={() => onRemoveWishListItemHandler(data.inventory._id)} />
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            </Container>
        </React.Fragment>
    )
}
export default WishList