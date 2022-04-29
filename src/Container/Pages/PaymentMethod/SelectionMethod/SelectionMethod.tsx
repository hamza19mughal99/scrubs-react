import React, { useState } from 'react'
import './SelectionMethod.scss'
import {Col, Row, Form, Spinner} from 'react-bootstrap'
import { IoIosArrowRoundBack } from 'react-icons/io'
import {ProductData} from './ProductData'
import { useNavigate } from 'react-router-dom'

const SelectionMethod: React.FC<any> = ({ cart, setPaymentMethod, paymentMethod }) => {
  const navigate = useNavigate();
  return (
    <div className='Payment_container'>
      <h4>Payment Method</h4>
      <div>
        <input type="radio" id='cash' name="cash" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} value={'cod'} />
        <span>Cash on Delivery</span>
      </div>
      <div>
        <input type="radio" id='payment' name="cash" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} value={'card'} />
        <span>Payment by Cards</span>
      </div>

      {paymentMethod === "card" ?
        <React.Fragment>
          <label>Card Detail</label>
          <div className='d-flex'>
            <div>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Enter card number" />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Enter cvv" />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="MM/YY" />
              </Form.Group>
            </div>
          </div>
        </React.Fragment>
        : null
      }
      <hr />
      <h6>Your Cart</h6>
      {
          cart.map((data: any) => {
              return (
                  <Row key={data._id} className='mb-2'>
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

                      <Col md={2} xs={6}>
                          <div className='d-flex justify-content-center align-items-center h-100'>
                              <b>{data.price}</b>
                          </div>
                      </Col>

                      <Col md={2} xs={3}>
                          <div className='d-flex justify-content-center align-items-center h-100'>
                              <b>{data.qty}</b>
                          </div>
                      </Col>

                      <Col md={3} xs={3}></Col>
                  </Row>
              )
          })
      }

      <div className='back_container'>
        <b onClick={()=>navigate("/address-data")}>
          <IoIosArrowRoundBack className='back_icon' />   Back
        </b>
      </div>

    </div>
  )
}

export default SelectionMethod
