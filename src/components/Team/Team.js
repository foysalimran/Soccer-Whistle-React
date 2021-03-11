import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamList from '../TeamList/TeamList';
import './Team.css'
const Team = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <div className="team-wrapper">
        <Container>
            <Row>
            {
                leagues.map((league) => (<TeamList key={league.idLeague} league={league} />))
            }
            </Row>
            </Container>
        </div>
    );
};

export default Team;