import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DhakaHotel from '../DhakaHotel/DhakaHotel';

const DhakaHotels = () => {
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        fetch('./dhakahotels.JSON')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    return (
        <Container fluid className=" mt-5 ">
        <div>
            <p className=" text-start text-secondary fs-6  heading">Explore Hotels</p>
            <Row xs={1} md={3} >

                {
                    hotels.map(hotel => <DhakaHotel
                        key={hotel.id}
                   hotel={hotel}

                    > </DhakaHotel>)
                }
            </Row>
        </div>
    </Container>
    );
};

export default DhakaHotels;