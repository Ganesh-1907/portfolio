import React from "react";
import Card from 'react-bootstrap/Card';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import UniversityIcon from '@mui/icons-material/School';
import CollegeIcon from '@mui/icons-material/School';
import { RiSchoolFill } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';

function Education (){
    return(
    <>
    <div className="container" id="education">
    <h1 className="title"><AutoStoriesIcon/> EDUCATION </h1>
    <div className="d-flex flex-wrap justify-content-around">
    <Card className="about-card" style={{width:'20rem'}}>
    
            <Card.Body>
              <Card.Title style={{color:"whitesmoke"}}><FontAwesomeIcon icon={faGraduationCap} /> Bachelors in AIML</Card.Title><br/>
              <Card.Text >
              SRKR Engineering College <br/>
              Bhimavaram , AP , India 534204.
              </Card.Text>
              <Card.Text >
                Passing Year : june 2025 <br/>
                CGPA : 9.02
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card className="about-card" style={{width:'20rem'}}>
            <Card.Body>
              <Card.Title style={{color:"whitesmoke"}}><FontAwesomeIcon icon={faUniversity} /> Senior High School</Card.Title><br/>
              <Card.Text >
                NARAYANA Junior College <br/>
                Vishakapatnam , AP , India 534204.
              </Card.Text>
              <Card.Text >
                Passing Year : April 2021 <br/>
                Percentage : 96.4 %
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card className="about-card" style={{width:'20rem',marginBottom: '5rem'}}>
            <Card.Body>
              <Card.Title style={{color:"whitesmoke"}}><FontAwesomeIcon icon={faSchool} /> High School</Card.Title>
              <Card.Text >
                Vignan Vidya Niketan School <br/>
                Srikakulam , AP , India 534204.
              </Card.Text>
              <Card.Text >
                Passing Year : April 2019 <br/>
                GPA : 10.0
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
    </div>
    </>
    )
}   
export default Education;