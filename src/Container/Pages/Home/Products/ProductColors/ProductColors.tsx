import React from 'react';
import {Container} from 'react-bootstrap';
import {productColors} from "../../../../../hooks/admin"

import "./ProductColors.scss";

const ProductColors = () => {
    
    return (
        <Container className="shop_container">
            <h3> SHOP BY COLOR </h3>
            <div className='inner_container'>
                {
                    productColors.map((color, index) => (
                        <div className='colors_section'>
                            <img src={color.img} alt={color.name} width={50} height={50}/>
                            <p className='mt-3'>{color.name}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};
export default ProductColors;