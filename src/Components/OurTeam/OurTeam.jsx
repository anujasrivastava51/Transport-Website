import React from 'react';
import './OurTeam.css';
import Team_1 from '../../assets/Team-1.jpg';
import Team_2 from '../../assets/Team-2.jpg';
import Team_3 from '../../assets/Team-3.jpg';
import Team_4 from '../../assets/Team-4.jpg';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const OurTeam = () => {
    const teams = [
        {
            image: Team_1,
            fbicon: <FaFacebook />,
            linkdinicon: <FaLinkedin />,
            twittericon: <FaTwitter />,
            name: 'Craig Daniel',
            position: 'Engineer'
        },
        {
            image: Team_2,
            fbicon: <FaFacebook />,
            linkdinicon: <FaLinkedin />,
            twittericon: <FaTwitter />,
            name: 'Jane Smith',
            position: 'Engineer'
        },
        {
            image: Team_3,
            fbicon: <FaFacebook />,
            linkdinicon: <FaLinkedin />,
            twittericon: <FaTwitter />,
            name: 'Alice Johnson',
            position: 'Engineer'
        },
        {
            image: Team_4,
            fbicon: <FaFacebook />,
            linkdinicon: <FaLinkedin />,
            twittericon: <FaTwitter />,
            name: 'Bob Brown',
            position: 'Engineer'
        }
    ];
    return (
        <>
            <div className='container'>
                <div className='d-flex flex-column mt-2 mt-md-5 align-items-center justify-content-center mb-5'>
                    <p className='cursive-text mt-5 mb-0'>Team</p>
                    <h2>Our Team</h2>
                    <hr />
                </div>
                <div className="row">
                    {teams.map((member, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="position-relative card-container">
                                <img 
                                    src={member.image}
                                    alt={member.name}
                                    className="teamImg rounded image-hover"
                                />

                                {/* Social icons container */}
                                <div className="position-absolute d-flex flex-column align-items-center justify-content-center mx-1 top-0 mt-5 start-0 p-2 social-icons">
                                    <div className='mb-3 mt-5'>
                                        <a href="#" className="me-2  mb-1 w-100 h-100 p-1 fs-4 icon-hover">{member.fbicon}</a>
                                    </div>
                                    <div className='mb-3'>
                                        <a href="#" className="me-2  mb-1 w-100 h-100 p-1 fs-4 icon-hover">{member.linkdinicon}</a>
                                    </div>
                                    <div className=''>
                                        <a href="#" className="me-2  mb-1 w-100 h-100 p-1 fs-4 icon-hover">{member.twittericon}</a>
                                    </div>
                                </div>

                                <div className="card-body mt-4 d-flex flex-column justify-content-center align-items-center">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-text">{member.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>




            </div>
        </>
    )
}

export default OurTeam
