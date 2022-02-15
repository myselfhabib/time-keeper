import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="bnr-time">
                        <span className="p2">Find Your Dream Watch</span> <br />
                        <span className="p3"> On the leading <span className="p4">Marketplace</span></span> <br />
                        <span className="flw">for <span className="p4">luxury</span> watches</span> <br />
                        <button className="glow-on-hover3" type="button">Shop Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p className="p2">Find Your Dream Watch</p>
                        <p className="banner-tlt">A watch will make you feel confident and build your confidence.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p className="p2">Find Your Dream Watch</p>
                        <p className="banner-tlt">Watches give you a relationship with time</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;