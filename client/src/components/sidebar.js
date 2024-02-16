import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button } from '@mui/material';
import '../components/sidebar.css';

function ButtonComponent({isProjectsInView}) {
  return (
    <div className='sidebar' >
      <ul>
        <li><Link className='sidebar-link' smooth to='/#home'><Button>Home</Button></Link></li>
        <li><Link className='sidebar-link' smooth to='/#about'><Button style={{ backgroundColor: isProjectsInView ? 'green' : <br/> }}>About</Button></Link></li>
        <li><Link className='sidebar-link' smooth to='/#experience'><Button>Experience</Button></Link></li>
        <li><Link className='sidebar-link' smooth to='/#projects'><Button style={{ backgroundColor: isProjectsInView ? 'green' : <br/> }}>Projects</Button></Link></li>
        <li><Link className='sidebar-link' smooth to='/#education'><Button>Education</Button></Link></li>
        <li><Link className='sidebar-link' smooth to='/#internship'><Button>Internships</Button></Link></li>
      </ul>
    </div>
  );
}

export default ButtonComponent;
