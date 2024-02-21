import React from "react";
import Navbar from "./navbar";
import Card from 'react-bootstrap/Card';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import '../styles/about.css'; // Import your CSS file

function Experience() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="container" id="experience">
        <h1 className="title"><FontAwesomeIcon icon={faUser} /> EXPERIENCE</h1>
        <div className="d-flex flex-wrap justify-content-start">
          <Card className="about-card">
            <Card.Body>
              <Card.Title style={{ color: "white" }}>AuxDynamics</Card.Title>
              <Card.Subtitle  style={{ color: "white" }}>project intern</Card.Subtitle>
              <br/>
              <Card.Text>
              Developed a responsive website facilitating secure transactions for the sale and purchase of NFTs, leveraging Hedera services in conjunction with Hashpack wallet integration
              </Card.Text>
              <Card.Link href="#" style={{ color: 'white' }}></Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Experience;
