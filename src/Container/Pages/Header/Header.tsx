import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom"
import { BiSearch } from 'react-icons/bi';
import {HiOutlineShoppingBag} from "react-icons/hi";
import {AiOutlineHeart} from "react-icons/ai";
import "./Header.scss";
import {getCurrentUser, getDecryptedCartItems, removeToken} from "../../../utils/helper";

const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (getCurrentUser()) {
            setIsAuth(true)
        }
    }, [])

    const onLogOutHandler = () => {
        removeToken()
        setIsAuth(false)
    }

    return (
        <React.Fragment>
            <div className={'header'}>
                <Container>
                    <Navbar expand="lg">
                        <Container>
                            <p>FREE SHIPPING / RETURNS ON ORDERS OVER $100 WITHIN US</p>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-end'}>
                                <Nav className="mr-auto">
                                    <Nav.Link> <Link to={'/about'}> ABOUT US </Link> </Nav.Link>
                                    <Nav.Link> <Link to={'/contact'}> CONTACT US </Link></Nav.Link>
                                    <Nav.Link> <Link to={'/shop'}> SHOP </Link></Nav.Link>
                                    {
                                        !isAuth ? (
                                            <Nav.Link> <Link to={'/login'}> LOG IN </Link></Nav.Link>
                                        ) : (
                                            <React.Fragment>
                                                <Nav.Link onClick={onLogOutHandler}> LOG OUT</Nav.Link>
                                                <Nav.Link> <Link to={'/customer/profile'}> DASHBOARD </Link></Nav.Link>
                                            </React.Fragment>
                                        )
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
            <Container>
                <div className={'logo_section'}>
                    <h2><Link to='/'> LOGO </Link></h2>
                    <div className={'icon_section d-flex'}>
                        <BiSearch />
                        <div className={"addtocard_container"}>
                            <Link to="/order-summary">
                                <HiOutlineShoppingBag />
                                <span>{getDecryptedCartItems().length}</span>
                            </Link>

                            <Link className={'ml-2'} to="/wishlist">
                                <AiOutlineHeart />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <hr className={'divider'} />
            <div className={'collection_section'}>
                <Container>
                    <Navbar style={{overflow: 'hidden'}} expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav1" />
                            <Navbar.Collapse id="basic-navbar-nav1" className={'justify-content-center'}>
                                <Nav className="mr-auto">
                                    <Nav.Link>WOMEN</Nav.Link>
                                    <Nav.Link>MEN</Nav.Link>
                                    <Nav.Link>CLEARANCE</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default Header;
