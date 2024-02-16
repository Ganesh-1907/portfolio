import React, { useState } from "react";
import Navbar from "./navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

function Projects() {
  const [category, setCategory] = useState('web'); // State to track selected category

  return (
    <>
      <div className="container" id="projects" style={{ color: 'blue' }}>
        <h1 className="title"><TipsAndUpdatesIcon/> PROJECTS</h1>

        <div>
          <Button variant="outline-primary" onClick={() => setCategory('web')}>Web</Button>{' '}
          <Button variant="outline-primary" onClick={() => setCategory('java')}>Java</Button>
          <Button variant="outline-primary" onClick={() => setCategory('ml')}>ML</Button>
        </div>
        <br/><br/>
        
        <div className="d-flex flex-wrap justify-content-around">
          {(category === 'web' || category === 'all') && (
            <>
              <Card className="about-card">
                <Card.Body>
                  <Card.Title style={{color:"white"}}>PAIE-CELL WEBSITE</Card.Title><br/>
                  <Card.Text>
                    A web application for PAIE-CELL ( People Association for Inner Engineering-cell ). which is a Club in SRKREC
                  </Card.Text>
                  <Card.Link href="https://paie-cell.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>

              <Card className="about-card">
                <Card.Body>
                  <Card.Title style={{color:"white"}}>CSE-LIBRARY WEBSITE</Card.Title><br/>
                  <Card.Text>
                    A web application for CSE-dept Library designed to Automate the process  and provide valuable 
                    resources and services to the CSE community.
                  </Card.Text>
                  <Card.Link href="https://cse-library.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>

              <Card className="about-card">
                <Card.Body>
                  <Card.Title style={{color:"white"}}>CAR-RENTAL WEBSITE</Card.Title><br/>
                  <Card.Text>
                    Developing a user-friendly car rental website to streamline booking, check-in, 
                    and check-out processes. 
                  </Card.Text>
                  <Card.Link href="https://gs19carrentals.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>

              <Card className="about-card">
                <Card.Body>
                  <Card.Title>NFT MARKET PLACE</Card.Title>
                  <Card.Text>
                    A web application Introduced to offering a seamless experience for creating, buying, and transferring NFT tokens using Hashpack wallet.
                  </Card.Text>
                  <Card.Link href="https://hederanft.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>

            </>
          )}

          {(category === 'ml' || category === 'all') && (
            <>
              <Card className="about-card">
                <Card.Body>
                  <Card.Title style={{color:"white"}}>CAR-RENTAL WEBSITE</Card.Title><br/>
                  <Card.Text>
                    Developing a user-friendly car rental website to streamline booking, check-in, 
                    and check-out processes. 
                  </Card.Text>
                  <Card.Link href="https://gs19carrentals.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>

              
            </>
          )}

          
{(category === 'java' || category === 'all') && (
            <>
              <Card className="about-card">
                <Card.Body>
                  <Card.Title style={{color:"white"}}>Tour-Planning System</Card.Title><br/>
                  <Card.Text>
                    Developing a user-friendly car rental website to streamline booking, check-in, 
                    and check-out processes. 
                  </Card.Text>
                  <Card.Link href="https://gs19carrentals.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>

              
            </>
          )}


        </div>
      </div>
    </>
  );
}

export default Projects;
