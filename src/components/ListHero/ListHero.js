import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ListHero.css'
const ListHero = () => {
    return (
        <section className="list-hero text-center">
            <Container>
                <Row>
                    <Col>
                        <h2 className="m-0">Soccer Whistle</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ListHero;