import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <Container fluid  >
            <Carousel >
                <Carousel.Item interval={500}>
                    <img
                       className=" mx-auto d-block w-100  image"
                       src="https://i.pinimg.com/originals/4b/45/e1/4b45e1a05f2d3f1921fe055acacf5ddc.jpg"
                       alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block mx-auto w-100 image "
                        src="https://i.pinimg.com/originals/4b/45/e1/4b45e1a05f2d3f1921fe055acacf5ddc.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block mx-auto w-100 image"
                        src="https://blog.flyticket.com.bd/wp-content/uploads/2019/06/st-martin-island-1-1.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;