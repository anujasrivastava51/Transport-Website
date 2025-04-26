import React, { useEffect, useRef } from 'react';
import './HomeAboutUs.css';
import homeImg from '../../../assets/homeAboutUs.jpg';
import { useNavigate } from 'react-router-dom';

const HomeAboutUs = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-overlay'); // Add class when visible
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    return () => {
      if (imageContainerRef.current) {
        observer.unobserve(imageContainerRef.current);
      }
    };
  }, []);
 
  const navigate = useNavigate();
    const handleRedirect = () =>{
        navigate('/About')
    }

  return (
    <div className="container mt-5">
      <div className="row">
        <div
          ref={imageContainerRef}
          className="col-md-6 mt-4 aboutanimation image-overlay"
        >
          <img className="w-100 rounded" src={homeImg} alt="About Us" />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="cursive">About us</h4>
          <h1>Welcome To Our Website</h1>
          <hr className="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, illum,
            quasi. Odit velit deserunt eligendi unde, enim. Enim fugiat. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
            eius ullam impedit architecto debitis facilis!
          </p>
          <button onClick={handleRedirect} className="rounded">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
