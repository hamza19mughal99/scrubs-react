import React, {useEffect, useState} from 'react'
import {Col, Container, Row, Spinner} from 'react-bootstrap'
import Product from './Product/Product'
import ProductType from './ProductType/ProductType'
import {AiOutlineHome} from 'react-icons/ai'
import './Shop.scss'
import Banner from "../../../Components/Banner/Banner";
import {getAllCategories, getAllColors, getAllProducts} from "../../../api/product";

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null)
    const [page,setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedSize, setSelectedSize] = useState<any>(null)
    const [selectedCategory, setSelectedCategory] = useState<string[]>([])
    const [category, setCategory] = useState<any[]>([]);
    const [productCount, setProductCount] = useState(0)
    const [color, setColor] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getAllProducts({
            categories: selectedCategory,
            size: selectedSize,
            color: selectedColor
        }, page)
            .then((res) => {
                setProduct(res.data.data)
                setIsLoading(false)
                setProductCount(res.data.count)
            })
    }, [selectedColor, selectedCategory, selectedSize, page])


    useEffect(() => {
        setIsLoading(true)
        getAllCategories()
            .then((res) => {
                setCategory(res.data.map((data: any) => {
                    return {
                        ...data,
                        isChecked: false
                    }
                }))
                setIsLoading(false)
            })
        getAllColors()
            .then((res) => {
                setColor(res.data)
                setIsLoading(false)
            })
    }, [])

    return (
        <React.Fragment>
            <Banner heading={'SHOP'} cssClass={'shop_main'}/>
            <Container>
                <span className='home'><AiOutlineHome className='home_icon'/> / All Products</span>
                {
                    !isLoading ?
                        <Row>
                            <Col md={3}>
                                <ProductType
                                    color={color}
                                    category={category}
                                    setCategory={setCategory}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                    selectedSize={selectedSize}
                                    setSelectedSize={setSelectedSize}
                                    setSelectedColor={setSelectedColor}
                                    selectedColor={selectedColor}
                                />
                            </Col>
                            <Col md={9}>
                                <Product productCount={productCount} product={product} page={page} setPage={setPage}/>
                            </Col>

                        </Row>
                        : (
                            <div className={"text-center"}>
                                <Spinner animation={"border"}/>
                            </div>
                        )
                }
            </Container>

        </React.Fragment>
    )
}

export default Shop
