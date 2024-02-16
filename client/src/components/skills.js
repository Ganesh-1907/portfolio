import React from "react";
import Card from 'react-bootstrap/Card';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import {  FaCode } from 'react-icons/fa'; 
// import { FaReact } from 'react-icons/fa'; 
// import { FaNodeJs } from 'react-icons/fa';
// import { FaDatabase } from 'react-icons/fa';
import { FaReact,FaLaptopCode,FaCube, FaHtml5,FaTools, FaCss3Alt, FaAndroid  ,FaJsSquare, FaNodeJs, FaDatabase, FaGithub, FaGitAlt, FaCode } from 'react-icons/fa';

function Skills(){
    return(
        <>
        <div className="container" id="about">
        <h1 className="title"><FontAwesomeIcon icon={faUser} /> SKILLS</h1>
        <div className="d-flex flex-wrap justify-content-around">
        <Card className="about-card" style={{width:'18rem',height:"15rem"}}>
            <Card.Body>
                <Card.Title style={{color:"green",fontSize:"30px"}}><FaLaptopCode/></Card.Title><br/>
              <Card.Title style={{color:"whitesmoke"}}>Programming</Card.Title>
              <Card.Text >
                <ul>
                    Java , C , Python , R <br/>
                     HTML , CSS <br/>
                     Java Script , Kotlin
                    
                </ul>
              </Card.Text>
            
            </Card.Body>
          </Card>

          <Card className="about-card" style={{width:'18rem',height:"15rem"}}>
            <Card.Body>
            <Card.Title style={{color:"green",fontSize:"30px"}}><FaCube/></Card.Title><br/>

              <Card.Title style={{color:"whitesmoke"}}>Frame Works</Card.Title>
              <Card.Text >
                <ul>
                    <FaReact/> React.js<br/>
                    <FaNodeJs/> Node.js
                </ul>
              </Card.Text>
             
            </Card.Body>
          </Card>

          <Card className="about-card" style={{width:'18rem',height:"15rem"}}>
            <Card.Body>
            <Card.Title style={{color:"green",fontSize:"30px"}}><FaDatabase/></Card.Title><br/>
              <Card.Title style={{color:"whitesmoke"}}> Databases</Card.Title>
              <Card.Text >
                <ul>
                    <FaDatabase/> MonogDB
                </ul>
              </Card.Text>
              
            </Card.Body>
          </Card>

          <Card className="about-card" style={{width:'18rem',height:"15rem"}}>
            <Card.Body>            
                <Card.Title style={{color:"green",fontSize:"30px"}}><FaTools/></Card.Title><br/>

              <Card.Title style={{color:"whitesmoke"}}> Developer Tools</Card.Title>
              <Card.Text >
                <ul>
                    <FaCode /> Visual Studio <br/>
                    <FaAndroid/> Android Studio <br/>
                    <FaGithub /> Git & Github
                </ul>
              </Card.Text>
              
            </Card.Body>
          </Card>



          
        </div>
      </div>
        </>
    )
}
export default Skills;