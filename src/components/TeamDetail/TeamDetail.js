import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons'
import './TeamDetail.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
const TeamDetail = () => {
  const idLeague = useParams();
  const [league, setLeague] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague.idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, []);
  const {
    strFanart1,
    strBadge,
    strLeague,
    dateFirstEvent,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strYoutube,
  } = league;
  return (
      
    <>
      <header style={{backgroundImage:`url(${strFanart1})`}} className='team-detail-header text-center'>
        <Container>
          <Row>
            <Col>
              <img src={strBadge} />
            </Col>
          </Row>
        </Container>
      </header>

      <div className='team-wrapper'>
        <Container>
          <Row>
            <Col>
              <div className='league-info bg-success text-light p-3 p-lg-5 p-md-5 rounded mb-3 mb-lg-5 mb-md-5'>
                <Row>
                  <Col md='7'>
                    <h3>{strLeague}</h3>
                    <ul className='league-info-list'>
                      <li><FontAwesomeIcon icon={faClock} /> Founded: {dateFirstEvent}</li>
                      <li><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</li>
                      <li><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</li>
                      <li><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</li>
                    </ul>
                  </Col>
                  <Col md='5'>
                    <img
                      className='img-fluid'
                      src={strGender == 'Male' ? male : female}
                      alt={strLeague}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
                <div className="team-content">
                    <p>{strDescriptionEN}</p>

                    <div className="social-media mt-5 d-flex align-items-center justify-content-center">
                        <a className="twitter-icon" target="_blank" href={'https://' +  strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="facebook-icon" target="_blank" href={'https://' +  strFacebook}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a className="youtube-icon" target="_blank" href={'https://' +  strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>

                    </div>
                </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
};

export default TeamDetail;
