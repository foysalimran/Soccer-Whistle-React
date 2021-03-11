import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer-wrapper pt-3 pb-3 text-center bg-light">
            <Container>
                <Row>
                    <Col>
                        <p className="m-0">&copy; {new Date().getFullYear()} All right reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;