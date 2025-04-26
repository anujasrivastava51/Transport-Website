import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mailAddress: '',
    phone: '',
    message: '',
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

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required!';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required!';
    } 

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.mailAddress) {
      errors.mailAddress = 'Email address is required';
    } else if (!emailPattern.test(formData.mailAddress)) {
      errors.mailAddress = 'Please enter a valid email address';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!phonePattern.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
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
      .sendForm('service_pwf3kwt', 'template_fba85ac', form.current, {
        publicKey: 'kDBGOoPgmf-UV72MV',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          setFormData({
            firstName: '',
            lastName: '',
            mailAddress: '',
            phone: '',
            message: '',
          });
          form.current.reset();
          setFormErrors({}); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center contact-bg-img'>
        <div className='d-flex flex-column justify-content-center align-items-center scroll-up-text'>
          <h1 className='text-white'>Get In Touch</h1>
          <h4>
            <span>Home</span>
            <span>/</span>
            <span>Contact Us</span>
          </h4>
        </div>
      </div>
      <div className='container'>
        <div className='row d-flex gap-5 mt-5'>
          <div className='col-md-5'>
            <div className='contact'>
              {/* <div className='left'>
                <h1>Get In Touch With Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nisi aut commodi!</p>
                <h4>Address</h4>
                <p>Plot no 94 garodiya  nagar ghatkopar East, Mumbai</p>
                <hr />
                <h4>Email</h4>
                <p>wshivaji2000@gmail.com</p>
                <hr />
                <h4>Phone</h4>
                <p>7218583938</p>
                <hr />
              </div>
            </div> */}

              <div className='left'>
                <h1>Get In Touch With Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nisi aut commodi!</p>
                <h4>Address</h4>
                <p>Gurugram Haryana</p>
                <hr />
                <h4>Email</h4>
                <p>anujasrivastava51@gmail.com</p>
                <hr />
                <h4>Phone</h4>
                <p>9334087362</p>
                <hr />
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='firstName' className='form-label'>
                      First Name:
                    </label>
                    <input
                      type='text'
                      className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                      id='firstName'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {formErrors.firstName && <div className='text-danger'>{formErrors.firstName}</div>}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='lastName' className='form-label'>
                      Last Name:
                    </label>
                    <input
                      type='text'
                      className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                      id='lastName'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {formErrors.lastName && <div className='text-danger'>{formErrors.lastName}</div>}
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='mailAddress' className='form-label'>
                      Email:
                    </label>
                    <input
                      type='text'
                      className={`form-control ${formErrors.mailAddress ? 'is-invalid' : ''}`}
                      id='mailAddress'
                      name='mailAddress'
                      value={formData.mailAddress}
                      onChange={handleInputChange}
                    />
                    {formErrors.mailAddress && <div className='text-danger'>{formErrors.mailAddress}</div>}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <label htmlFor='phone' className='form-label'>
                      Phone Number:
                    </label>
                    <input
                      type='number'
                      className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {formErrors.phone && <div className='text-danger'>{formErrors.phone}</div>}
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>
                  Message:
                </label>
                <textarea
                  className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                  id='message'
                  name='message'
                  rows='4'
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {formErrors.message && <div className='text-danger'>{formErrors.message}</div>}
              </div>

              {/* Submit Button */}
              <button type='submit' className='rounded message'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='backgroundImage background-image overlaybg'>
        <div className='mt-0 mt-md-5 container'>
          <div className='row'>
            <div className='pt-3 pt-md-0 d-md-flex '>
              <div className='col-12 col-md-4 text'>
                <h4>Our Philosphy</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse perspiciatis rerum necessitatibus neque
                  repudiandae. Sapiente mollitia qui iure impedit necessitatibus!
                </p>
              </div>
              <div className='col-12 col-md-4 text'>
                <h4>Academics Principle</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse perspiciatis rerum necessitatibus neque
                  repudiandae. Sapiente mollitia qui iure impedit necessitatibus!
                </p>
              </div>
              <div className='col-12 col-md-4 text'>
                <h4>Key of Success</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse perspiciatis rerum necessitatibus neque
                  repudiandae. Sapiente mollitia qui iure impedit necessitatibus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

