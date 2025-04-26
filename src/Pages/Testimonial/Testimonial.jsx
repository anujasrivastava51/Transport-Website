import React from 'react'
import './Testimonial.css'
import Testimonials from '../../Components/Testimonials/Testimonials'
import GetInTouch from '../../Components/GetInTouch/GetInTouch'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
const Testimonial = () => {

  const navigate = useNavigate();
  const navigateToContactPage = ()=>{
    navigate('/Contact')
  }
  return (
    <>
     <div>
     <div className='d-flex flex-column justify-content-center align-items-center testimonial-bg-img'>
     <div className="d-flex flex-column justify-content-center align-items-center scroll-up-text">
        <h1 className='text-white'>Our Testimonials</h1>
        <p className='text-white text-center testimonialText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eius voluptates exercitationem?</p>
        <button onClick={navigateToContactPage} className='rounded'>CONTACT</button>
      </div>
      </div>
      <Testimonials/>
      <GetInTouch/>
      <Footer/>
     </div>
    </>
  )
}

export default Testimonial
