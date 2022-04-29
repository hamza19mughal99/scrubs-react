import React, {useEffect, useState} from 'react';
import {Spinner, Table} from 'react-bootstrap'
import {getOrderById} from "../../../../../api/admin/order";
import { useParams } from "react-router-dom";
import './OrderDetails.scss'

const OrderDetails = () => {
    const { id } = useParams();

    const [order, setOrder] = useState<any>(null);

    const [isLoading, setIsLoading] = useState(true);




    useEffect(() => {
        setIsLoading(true)
        getOrderById(id!)
            .then((res) => {
                console.log(res.data)
                setIsLoading(false)
                setOrder(res.data)
            })
    }, [])

    return (

                <div className='page_responsive'>
                    <h3>Order Details</h3>
                    {
                        !isLoading &&  order ? (
                            <React.Fragment>
                                <div className="coupon_container">
                                    <Table striped bordered hover responsive>
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Color</th>
                                            <th>Size</th>
                                            <th>Quantity</th>
                                            <th>Picture</th>
                                            <th>Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            order.cart.map((cart: any) => (
                                                <tr>
                                                    <td>{cart.name}</td>
                                                    <td>{ cart.inventory.color}</td>
                                                    <td>{ cart.inventory.size}</td>
                                                    <td>{cart.qty}</td>
                                                    <td><img width={50} height={50} src={cart.avatar}  alt={cart._id}/></td>
                                                    <td>${cart.discountPrice}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </Table>
                                    <div className='total_price'>
                                        <div className='inner_container'>
                                            <p>Total Price: ${order.totalAmount}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pb-4'>
                                    <h3>Information</h3>
                                    <div className='info_container'>
                                        <span>Name: {order.userInfo.firstName}</span>
                                    </div>
                                    <div className='info_container'>
                                        <span>Shipping Address: {order.userInfo.address}</span>
                                    </div>
                                    <div className='info_container'>
                                        <span>Email: {order.userInfo.email}</span>
                                    </div>
                                    <div className='info_container'>
                                        <span>Contact No: {order.userInfo.phoneNumber}</span>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : <Spinner animation={"border"}/>
                    }
                </div>

    );
};
export default OrderDetails;
