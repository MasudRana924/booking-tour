import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGoogle, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <Container fluid className="bg-white mt-5">
            <Row xs={2} md={3}>
                <Col>
                    <h4 className="text-secondary">Explore Us</h4>
                    <FontAwesomeIcon icon={faFacebookSquare} className="fb-icon mt-3" />
                    <FontAwesomeIcon icon={faInstagramSquare} className="insta-icon ms-3 mt-3" />
                    <FontAwesomeIcon icon={faYoutubeSquare} className="youtube-icon ms-3 mt-3" />
                    <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
                </Col>
                <Col>
                    <h4 className="text-secondary">Payment Method</h4>
                    <Link className="anchor text-secondary me-1">Visa Card</Link  >


                    <Link className="anchor text-secondary">Master Card</Link  >
                    <br />

                    <Link className="anchor text-secondary me-1">Paypal</Link > 
                    <Link className="anchor text-secondary">Bkash</Link >
                </Col>
                <Col>
                    <h4 className="text-secondary">Let Us Help You</h4>
                    <Link className="anchor text-secondary">Your Account </Link >
                    <br />
                    <Link className="anchor text-secondary">Your Query </Link  >
                    <br />
                    <Link className="anchor text-secondary">Help Center </Link  >
                </Col>

            </Row>

        </Container>
    );
};

export default Footer;