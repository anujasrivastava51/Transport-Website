import React from 'react'
import './GetInTouch.css'
import { useNavigate } from 'react-router-dom';

const GetInTouch = () => {
  const navigate = useNavigate();
  const navigateToContactPage = ()=>{
    navigate('/Contact')
  }
  return (
    <>
        <div className="bg-image overlay">
         <div className='text-content'>
         <h1>Get In Touch With Us</h1>
         <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, placeat?</p>
           <button onClick={navigateToContactPage} className='rounded'>CONTACT US</button>
         </div>
      </div>
    </>
  )
}

export default GetInTouch
