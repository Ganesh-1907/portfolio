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
import Crousel from "./crousel";
import Skills from "../components/skills.js"
const Home = () => {
  return (
    <>
      <div className="home-container" >
        <div className="left" style={{ backgroundColor: "black" }}>
          <Sidebar />
        </div>
        <div class="right">
          <div class="right-content-wrapper">
            <Navbar />
            <Crousel />
            <hr/>
            <About />
            <hr/>
            <Skills/>
            <hr/>
            <Projects />
            <hr/>
            <Internships />
            <hr/>
            <Education />
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
