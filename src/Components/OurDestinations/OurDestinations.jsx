import React from 'react'
import './OurDestination.css'
import backgroundImg from "../../assets/backgroundImg.jpg"
import bgImage from "../../assets/bgImage.jpg"
import Truck from "../../assets/Truck-2.jpg"
import car from '../../assets/car-3.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from 'react-router-dom'
const OurDestinations = ({id}) => {
    const destinations = [
        {
            image: Truck,
            date: "2025-02-15",
            place: "Paris, France",
            rupees: 5000,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere hic dolor autem, quidem, nesciunt deleniti vel id eum dolores dolorem atque expedita labore architecto ad eaque fugit explicabo! Numquam perferendis rerum nisi ex. Reprehenderit, sed, praesentium, quidem facilis similique cumque itaque nam error soluta veniam ad veritatis repudiandae esse."
        },
        {
            image: car,
            date: "2025-03-10",
            place: "Tokyo, Japan",
            rupees: 60000,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere hic dolor autem, quidem, nesciunt deleniti vel id eum dolores dolorem atque expedita labore architecto ad eaque fugit explicabo! Numquam perferendis rerum nisi ex. Reprehenderit, sed, praesentium, quidem facilis similique cumque itaque nam error soluta veniam ad veritatis repudiandae esse."
        },
        {
            image: backgroundImg,
            date: "2025-05-25",
            place: "New York, USA",
            rupees: 80000,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere hic dolor autem, quidem, nesciunt deleniti vel id eum dolores dolorem atque expedita labore architecto ad eaque fugit explicabo! Numquam perferendis rerum nisi ex. Reprehenderit, sed, praesentium, quidem facilis similique cumque itaque nam error soluta veniam ad veritatis repudiandae esse."
        },
        {
            image: backgroundImg,
            date: "2025-02-15",
            place: "Paris, France",
            rupees: 50000,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere hic dolor autem, quidem, nesciunt deleniti vel id eum dolores dolorem atque expedita labore architecto ad eaque fugit explicabo! Numquam perferendis rerum nisi ex. Reprehenderit, sed, praesentium, quidem facilis similique cumque itaque nam error soluta veniam ad veritatis repudiandae esse."
        },
        {
            image: bgImage,
            date: "2025-03-10",
            place: "Tokyo, Japan",
            rupees: 60000,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere hic dolor autem, quidem, nesciunt deleniti vel id eum dolores dolorem atque expedita labore architecto ad eaque fugit explicabo! Numquam perferendis rerum nisi ex. Reprehenderit, sed, praesentium, quidem facilis similique cumque itaque nam error soluta veniam ad veritatis repudiandae esse."
        },
        {
            image: backgroundImg,
            date: "2025-05-25",
            place: "New York, USA",
            rupees: 80000,
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere hic dolor autem, quidem, nesciunt deleniti vel id eum dolores dolorem atque expedita labore architecto ad eaque fugit explicabo! Numquam perferendis rerum nisi ex. Reprehenderit, sed, praesentium, quidem facilis similique cumque itaque nam error soluta veniam ad veritatis repudiandae esse."
        },
    ];

    const navigate = useNavigate();
    const handleRedirect = (image, date, place, rupees, desc) => {
        navigate('/Destinations-details', {
            state: { image: image, date: date, place: place, rupees: rupees, desc:desc }
        })
    }
    return (
        <>
            <div className='ourDestination'id={id}>
                <div className='container'>
                    <div className='d-flex flex-column mt-4 align-items-center justify-content-center mb-5'>
                        <p className='cursive-text mt-4'>Destinations</p>
                        <h2>Our Destinations</h2>
                        <hr />
                    </div>


                    <div className="container mt-5" id='detinations'>
                        <div className="row">
                            {destinations.map((destination, index) => (
                                <div onClick={() => handleRedirect(destination.image, destination.date, destination.place, destination.rupees, destination.desc)} className="col-12 d-flex d-md-block col-md-4 mb-4" key={index} >
                                    <div className="card image-hover shadow-lg destination ">
                                        <img src={destination.image} className="card-img-top" alt='' />
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="card-title"><FaLocationDot /> {destination.place}</h5>
                                                <p className="card-text d-flex justify-content-center w-25 p-1 rounded bgcolor">₹{destination.rupees}</p>
                                            </div>
                                            <div className=''>
                                                <p className="card-text"><SlCalender /> {destination.date}</p>
                                                {destination.desc.split(' ').slice(0, 7).join(' ')}...

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurDestinations;
