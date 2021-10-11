import React from 'react';
import { Container } from 'react-bootstrap';
import  img from '../Images/01.jpg'
import  img2  from '../Images/02.jpg'
import  img3  from '../Images/03.jpg'
import img4  from '../Images/04.jpg'
import  img5  from '../Images/05.jpg'
import  img6  from '../Images/06.jpg'
import  img7  from '../Images/07.jpg'
import  img8  from '../Images/08.jpg'
import  img9  from '../Images/09.jpg'
import './Guide.css'

const Guide = () => {
    return (
        <Container fluid className="w-50 mx-auto mt-5">
            <h4 className="text-secondary fs-2">Our Guides</h4>
            <div className="mt-5 ">
                <img src={img} alt=""  className="image mt-3"/>
                <img src={img2} alt="" className="image ms-3 mt-3"/>
                <img src={img3} alt="" className="image ms-3 mt-3"/>
            </div>
            <div className="mt-3">
                <img src={img4} alt="" className="image mt-3"/>
                <img src={img5} alt="" className="image ms-3 mt-3"/>
                <img src={img6} alt="" className="image ms-3 mt-3"/>
            </div>
            <div className="mt-3">
                <img src={img7} alt="" className="image mt-3"/>
                <img src={img8} alt="" className="image ms-3 mt-3"/>
                <img src={img9} alt="" className="image ms-3 mt-3"/>
            </div>

        </Container>
    );
};

export default Guide;