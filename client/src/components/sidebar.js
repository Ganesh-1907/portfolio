import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { motion } from 'framer-motion/dist/framer-motion';
import '../components/sidebar.css';
import { motion } from 'framer-motion';

// import logo from '../images/sam.jpg';
// import github from '../images/github.png';
// import instagram from '../images/instagram.png';
// import twitter from '../images/twitter.png';
// import linkedin from '../images/linkedin.png';
// import gmail from '../images/gmail.png';

export default function Sidebar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };
//   const iconList = [
//     {
//       component: github,
//       href: 'https://github.com/mittalsam98'
//     },
//     {
//       component: linkedin,
//       href: 'https://www.linkedin.com/in/sachin-mittal-476174158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoRhF2EUsQJ%2BygJpLEZb%2FFA%3D%3D'
//     },
//     {
//       component: twitter,
//       href: 'https://twitter.com/Sachin_Mittal98'
//     },
//     {
//       component: instagram,
//       href: 'https://www.instagram.com/decent_sachin.mittal'
//     },
//     {
//       component: gmail,
//       href: 'mailto:mittalsam98@gmail.com'
//     }
//   ];
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='sidebar'>
     
      <h1>
        <Link smooth to='/#start' className='h1_links'>
          Ganesh Bora
        </Link>
      </h1>
      <motion.div
        animate={{ y: [2, -2] }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        {/* <img src={logo} className='my-img' /> */}
      </motion.div>
      <p style={{ color: '#3f6823', fontWeight: 'bold' }} className='gmail'>
        <a
          href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL'
          rel='opener noreferrer'
          target='_blank'
          className='fa fa-envelope'
        ></a>
        &nbsp;ganesh1143@gmail.com
      </p>

      <ul className='sidebar-nav'>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#projects' className='links'>
            Projects
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#about' className='links'>
            About
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#internship' className='links'>
            Internships
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#education' className='links'>
            Education
          </Link>
        </li>
      </ul>

     
      <div
        style={{
          color: 'black',
          fontWeight: 'bold',
          paddingTop: '30%'
        }}
        className='tagtop'
      >
        Made with <a href='#' className='fa fa-heart heart'></a> by me.
      </div>
    </div>
  );
}
