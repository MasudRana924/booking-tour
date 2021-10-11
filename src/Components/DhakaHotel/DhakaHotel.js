import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const DhakaHotel = (props) => {
    const { img, name, desc } = props.hotel
    const history = useHistory();
    const handleBook = () => {
        history.push('/booking')
    }
    return (
        <Col className="mt-5">
            <div className="card-style">
                <img src={img} className="images" alt="" />
                <div>
                    <p className="text-secondary fs-4">{name}</p>
                    <p className="text-start fs-6">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className=" me-1" />

                        {desc}</p>
                    <button onClick={handleBook} className="btn btn-warning w-100">Book Now</button>
                </div>

            </div>
        </Col>
    );
};

export default DhakaHotel;