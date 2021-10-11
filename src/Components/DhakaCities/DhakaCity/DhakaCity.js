import React from 'react';
import { Col } from 'react-bootstrap';

const DhakaCity = (props) => {
    const { img,name,desc } = props.city
    return (
        <Col className="mt-5">
            <div className="card-style">
                <img src={img} className="images" alt="" />
                <div>
                    <p className="text-secondary">{name}</p>
                    <small>{desc}</small>
                </div>
              
            </div>
        </Col>
    );
};

export default DhakaCity;