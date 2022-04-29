import React from 'react';
import {Button} from "react-bootstrap";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import VisaImg from "../../../assets/img/visa_img.png";
import MasterImg from "../../../assets/img/master_img.png";
import WesternImg from "../../../assets/img/western_union.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <React.Fragment>
            <div className={'footer'}>
            <h1>INBOX ME!</h1>
            <p> Sign up to our newsletter and we’ll keep you up to date with the latest arrivals </p>

            <div className={'footer_form'}>
                <form>
                    <input placeholder={'Enter Email Address'} type="email"/>
                    <Button>Sign Up</Button>
                </form>
            </div>
            <div className={'hr_tag'} />

            <div className={'footer_logo'}>
                <h2>LOGO</h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum <br /> is simply dummy text of the printing and typesetting industry. </p>
                <ul>
                    <li onClick={() => window.location.href='/order'}>ORDER STATUS</li>
                    <li onClick={() => window.location.href='/about'}> ABOUT US </li>
                    <li onClick={() => window.location.href='/'}>PRODUCT </li>
                    <li onClick={() => window.location.href='/'}>FAQ </li>
                    <li onClick={() => window.location.href='/contact'}> CONTACT US </li>
                    <li onClick={() => window.location.href='/policy'}> RETURN POLICY </li>
                    <li onClick={() => window.location.href='/terms-condition'}> TERMS </li>
                    <li onClick={() => window.location.href='/careers'}>CAREERS </li>
                </ul>
            </div>

            <div className={'footer_links'}>
                <h2>FOLLOW US</h2>
                <div className={'social_icons'}> <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaInstagram /> </div>
            </div>
            <div className={'hr_tag'} />
        </div>
            <div className={'all_rights'}>
            <p>© 2021 Hands of Hope. All Rights Reserved.</p>
            <div className={'payment_method'}>
                <p>Payment method</p>
                <img src={VisaImg} alt={'visa'} />
                <img src={MasterImg} alt={'visa'} />
                <img src={WesternImg} alt={'visa'} />
            </div>
        </div>
        </React.Fragment>
    );
};
export default Footer;