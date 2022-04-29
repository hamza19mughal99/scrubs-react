import React, {useEffect, useState} from 'react';
import "./OrderDetails.scss";
import {customerOrderData} from "../../../../hooks/customers"
import { Row, Col } from 'react-bootstrap';
import {getCustomerOrder} from "../../../../api/order";

const OrderDetails = () => {


    return (
        <div className='order_cards_container'>
            <h4> YOUR ORDER </h4>

            {customerOrderData.map((data) => {
                return (
                    <React.Fragment>
                        <Row className="mt-4" key={data.id}>
                            <Col md={3}>
                                <div className="image_background_color">
                                    <img width={100} height={100} src={data.img} alt={'img'}/>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="card_inner_text">
                                    <p>{data.name}</p>
                                   <small className="text-muted"><span className="dollar_sign">$</span> {data.price}</small>
                                </div>
                                <div className="card_details">
                                    <div>
                                        <span> Size : </span>
                                        <b> {data.size} </b>
                                    </div>
                                    <div>
                                        <span> Color: </span>
                                        <b> {data.color} </b>
                                    </div>
                                    <div>
                                        <span> Qty: </span>
                                        <b> {data.Qty} </b>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                    </React.Fragment>
                )
            })}
            <div className="delivery_container">
                <strong> DELIVERY </strong>
                <div> <p> $ 50.99</p> </div>
            </div>
            <hr />
            <div className="delivery_container">
                <strong> TOTAL </strong>
                <div> <p> $ 145.99</p> </div>
            </div>
        </div>
    );
};
export default OrderDetails;
