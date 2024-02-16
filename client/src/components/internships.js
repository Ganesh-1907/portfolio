import React from "react";
import Card from 'react-bootstrap/Card';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


function Internships (){
    return(
    <>
    <div className="container" id="internship">
    <h1 className="title"><TrendingUpIcon/> INTERNSHIPS  </h1>
    <div className="d-flex flex-wrap justify-content-around">
      
    <Card className="about-card">
                <Card.Body>
                  <Card.Title style={{color:"white"}}>DSA JAVA</Card.Title><br/>
                  <Card.Text>
                    A web application for PAIE-CELL ( People Association for Inner Engineering-cell ). which is a Club in SRKREC
                  </Card.Text>
                  <Card.Link href="https://paie-cell.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>

              <Card className="about-card">
                <Card.Body>
                  <Card.Title style={{color:"white"}}>Machine Learning</Card.Title><br/>
                  <Card.Text>
                    A web application for PAIE-CELL ( People Association for Inner Engineering-cell ). which is a Club in SRKREC
                  </Card.Text>
                  <Card.Link href="https://paie-cell.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>

              <Card className="about-card">
                <Card.Body>
                  <Card.Title style={{color:"white"}}>Full Stack</Card.Title><br/>
                  <Card.Text>
                    A web application for PAIE-CELL ( People Association for Inner Engineering-cell ). which is a Club in SRKREC
                  </Card.Text>
                  <Card.Link href="https://paie-cell.vercel.app/" style={{ color: 'yellowgreen' }}>Project Details...</Card.Link>
                </Card.Body>
              </Card>


    </div>
    
          
    </div>
    </>
    )
}
export default Internships;