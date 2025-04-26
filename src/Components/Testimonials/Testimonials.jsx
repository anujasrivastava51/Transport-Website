import React from 'react';
import './Testimonials.css';
import Team_1 from '../../assets/Team-1.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            image: Team_1,
            name: "John Doe",
            description: "This service is amazing! I have learned so much and can now apply new skills to my career.",
            post: "Software Engineer"
        },
        {
            image: Team_1,
            name: "Jane Smith",
            description: "I had an incredible experience. The team was very supportive, and the learning materials were top-notch.",
            post: "Product Manager"
        },
        {
            image: Team_1,
            name: "Michael Brown",
            description: "Highly recommend this platform! It helped me grow both personally and professionally. The content is very engaging.",
            post: "Data Scientist"
        }
    ];


    return (
        <>
            <div className='container'>
                <div className='d-flex flex-column mt-md-3 align-items-center justify-content-center mb-3'>
                    <p className='cursive-text mt-5 mb-0'>Testimonial</p>
                    <h2>What Customer Saying...</h2>
                    <hr />
                </div>

                

                 <div className="container">
                        <div className="row">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="d-flex flex-column col-md-4 mb-4">
                                    <div className='box p-4 border mt-4 shadow-sm h-100 w-100'>
                                        <p>{testimonial.description}</p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                        <div className='image-container'>
                                            <img className='circular-image' src={testimonial.image} alt="testimonial Image" />
                                        </div>
                                        <div className='mt-4'>
                                            <h5 className='mb-0'>{testimonial.name}</h5>
                                            <p>{testimonial.post}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div> 
               
            </div>
        </>
    )
}

export default Testimonials;
