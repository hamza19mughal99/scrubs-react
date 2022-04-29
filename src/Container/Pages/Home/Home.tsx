import React from 'react';
import HomeSlider from "./HomeSlider/HomeSlider";
import Products from "./Products/Product";
import CoverImage from '../../../assets/img/cover_image1.png';
import gridImage from "../../../assets/img/grid-image1.jpg";
import gridImage2 from "../../../assets/img/grid-image2.jpg";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Brand from "../../../Components/Brand/Brand";
import UploadPhoto from "./UploadPhoto/UploadPhoto";
import Offer from "../../../Components/Offer/Offer";
import SliderTestimonial from "../../../Components/SliderTestimonial/SliderTestimonial";
import "./Home.scss";

const Home = () => {
    return (
        <React.Fragment>
            <HomeSlider />
            <div className='cover_section_container'>
                <img src={CoverImage} className="img-fluid" alt={'cover_img'} />
            </div>
            <Products />
            <div className='group_container'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='collection_img'>
                                <img className='img-fluid' src={gridImage} alt={'img'}/>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='collection_desc'>
                                <h3> WOMEN'S COLLECTION </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam hic, ipsum, praesentium assumenda maiores beatae facilis tenetur modi ea sequi, deleniti dolores soluta. Maxime in iure accusantium voluptas ex.</p>
                                <Button>View Collection</Button>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-4'}>
                            <div className='collection_desc'>
                                <h3>MEN'S COLLECTION</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam hic, ipsum, praesentium assumenda maiores beatae facilis tenetur modi ea sequi, deleniti dolores soluta. Maxime in iure accusantium voluptas ex.</p>
                                <Button>View Collection</Button>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-4'}>
                            <div className='collection_img'>
                                <img className='img-fluid' src={gridImage2} alt={'img'} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={'group_look'}>
                <div className='Group_bg_image'>
                    <div className='mt-2 w-50 text-center'>
                        <h1> Make Your Group Look and Feel their Very Best </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum saepe iure nostrum quod debitis et dolores, quasi quam qui expedita, adipisci tempore voluptatem ea illo labore beatae ipsam fugit eaque!</p>
                        <Button> Contact us </Button>
                    </div>
                </div>
            </div>

            <Brand />
            <UploadPhoto />
            <Offer />
            <SliderTestimonial />
        </React.Fragment>
    );
};
export default Home;