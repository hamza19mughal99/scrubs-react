import React from 'react'
import {Container, Col, Row, Form, Button, Card} from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import './EditPages.scss'

const EditPages = () => {

    return (
        <div className='page_responsive'>
            <h3>Edit Pages</h3>
            <Container>
                <Row>
                    <Col md={9} className='mt-3'>
                        <div className='edit_page_container'>
                            <div>
                                <NavLink to={'/admin/edit-home'}> <Button type="submit" className='all_btns'> Home Page </Button> </NavLink>
                            </div>
                            <div>
                                <NavLink to={'/admin/edit-about'}> <Button type="submit" className='all_btns' >About Page</Button> </NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default EditPages
