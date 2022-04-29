import React, {useEffect, useState} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import SelectionMethod from './SelectionMethod/SelectionMethod'
import AddressDeliveryMethod from './AddressDeliveryMethod/AddressDeliveryMethod'
import Banner from "../../../Components/Banner/Banner";
import {getDecryptedCartItems, getDecryptedCustomerInfo} from "../../../utils/helper";

const PaymentMethod = () => {
    const [personalInfo, setPersonalInfo] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [cart, setCart] = useState(null);

    useEffect(() => {
        setCart(getDecryptedCartItems);
        setPersonalInfo(getDecryptedCustomerInfo);
    }, [])


    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'} />
            <Container>
                {
                    cart && personalInfo ? (
                        <Row className='mt-3'>
                            <Col md={8}>
                                <SelectionMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} cart={cart}/>
                            </Col>

                            <Col md={4}>
                                <AddressDeliveryMethod paymentMethod={paymentMethod} cart={cart} personalInfo={personalInfo}/>
                            </Col>
                        </Row>
                    ) : null
                }

            </Container>

        </React.Fragment>
    )
}

export default PaymentMethod
