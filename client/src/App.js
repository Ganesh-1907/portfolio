import * as React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Projects from './components/projects';
import About from './components/about';
import Internships from './components/internships';
import Education from './components/education';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
    
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      {/* <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/internship' element={<Internships/>}></Route>
      <Route path='/education' element={<Education/>}></Route> */}
      {/* <Route path='/navbar' element={<Navbar/>}></Route> */}

    </Routes>
    </BrowserRouter>
        </ThemeProvider>
    </>
  );
}

export default App;
