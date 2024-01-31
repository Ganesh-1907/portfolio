import * as React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      {/* <Route path='/navbar' element={<Navbar/>}></Route> */}

    </Routes>
    </BrowserRouter>
        </ThemeProvider>
    </>
  );
}

export default App;
