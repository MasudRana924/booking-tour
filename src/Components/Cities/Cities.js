import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import City from '../City/City';
import './Cities.css'

const Cities = () => {
    const [cities, setCities] = useState([])
    //  const [searchValue,SetSearch]=useState([])
    useEffect(() => {
        fetch('./cities.JSON')
            .then(res => res.json())
            .then(data => {
              
                setCities(data.slice(0,8))
                
            })
    }, [])
    // const handleSearch = event => {
    //     const searchText = event.target.value;

    //     const matchedCity = cities.filter(city => city.name.toLowerCase().includes(searchText.toLowerCase()));

    //     SetSearch(matchedCity);
    // }
    return (
        <Container fluid className=" mt-5">
            <div  className="search ">
                <input   className="w-75 text-center  text-white " type="search" placeholder=" search a place here" />
            </div>
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