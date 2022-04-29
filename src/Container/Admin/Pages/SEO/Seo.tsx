import React, { useState } from 'react'
import './Seo.scss'
import { Container, Col, Row, Form } from "react-bootstrap";
import SEOForm from '../../../../Components/SeoForm/SeoForm';

const SEO = () => {
    const [pageValue, setPageValue] = useState('Home')
    return (
        <div className='page_responsive'>
            <h3>SEO</h3>
            <Container>
                <Row>
                    <Col md={9}>
                        <div className='seo_container'>
                            <Form.Select aria-label="Default select example" onChange={(e) => setPageValue(e.target.value)}>
                                <option hidden value={''}>Please select any page</option>
                                <option value="Home">Home</option>
                                <option value="AboutUs">AboutUs</option>
                                <option value="ContactUs">ContactUs</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className='mt-4'>
                            {pageValue ?
                                <SEOForm />
                                : null
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default SEO