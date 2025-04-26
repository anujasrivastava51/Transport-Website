import React from 'react';
import './AboutUs.css';

import About from '../Home/HomeAboutUs/HomeAboutUs';
import BackGroundImage from '../../Components/BackGrounImage/BackgroundImg';
import OurTeam from '../../Components/OurTeam/OurTeam';
import GetInTouch from '../../Components/GetInTouch/GetInTouch';
import Footer from '../../Components/Footer/Footer';
import AboutUsPage from '../../Components/AboutUsPage/AboutUsPage';
import { useNavigate } from 'react-router-dom';


const AboutUs = () => {
  const navigate = useNavigate();
  const navigateToContactPage = ()=>{
    navigate('/Contact')
  }
  return (
    <>

      <div className='d-flex flex-column justify-content-center align-items-center about-bg-img'>
        <div className="d-flex flex-column justify-content-center align-items-center scroll-up-text">
          <h1 className='text-white'>ABOUT US</h1>
          <p className='text-white text-center aboutText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eius voluptates exercitationem?</p>
          <button onClick={navigateToContactPage} className='rounded'>CONTACT</button>
        </div>
      </div>
      <About />
      <AboutUsPage/>
     
      <BackGroundImage />
      {/* <OurTeam /> */}
      {/* <GetInTouch /> */}
      <Footer />
    </>
  )
}

export default AboutUs



