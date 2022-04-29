import React from 'react'
import {Container, Col, Row, Card, Form,Button} from 'react-bootstrap'
import {rewardsData} from "../../../../hooks/customers"
import './Rewards.scss';


const GiftCard = () => {

    const onChangeHandler = (data: any) => {
        console.log(data)
    }

    return (
        <div className={'page_responsive'}>
            <h3>Rewards and Gift</h3>
            <div className="gift_container">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='total_balance'>
                            <span>
                                Total Balance: $90
                            </span>
                            </div>
                        </Col>

                        <Col md={6} className="mt-4">
                            <div className="dollar_spend_buy">
                            <span>
                                Rewards on Dollar spend
                            </span>
                            </div>
                        </Col>

                        <Col md={6} className="mt-4">
                            <div className="dollar_spend_buy">
                            <span>
                                Buy E-Gift Card
                            </span>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="total_rewards">
                            <span>
                                Total rewards: $10
                            </span>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='cards_container'>
                                {
                                    rewardsData.map((data: any) => (
                                        <div key={`default-${data.id}`} className="mb-3">
                                            <Card>
                                                <Form.Check
                                                    type='checkbox'
                                                    id={`default-${data.id}`}
                                                    onChange={() => onChangeHandler(data)}
                                                />
                                                <Card.Img className="img-fluid" variant="top" src={data.img} />
                                            </Card>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className= "buy_container">
                                <Button className='all_btns'>Buy</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default GiftCard