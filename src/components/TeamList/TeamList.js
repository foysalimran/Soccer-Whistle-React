import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './TeamList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
const TeamList = (props) => {
    const {strLeague, strSport, idLeague} = props.league;
    let history = useHistory()
    const handleClick = (idLeague) => {
        history.push(`/league/${idLeague}`)
    }
    
    return (
    <Col lg="4" md="6" xs>
        <div className="single-team text-center">
            <img className="img-fluid" src="http://www.placehold.it/240x100" alt=""/>
            <h3>{strLeague}</h3>
            <p>Sports type: {strSport}</p>
            <Button onClick={() => handleClick(idLeague)} variant="success" size="lg">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
        </div>
    </Col>


    );
};

export default TeamList;