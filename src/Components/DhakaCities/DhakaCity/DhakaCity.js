import React from 'react';
import { Col } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import './DhakaCity.css'

const DhakaCity = (props) => {
    const { img,name,desc } = props.city
    const history = useHistory();
    const handleGuide = () => {
        history.push('/booking')
    }
    return (
        <Col className="mt-5">
            <div className="card-style-city">
                <img src={img} className="images" alt="" />
                <button className="button mt-3 w-75 mx-auto text-white" onClick={handleGuide}>Take a Guide</button>
                <div>
                    <p className="text-secondary ">{name}</p>
                    <p className="text-start">{desc}...<Link className="text-decoration-none"> wikipedia</Link></p>
                </div>
              
            </div>
        </Col>
    );
};

export default DhakaCity;