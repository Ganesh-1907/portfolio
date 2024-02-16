import React from "react";
import Navbar from "./navbar";
import Card from 'react-bootstrap/Card';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import '../styles/about.css'; // Import your CSS file

function About() {
  return (
    <>
      {/* <Navbar/> */}
      <div className="container" id="about">
        <h1 className="title"><FontAwesomeIcon icon={faUser} /> ABOUT ME</h1>
        <div className="d-flex flex-wrap justify-content-start">
          <Card className="about-card">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ color: "blue" }}>Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#" style={{ color: 'white' }}>Card Link</Card.Link>
              <Card.Link href="#" style={{ color: 'white' }}>Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default About;
