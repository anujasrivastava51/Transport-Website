import React from 'react';
import './Service.css';
import { FaCarSide, FaCog } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

// import Testimonials from '../../Components/Testimonials/Testimonials';
import GetInTouch from '../../Components/GetInTouch/GetInTouch';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const items = [
      {
        icon: <FaCarSide />,
        name: "Cars",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde."
      },
      {
        icon: <FaCog />,
        name: "30 Years of Experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde."
      },
      {
        icon: <IoPersonCircleOutline />,
        name: "Good Captain",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde."
      },
      {
        icon: <FaCarSide />,
        name: "Cars",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde."
      },
      {
        icon: <FaCog />,
        name: "30 Years of Experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde."
      },
      {
        icon: <IoPersonCircleOutline />,
        name: "Good Captain",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde."
      },
    ]


  
 const navigate = useNavigate();
   const navigateToContactPage = ()=>{
     navigate('/Contact')
   }
  return (
    <>
      <div>
        <div className='d-flex flex-column justify-content-center align-items-center services-bg-img'>
        <div className="d-flex flex-column justify-content-center align-items-center scroll-up-text">
          <h1 className='text-white'>Our Services</h1>
          <p className='text-white text-center serviceText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eius voluptates exercitationem?</p>
          <button onClick={navigateToContactPage} className='rounded'>CONTACT</button>
        </div>
        </div>

        <div className="container mt-1 mt-md-5">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4 mb-md-4 mt-md-5" key={index}>
              <div className="text-center">
                <div className="card-body">
                  <div className="mb-3 icon">
                    {item.icon} {/* Render the icon */}
                    
                  </div>
                  <h4>{item.name}</h4>
                  <p style={{ color: "var(--paraText )" }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      {/* <Testimonials/> */}
      <GetInTouch/>
      <Footer/>
      </div>

    </>
  )
}

export default Service
