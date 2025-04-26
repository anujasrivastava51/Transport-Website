import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog';
import Service from './Pages/Services/Service';
import Testimonial from './Pages/Testimonial/Testimonial';
import Contact from './Pages/Contact/Contact';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import BlogPage from './Pages/BlogPage/BlogPage';
import DestinationDetails from './Components/OurDestinations/DestinationDetails';

const App = () => {
  // const navLinks = [
  //   { path: "/About", label: "ABOUT", className: "about" },
  //   { path: "/Services", label: "SERVICES", className: "service" },
  //   { path: "/Testimonials", label: "TESTIMONIAL", className: "testimonial" },
  //   { path: "/Blog", label: "BLOG", className: "blogs" },
  //   { path: "/Contact", label: "CONTACT", className: "contact" },
   
  // ];
 
  return (
    <div>
        <Navbar/>
         <ScrollTop/>
          <Routes>
            
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<AboutUs/>}/>
            <Route path='/Services' element={<Service/>}/>
            <Route path='/Testimonials' element={<Testimonial/>}/>
            {/* <Route path='/Blog' element={<Blog/>}/> */}
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Blog-Page' element={<BlogPage/>}/>
            <Route path='/Destinations-details' element={<DestinationDetails/>}/>

          </Routes>
    </div>
  )
}

export default App
