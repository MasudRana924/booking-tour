import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DhakaCity from './DhakaCity/DhakaCity';

const DhakaCities = () => {
    const [cities, setCities] = useState([])
    useEffect(() => {
        fetch('./dhaka.JSON')
            .then(res => res.json())
            .then(data => setCities(data))
    }, [])
    return (
        <Container fluid className=" mt-5">
        <div>
            <p className=" text-start text-secondary fs-6  heading">Explore Dhaka</p>
            <Row xs={1} md={3} >

                {
                    cities.map(city => <DhakaCity
                        key={city.id}
                        city={city}

                    > </DhakaCity>)
                }
            </Row>
        </div>
    </Container>
    );
};

export default DhakaCities;