import React, {useEffect, useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import './OrderSummary.scss';
import { GrClose } from 'react-icons/gr';
import Banner from "../../../Components/Banner/Banner";
import {useNavigate} from 'react-router-dom'
import {getDecryptedCartItems, removeCart, storeEncryptedCartItems} from "../../../utils/helper";
import {errorNotify} from "../../../utils/toast";

const OrderSummary = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useState<any>([]);
    const plus = (id: string) => {
        const cartClone = cart.concat();
        const foundIndex = cartClone.findIndex((item: any) => item.inventory._id === id);
        cartClone[foundIndex].qty += 1
        setCart(cartClone)
        storeEncryptedCartItems(cartClone)
    }

    const getTotalPrice = () => {
        const totalPrice = cart.reduce((curVal: any, acc: any) => {
            let total = acc.discountPrice * acc.qty;
            return curVal + total
        }, 0)

        return totalPrice
    }

    const minus = (id: string) => {
        const cartClone = cart.concat();
        const foundIndex = cartClone.findIndex((item: any) => item.inventory._id === id);
        if (cartClone[foundIndex].qty <= 1) {

        } else {
            cartClone[foundIndex].qty -= 1
            setCart(cartClone)
            storeEncryptedCartItems(cartClone)
        }
    }

    useEffect(() => {
        const cart  = getDecryptedCartItems();
        if (cart.length <= 0) {
            navigate("/")
            errorNotify("Cart is empty!")
        }
        setCart(cart)
    }, [])


    const onRemoveItemHandler = (id: string) => {
        const cartClone = cart.concat();
        const foundIndex = cartClone.findIndex((item: any) => item.inventory._id === id);
        cartClone.splice(foundIndex, 1)
        setCart(cartClone)
        if (cartClone.length <= 0) {
            navigate("/")
            errorNotify("Cart is empty!")
            removeCart()
        }

    }

    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'} />
            <Container>
                <h5 className='mt-4'>Order Summary</h5>
                <div className='summary_container'>
                    <Row className='product_head'>
                        <Col md={3}>
                            <h6 className={'text-center'}>Product</h6>
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
                        <Col md={3}>
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
                                        <div>
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
                                <Col md={3} xs={3}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <span>
                                            <GrClose className='cross_icon' onClick={() => onRemoveItemHandler(data.inventory._id)} />
                                        </span>
                                    </div>
                                </Col>
                                {/*<Col md={1} />*/}
                            </Row>
                        )
                    })}
                </div>
                <Row>
                    <Col md={12}>
                        <div className='Total_cost_container'>
                            <div>
                                <span>TotalCost</span>
                                <b>${getTotalPrice()}</b>
                            </div>
                            <div>
                                <button className='continue_shopping'>CONTINUE SHOPPING</button>
                            </div>
                            <div>
                                <button className='next_step' onClick={()=> navigate("/address-data")}>PROCEED TO DELIVERY</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default OrderSummary
