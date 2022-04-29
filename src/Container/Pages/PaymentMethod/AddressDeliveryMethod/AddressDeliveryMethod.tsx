import React, {useState} from 'react'
import './AddressDeliveryMethod.scss'
import {Form, Spinner} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {createOrder, getCouponByCode, getGiftByCode} from "../../../../api/order";
import {errorNotify, successNotify} from "../../../../utils/toast";
import {getCurrentUser, removeCart, removeUserInfo} from "../../../../utils/helper";

const AddressDeliveryMethod: React.FC<any> = ({personalInfo, cart, paymentMethod}) => {
    const navigate = useNavigate()
    const [giftCode, setGiftCode] = useState("")
    const [couponCode, setCouponCode] = useState("")
    const [gift, setGift] = useState<any>(null);
    const [coupon, setCoupon] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [discount, setDiscount] = useState(0);

    const getTotalPrice = () => {
        const totalPrice = cart.reduce((curVal: any, acc: any) => {
            let total = acc.discountPrice * acc.qty;
            return curVal + total
        }, 0)

        return totalPrice
    }

    const onGiftSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        getGiftByCode(giftCode)
            .then((res) => {
                setIsLoading(false)
                if (gift) {
                    setDiscount((discount - gift.price) + res.data.price)
                } else {
                    setDiscount(discount + res.data.price)
                }
                setGift(res.data)
            })
            .catch((err) => {
                errorNotify(err.response.data.message)
                setIsLoading(false)
            })
            .finally(() => {
                setGiftCode("")
            })
    }

    const onCouponSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        getCouponByCode(couponCode)
            .then((res) => {
                setIsLoading(false)
                if (coupon) {
                    setDiscount((discount - coupon.discountPrice) + res.data.discountPrice)
                } else {
                    setDiscount(discount + res.data.discountPrice)
                }
                setCoupon(res.data)
            })
            .catch((err) => {
                errorNotify(err.response.data.message)
                setIsLoading(false)
            })
            .finally(() => {
                setCouponCode("")
            })
    }

    const onPlaceOrderHandler = () => {
        setIsLoading(true)
      const order: any = {
          cart,
          userInfo: {
              ...personalInfo,
              state: {
                  _id: personalInfo.state.value,
                  name: personalInfo.state.label
              }
          },
          totalAmount: getTotalPrice() - discount,
          paymentMethod,
      }
      if (getCurrentUser()) {
          order.user = getCurrentUser()._id
      }

      if (gift) {
          order.gift = gift._id
      }
      if (coupon) {
          order.coupon = coupon._id
      }
      console.log(order)
      createOrder(order)
          .then((res) => {
              successNotify(res.data.message)
              removeCart()
              removeUserInfo()
              setIsLoading(false)
              navigate(`/thankyou/${res.data.orderId}`)
          })
          .catch((e) => {
              errorNotify(e.response.data.message);
              setIsLoading(false)
          })
    }


    return (
        <div>
            <div className='Address_delivery_container'>
                <h6>Address Delivery</h6>
                <p>Address: {personalInfo.address}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone Number: {personalInfo.phoneNumber}</p>
                <button className='shopping' onClick={() => navigate("/address-data")}>CHANGE ADDRESS</button>
                <div className='total_cost'>
                    <div>
                        <span>Total Cost</span>
                    </div>
                    <div>
            <span>
              <b>$ {getTotalPrice()}</b>
            </span>
                    </div>
                </div>

                <div className='gift_coupons_container btns_container'>
                    <Form onSubmit={onGiftSubmit}>
                        <Form.Group className="mb-3">
                            <label>Enter E-gift</label>
                            <Form.Control value={giftCode} onChange={(e) => setGiftCode(e.target.value)}
                                          type="text" required placeholder="Enter E-gift"/>
                        </Form.Group>
                        {
                            !isLoading ?
                                <button className='proceed_step'>Activate</button>
                                : (
                                    <div className="text-center">
                                        <Spinner animation={"border"}/>
                                    </div>
                                )
                        }

                    </Form>
                    <Form onSubmit={onCouponSubmit}>
                        <Form.Group className="mb-3">
                            <label>Enter Coupons</label>
                            <Form.Control value={couponCode} required onChange={(e) => setCouponCode(e.target.value)}
                                          type="text" placeholder="Enter coupon code"/>
                        </Form.Group>
                        {
                            !isLoading ?
                                <button className='proceed_step'>Activate</button>
                                : (
                                    <div className="text-center">
                                        <Spinner animation={"border"}/>
                                    </div>
                                )
                        }
                    </Form>
                </div>

                <div className='total_cost'>
                    <div>
                        <span>Discount</span>
                    </div>
                    <div>
            <span>
              <b>$ {discount}</b>
            </span>
                    </div>
                </div>


                <div className='total_cost'>
                    <div>
                        <span>Toal</span>
                    </div>
                    <div>
            <span>
              <b>$ {getTotalPrice() - discount}</b>
            </span>
                    </div>
                </div>


            </div>
            <div className='btns_container'>
                <div>
                    <button className='shopping'>CONTINUE SHOPPING</button>
                </div>

                {
                    !isLoading ?
                        (
                            <div>
                                <button className='proceed_step' onClick={onPlaceOrderHandler}>PLACE ORDER</button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <Spinner animation={"border"}/>
                            </div>
                        )
                }
            </div>
        </div>
    )
}
export default AddressDeliveryMethod
