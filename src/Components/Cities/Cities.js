import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import City from '../City/City';
import './Cities.css'

const Cities = () => {
    const [cities, setCities] = useState([])
    useEffect(() => {
        fetch('./cities.JSON')
            .then(res => res.json())
            .then(data => setCities(data))
    }, [])
    return (
        <Container fluid className=" mt-5">
            <div>
                <p className=" text-start text-secondary fs-6  heading">Explore Bangladesh</p>
                <Row xs={1} md={4} >

                    {
                        cities.map(city => <City
                            key={city.id}
                            city={city}

                        > </City>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Cities;