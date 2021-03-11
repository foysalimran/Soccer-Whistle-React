import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found-wrapper text-center">
            <Container>
                <Row>
                    <Col>
                        <h1>404 not found</h1>
                        <p>Upppps. You entired a wrong URL what is not available in our site or there have a problem this this page. Instead you may visit our home page. </p>
                        <Button variant="success" size="lg" as={Link} to='/'>Home <FontAwesomeIcon icon={faHome} /> </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;