import React from 'react';
import { Col } from 'react-bootstrap';
import './City.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faHotel } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const City = (props) => {
    const { img, name } = props.city

    return (
        <Col className="mt-5">
            <div className="card-style">
                <img src={img} className="images" alt="" />
                <div>
                    <p className="text-secondary">{name}</p>
                </div>
                <div className="d-flex pb-5 icons ms-1 me-1">
                    <div >
                        <FontAwesomeIcon icon={faLocationArrow} className="icon" />
                        <Link to="/dhaka" className="link"> all places</Link>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHotel} className="icon" />
                        <Link to="/dhakahotel" className="link"> all hotels</Link>

                    </div>
                </div>
            </div>
        </Col>
    );
};

export default City;