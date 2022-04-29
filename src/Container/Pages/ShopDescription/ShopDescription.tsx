import React, {useEffect, useState} from 'react'
import {Container, Col, Row, Spinner} from 'react-bootstrap'
import ProductImage from './ProductImage/ProductImage'
import ProductForm from './ProductForm/ProductForm'
import { AiOutlineHome } from 'react-icons/ai'
import Banner from "../../../Components/Banner/Banner";
import {getProductById} from "../../../api/product";
import { useParams } from "react-router-dom";


const ShopDescription = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        setIsLoading(true)
        getProductById(id!)
            .then((res) => {
                setIsLoading(false);
                setProduct(res.data);
            })
    }, [])
    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'} />
            <Container>
                <span className='home'><AiOutlineHome className='home_icon' /> / Men's Top / T-Shirts</span>
                {
                    !isLoading && product ? (
                        <Row>
                            <Col md={6}>
                                <ProductImage images={product.images} />
                            </Col>

                            <Col md={6}>
                                <ProductForm product={product} />
                            </Col>
                        </Row>
                    ) : (
                        <div className="text-center">
                            <Spinner animation={"border"}/>
                        </div>
                    )
                }
            </Container>

        </React.Fragment>
    )
}

export default ShopDescription
