import React from 'react'
import './Blog.css'
import image from '../../assets/AboutUs.jpg';
import blogImg from '../../assets/Testimonial.jpg';
import blogImg_2 from '../../assets/Image.jpg';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../Components/Pagination/Pagination';
import Footer from '../../Components/Footer/Footer';
import authorImg from '../../assets/Team-1.jpg';
import authorImg2 from '../../assets/Team-2.jpg';


const Blog = () => {

  const navigate = useNavigate();
  const handleRedirect = (img, text, date, admin, blogText, image) => {
    navigate('/Blog-Page', {
      state: { backgroundImg: img, text: text, date: date, admin: admin, blogText:blogText, image:image }  // Passing the selected image as state
    });
  };

  const blogs = [
    {
      img: image,
      text: "Lorem 12 jri ipsum dolor sit",
      date: '10/12/2024',
      admin: 'Akiriti',
      image: authorImg,
      blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic expedita in soluta quaerat rerum totam quos! Architecto, excepturi? Totam maxime deleniti libero error quidem quod veritatis. Hic illo animi iste. Necessitatibus, esse. Est quas corrupti nesciunt voluptate praesentium error, dignissimos inventore ducimus, enim voluptatibus aspernatur fuga distinctio exercitationem facilis illo iste cumque odit molestias ipsum minima officiis. Possimus ipsum architecto quis dicta nostrum rerum, modi perferendis ad et reiciendis, ipsa amet error esse quibusdam illo optio aspernatur voluptatum! Consectetur ex distinctio aperiam beatae! At sapiente cum molestiae, unde dolores in molestias qui, ab vero est corporis maiores. Quod, quia?"
    },
    {
      img: blogImg,
      text: "Lorem, ipsum dolor sit",
      date: '16/12/2024',
      admin: 'Ankita',
      image: authorImg2,
      blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic expedita in soluta quaerat rerum totam quos! Architecto, excepturi? Totam maxime deleniti libero error quidem quod veritatis. Hic illo animi iste. Necessitatibus, esse. Est quas corrupti nesciunt voluptate praesentium error, dignissimos inventore ducimus, enim voluptatibus aspernatur fuga distinctio exercitationem facilis illo iste cumque odit molestias ipsum minima officiis. Possimus ipsum architecto quis dicta nostrum rerum, modi perferendis ad et reiciendis, ipsa amet error esse quibusdam illo optio aspernatur voluptatum! Consectetur ex distinctio aperiam beatae! At sapiente cum molestiae, unde dolores in molestias qui, ab vero est corporis maiores. Quod, quia?"
    },
    {
      img: blogImg_2,
      text: "Lorem, ipsum dolor sit",
      date: '10/08/2021',
      admin: 'Akiriti',
      image: authorImg,
      blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic expedita in soluta quaerat rerum totam quos! Architecto, excepturi? Totam maxime deleniti libero error quidem quod veritatis. Hic illo animi iste. Necessitatibus, esse. Est quas corrupti nesciunt voluptate praesentium error, dignissimos inventore ducimus, enim voluptatibus aspernatur fuga distinctio exercitationem facilis illo iste cumque odit molestias ipsum minima officiis. Possimus ipsum architecto quis dicta nostrum rerum, modi perferendis ad et reiciendis, ipsa amet error esse quibusdam illo optio aspernatur voluptatum! Consectetur ex distinctio aperiam beatae! At sapiente cum molestiae, unde dolores in molestias qui, ab vero est corporis maiores. Quod, quia?"
    },
    {
      img: image,
      text: "Lorem, ipsum dolor sit",
      date: '10/12/2024',
      admin: 'Akiriti',
      image: authorImg2,
      blogText: "Ram...Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic expedita in soluta quaerat rerum totam quos! Architecto, excepturi? Totam maxime deleniti libero error quidem quod veritatis. Hic illo animi iste. Necessitatibus, esse. Est quas corrupti nesciunt voluptate praesentium error, dignissimos inventore ducimus, enim voluptatibus aspernatur fuga distinctio exercitationem facilis illo iste cumque odit molestias ipsum minima officiis. Possimus ipsum architecto quis dicta nostrum rerum, modi perferendis ad et reiciendis, ipsa amet error esse quibusdam illo optio aspernatur voluptatum! Consectetur ex distinctio aperiam beatae! At sapiente cum molestiae, unde dolores in molestias qui, ab vero est corporis maiores. Quod, quia?"
    },
    {
      img: blogImg,
      text: "Lorem, ipsum dolor sit",
      date: '10/12/2024',
      admin: 'Akiriti',
      image: authorImg,
      blogText: "Aditi.... dolor sit amet consectetur adipisicing elit. Ab hic expedita in soluta quaerat rerum totam quos! Architecto, excepturi? Totam maxime deleniti libero error quidem quod veritatis. Hic illo animi iste. Necessitatibus, esse. Est quas corrupti nesciunt voluptate praesentium error, dignissimos inventore ducimus, enim voluptatibus aspernatur fuga distinctio exercitationem facilis illo iste cumque odit molestias ipsum minima officiis. Possimus ipsum architecto quis dicta nostrum rerum, modi perferendis ad et reiciendis, ipsa amet error esse quibusdam illo optio aspernatur voluptatum! Consectetur ex distinctio aperiam beatae! At sapiente cum molestiae, unde dolores in molestias qui, ab vero est corporis maiores. Quod, quia?"
    },
    {
      img: blogImg_2,
      text: "Lorem, ipsum dolor sit",
      date: '10/12/2024',
      admin: 'Akiriti',
      image: authorImg2,
      blogText: "Sonali... dolor sit amet consectetur adipisicing elit. Ab hic expedita in soluta quaerat rerum totam quos! Architecto, excepturi? Totam maxime deleniti libero error quidem quod veritatis. Hic illo animi iste. Necessitatibus, esse. Est quas corrupti nesciunt voluptate praesentium error, dignissimos inventore ducimus, enim voluptatibus aspernatur fuga distinctio exercitationem facilis illo iste cumque odit molestias ipsum minima officiis. Possimus ipsum architecto quis dicta nostrum rerum, modi perferendis ad et reiciendis, ipsa amet error esse quibusdam illo optio aspernatur voluptatum! Consectetur ex distinctio aperiam beatae! At sapiente cum molestiae, unde dolores in molestias qui, ab vero est corporis maiores. Quod, quia?"
    }
  ]

  return (
    <>
    
      <div>
        <div className='d-flex flex-column justify-content-center align-items-center blog-bg-img'>
          <div className="d-flex flex-column justify-content-center align-items-center scroll-up-text">
          <h1 className='text-white'>Blog Posts</h1>
          <p className='text-white text-center blogText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eius voluptates exercitationem?</p>
        </div>
          </div>
        
        <div className="container mt-3 mt-md-5 pt-0 pt-md-5">
          <div className="row">
            {blogs.map((blog, index) => (
              <div key={index} className="col-md-4">
                <div className="card shadow image-container">
                  <img onClick={() => handleRedirect(blog.img, blog.text, blog.date, blog.admin, blog.blogText, blog.image)} src={blog.img} className="card-img-top zoom-img" alt="Image 1" />
                </div>
                <div className="text-center mt-3">
                  <h5 className="fs-4 fw-normal">{blog.text}</h5>
                  <p>Posted by <span className='text-white'>{blog.admin}</span> In <span className='text-white'>News</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <Pagination />
        <Footer />

      </div>
    </>
  )
}

export default Blog
