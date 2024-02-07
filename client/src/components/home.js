import React from "react";
import Navbar from "./navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from "./sidebar";
import Projects from "./projects";
import About from "./about";
import Internships from "./internships";
import Education from "./education";
import '../components/home.css';
import { Button } from "@mui/base";

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home-container">
      <div className="left">
       <Sidebar/>
      </div>
      <div className="right">
        <div>
          <div className="image-container">
            <img className="profile-image" src="https://tse1.mm.bing.net/th?id=OIP.MJp3QKUIQkmwXPc9lU8mTAHaLH&pid=Api&P=0&h=220" />
          </div>
          <div>
            <Button>HEY I AM GANESH</Button>
          </div>
        </div>
        <Projects/>
        <About/>
        <Internships/>
        <Education/>
      </div>
    </div>
   
    </>
  );
};

export default Home;
