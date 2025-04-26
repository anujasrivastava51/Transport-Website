import React, { useEffect, useState } from 'react';
import './DestinationDetails.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const DestinationDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [date, setDate] = useState(null);
    const [place, setPlace] = useState(null);
    const [rupees, setRupees] = useState(null);
    const [desc, setDesc] = useState(null);

    useEffect(() => {
        // Ensure that the state is available
        if (location.state) {
            setImage(location.state.image);
            setDate(location.state.date);
            setPlace(location.state.place);
            setRupees(location.state.rupees);
            setDesc(location.state.desc);
        }
    }, [location]);

    const handleBackClick = () => {
        navigate('/#our-destinations')
    }

    const handleClick = () => {
        navigate('/#book-now')
    }
    const scrollToDestinations = () => {
        // When "Back" is clicked, scroll to #our-destinations section
        const destinationsSection = document.getElementById('our-destinations');
        if (destinationsSection) {
            destinationsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToForm = () => {
        // When "Back" is clicked, scroll to #our-destinations section
        const destinationsSection = document.getElementById('book-now');
        if (destinationsSection) {
            destinationsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className='destination-details'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img src={image} className="card-img-top" alt='' />
                    </div>
                    <div className="col-md-6 mt-2 mt-md-5">
                        <h5 className="card-title"><FaLocationDot />{place}</h5>
                        <div className=''>
                            <p className="card-text mt-2"><SlCalender /> {date}</p>
                            <p className="card-text">{desc}</p>
                            <p className="card-text d-flex justify-content-center w-25 p-1 rounded bgcolor">₹{rupees}</p>
                        </div>
                        <div className="mt-4 d-flex gap-3">
                            <button
                                className='rounded destinationsBtn'
                                onClick={() => {
                                    handleBackClick(); // Go back in history
                                    setTimeout(scrollToDestinations, 100); // Wait for the back navigation to happen, then scroll
                                }}
                            >
                                Back
                            </button>


                            <button className='rounded destinationsBtn'
                             
                             onClick={() => {
                                handleClick(); // Go back in history
                                 setTimeout(scrollToForm, 100); // Wait for the back navigation to happen, then scroll
                             }}>Book Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;




// import React, { useEffect, useState } from 'react';
// import './DestinationDetails.css';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaLocationDot } from "react-icons/fa6";
// import { SlCalender } from "react-icons/sl";

// const DestinationDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [image, setImage] = useState(null);
//   const [date, setDate] = useState(null);
//   const [place, setPlace] = useState(null);
//   const [rupees, setRupees] = useState(null);
//   const [desc, setDesc] = useState(null);

//   useEffect(() => {
//     // Ensure that the state is available
//     if (location.state) {
//       setImage(location.state.image);
//       setDate(location.state.date);
//       setPlace(location.state.place);
//       setRupees(location.state.rupees);
//       setDesc(location.state.desc);
//     }
//   }, [location]);

//   const handleBackClick = () => {
//     // Use navigate(-1) to go back in browser history
//     navigate(-1);
//   };

//   const scrollToDestinations = () => {
//     // When "Back" is clicked, scroll to #our-destinations section
//     const destinationsSection = document.getElementById('our-destinations');
//     if (destinationsSection) {
//       destinationsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className='destination-details'>
//       <div className='container'>
//         <div className="row">
//           <div className="col-md-6">
//             <img src={image} className="card-img-top" alt='' />
//           </div>
//           <div className="col-md-6 mt-2 mt-md-5">
//             <h5 className="card-title"><FaLocationDot />{place}</h5>
//             <div className=''>
//               <p className="card-text mt-2"><SlCalender /> {date}</p>
//               <p className="card-text">{desc}</p>
//               <p className="card-text d-flex justify-content-center w-25 p-1 rounded bgcolor">₹{rupees}</p>
//             </div>

//             <div className="mt-4 d-flex gap-3">
//               <button
//                 className='rounded destinationsBtn'
//                 onClick={() => {
//                   handleBackClick(); // Go back in history
//                   setTimeout(scrollToDestinations,100); // Wait for the back navigation to happen, then scroll
//                 }}
//               >
//                 Back
//               </button>
//               <button className='rounded destinationsBtn'>Book Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationDetails;


