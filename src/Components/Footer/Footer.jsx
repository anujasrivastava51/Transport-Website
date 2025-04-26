import React from 'react'
import './Footer.css'
// import logo from '../../assets/logo_transparent.png';
import download from '../../assets/download.png';
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className=''>
                <div className='container pb-2'>
                    <div className="row">
                        {/* <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-item-center footer-logo">
                            <img className='logo' src={download} alt="" />
                            <h4 className=''>TRANSPORT</h4>
                            <Link to="">Call now:- <span className='text-white'>7218583998</span></Link>
                            <Link to="" className='mt-2'>wshivaji2000@gmail.com</Link>
                            <Link to="" className='mt-2'>Plot no 94 garodiya  nagar ghatkopar East Mumbai</Link>
                        </div> */}

                        <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-item-center footer-logo">
                            {/* <img className='logo' src={download} alt="" /> */}
                            <h4 className=''>TRANSPORT</h4>
                            <Link to="">Call now:- <span className='text-white'>9334087362</span></Link>
                            <Link to="" className='mt-2'>anujasrivastava51@gmail.com</Link>
                            <Link to="" className='mt-2'>Gurugram, Haryana</Link>

                        </div>
                        <div className="col-12 col-md-3 d-flex flex-column mt-5 footer">
                            <h5>OUR COMPANY</h5>
                            <Link to="/">Home</Link>
                            <Link to="/About">About</Link>
                            <Link to="/Services">Services</Link>
                            <Link to="/Contact">Contact</Link>

                        </div>
                        <div className="col-12 col-md-3 d-flex flex-column mt-5 footer">
                            <h5>OUR SERVICES</h5>
                            <Link to="/">Industrial</Link>
                            <Link to="/">Constructions</Link>
                            <Link to="/">Remodeling</Link>
                        </div>
                        <div className="col-12 col-md-3 d-flex flex-column mt-5 footer">
                            <h5>CONTACT</h5>
                            <Link to="/">Help Center</Link>
                            <Link to="/">Support Community</Link>
                            <Link to="/">Press</Link>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Our Partners</Link>
                        </div>
                        <div className="d-flex gap-4 social-links">
                            <Link to="/"><TiSocialFacebook className='' /></Link>
                            <Link to="/"><FaYoutube className='' /></Link>
                            <Link to="/"><FiInstagram className='' /></Link>
                            <Link to="/"><FaTwitter className='' /></Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
