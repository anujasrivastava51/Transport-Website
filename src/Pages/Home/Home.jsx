import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Home.css'
import Truck_6 from '../../assets/Truck-6.jpg';
import Truck_5 from '../../assets/Truck-5.jpg';
import bgImage from "../../assets/car-3.jpg";

import { FaCarSide, FaCog } from "react-icons/fa";
import { IoHandLeft, IoPersonCircleOutline } from "react-icons/io5";

import HomeAboutUs from './HomeAboutUs/HomeAboutUs'
import OurTeam from '../../Components/OurTeam/OurTeam';
import OurDestinations from '../../Components/OurDestinations/OurDestinations';
import Testimonials from '../../Components/Testimonials/Testimonials';
import BackgroundImg from '../../Components/BackGrounImage/BackgroundImg';
import GetInTouch from '../../Components/GetInTouch/GetInTouch';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfPeople: '',
    dateFrom: '',
    dateTo: '',
    CarYourInterest: '',
    phoneNumber: '',
    note: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().split(' ').length < 2) {
      errors.name = 'Please provide both first and last name';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      errors.email = 'Email address is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.numberOfPeople) {
      errors.numberOfPeople = 'Number of people is required';
    } else if (formData.numberOfPeople <= 0 || !Number.isInteger(Number(formData.numberOfPeople))) {
      errors.numberOfPeople = 'Please enter a valid number of people';
    }

    const today = new Date().toISOString().split('T')[0];
    if (!formData.dateFrom) {
      errors.dateFrom = 'Start date is required';
    } else if (formData.dateFrom < today) {
      errors.dateFrom = 'Start date cannot be in the past';
    }
    if (!formData.dateTo) {
      errors.dateTo = 'End date is required';
    } else if (formData.dateTo <= formData.dateFrom) {
      errors.dateTo = 'End date must be after start date';
    }


    if (!formData.CarYourInterest) {
      errors.CarYourInterest = 'Please select a car';
    }


    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!phonePattern.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }


    if (!formData.note.trim()) {
      errors.note = 'Note is required';
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();


    const errors = validateForm();
    setFormErrors(errors);


    if (Object.keys(errors).length > 0) {
      return;
    }


    emailjs
      .sendForm('service_pwf3kwt', 'template_jpvi3a1', form.current, {
        publicKey: 'kDBGOoPgmf-UV72MV',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          setFormData({
            name: '',
            email: '',
            numberOfPeople: '',
            dateFrom: '',
            dateTo: '',
            CarYourInterest: '',
            phoneNumber: '',
            note: '',
          });

          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

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
  ];

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/About')
  }

  const navigateToServicePage = () => {
    navigate('/Services')
  }
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="8000">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
        </div>

        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="carousel-image-overlay"></div> {/* Transparent overlay */}
            <img src={Truck_6} className="w-100" alt="..." />
            <div className="carousel-caption">
              <h1 className='text-white'>About Our Truck</h1>
              <p className='text-white homeText'>Discover the features of our luxury car, designed for comfort and style.</p>
              <button onClick={handleRedirect} className='rounded'>Read More</button>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="carousel-image-overlay"></div> {/* Transparent overlay */}
            <img src={bgImage} className="w-100" alt="..." />
            <div className="carousel-caption">
              <h1 className='text-white'>Our Services</h1>
              <p className='text-white homeText'>Explore the wide range of services we offer, from maintenance to customization.</p>
              <button onClick={navigateToServicePage} className='rounded'>Learn More</button>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <HomeAboutUs />

      <div className="container mt-5">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4 mb-4 mt-1 mt-md-5" key={index}>
              <div className="text-center">
                <div className="card-body">
                  <div className="mb-3 icon" style={{ fontSize: '3rem' }}>
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

      <BackgroundImg />

       
       <OurDestinations id="our-destinations" />
       
      <div className="container mt-1 mt-md-5" id='book-now'>
        <div className="row">
          {/* First Column */}
          <div className="col-md-6">
            <img className='w-100 h-75 rounded mt-5' src={Truck_5} alt="" />
          </div>

          {/* Second Column */}
          <div className="col-12 col-md-6 container mt-1 mt-md-5">
            <p className='cursive mb-0'>Book Now</p>
            <h2 className='mb-3'>Book a Vehicle</h2>
            <hr />
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">

                <div className=" col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="numberOfPeople" className="form-label">Number of People:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="numberOfPeople"
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleInputChange}
                    />
                    {formErrors.numberOfPeople && <div className="text-danger">{formErrors.numberOfPeople}</div>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="dateFrom" className="form-label">Date From:</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateFrom"
                      name="dateFrom"
                      value={formData.dateFrom}
                      onChange={handleInputChange}
                    />
                    {formErrors.dateFrom && <div className="text-danger">{formErrors.dateFrom}</div>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="dateTo" className="form-label">Date To:</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateTo"
                      name="dateTo"
                      value={formData.dateTo}
                      onChange={handleInputChange}
                    />
                    {formErrors.dateTo && <div className="text-danger">{formErrors.dateTo}</div>}
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="CarYourInterest" className="form-label">Car Your are interested in:</label>
                    <select
                      className="form-select"
                      id="CarYourInterest"
                      name="CarYourInterest"
                      value={formData.CarYourInterest}
                      onChange={handleInputChange}
                    >
                      <option value="">Vehicle</option>
                      <option value="option1">Truck</option>
                      <option value="option2">Car</option>
                      <option value="option3">Option 3</option>
                    </select>
                    {formErrors.CarYourInterest && <div className="text-danger">{formErrors.CarYourInterest}</div>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                    {formErrors.phoneNumber && <div className="text-danger">{formErrors.phoneNumber}</div>}
                  </div>
                </div>

              </div>

              {/* Message Input */}
              <div className="mb-3">
                <label htmlFor="note" className="form-label">Note</label>
                <textarea
                  className="form-control"
                  id="note"
                  name="note"
                  rows="4"
                  value={formData.note}
                  onChange={handleInputChange}
                />
                {formErrors.note && <div className="text-danger">{formErrors.note}</div>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="rounded">BOOK NOW</button>
            </form>
          </div>
        </div>
      </div>

      {/* <OurTeam /> */}
      {/* <Testimonials />/ */}
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Home
