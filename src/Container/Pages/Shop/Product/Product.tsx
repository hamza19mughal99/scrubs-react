import React,{useState} from 'react';
import {Card, Container, Row, Col, Spinner} from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import './Product.scss';
import Pagination from '../../../../Components/Pagination/Pagination';
import {useNavigate} from 'react-router-dom'
import {PAGINATION_LIMIT} from "../../../../utils/helper";
import {FiHeart} from "react-icons/fi";


const Product: React.FC<any> = ({ product, page, setPage, productCount }) => {
    const navigate = useNavigate()

    const  [toggleHeart, setToggleHeart] = useState(false)

    const changeColor = () => {
        setToggleHeart(!toggleHeart)
    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='picture_container'>
                            { product.length > 0 ? (
                                product.map((data: any) => {
                                    return (
                                        <div key={data._id} className="mb-3 cursor_pointer">
                                            <Card>
                                                <Card.Img variant="top" src={data.images[0].avatar} />
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
                                                <Card.Body className={"text-center"}>
                                                    <Card.Title>
                                                        {`${data.name.slice(0, 30)}...`}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        $ {data.price}
                                                    </Card.Text>
                                                    <div className='text-center'>
                                                        <button onClick={()=>navigate(`/shop-description/${data._id}`)}>View More</button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="text-center">
                                    <p>No Product Found</p>
                                </div>
                            )}
                        </div>
                        <Pagination page={page} totalPage={Math.ceil(productCount / PAGINATION_LIMIT)} setPage={setPage}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Product

