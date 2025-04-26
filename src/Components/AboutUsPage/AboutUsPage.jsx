import React, { useEffect, useRef } from 'react';
import AboutUsImage from '../../assets/road-2.jpg';
import OurVision from '../../assets/goods-1.jpg';
import { useNavigate } from 'react-router-dom';

const AboutUsPage = () => {
    const imageContainerRef1 = useRef(null); // For the first image
    const imageContainerRef2 = useRef(null); // For the second image

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

        // Observing both image containers
        if (imageContainerRef1.current) {
            observer.observe(imageContainerRef1.current);
        }
        if (imageContainerRef2.current) {
            observer.observe(imageContainerRef2.current);
        }

        return () => {
            if (imageContainerRef1.current) {
                observer.unobserve(imageContainerRef1.current);
            }
            if (imageContainerRef2.current) {
                observer.unobserve(imageContainerRef2.current);
            }
        };
    }, []);



    return (
        <>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6 order-2 order-md-1"> {/* Change order on smaller screens */}
                        <div className="storyRight mt-5">
                            <h4 className='cursive'>Our Story</h4>
                            <h1>
                                Lorem ipsum dolor sit.
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda blanditiis inventore eius ratione, est odit amet ut nobis reprehenderit aspernatur. Delectus eum dolore minus provident animi nihil amet ea debitis alias architecto hic consequuntur optio dolor, pariatur nulla! Excepturi, aperiam reprehenderit ipsum sunt earum voluptates corporis qui. Quos, nobis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda blanditiis inventore eius ratione, est odit amet ut nobis reprehenderit aspernatur. Delectus eum dolore minus provident animi nihil amet ea debitis alias architecto hic consequuntur optio dolor, pariatur nulla!
                            </p>

                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2 mt-5"> {/* Change order on smaller screens */}
                        <div ref={imageContainerRef1} className="storyLeft aboutanimation image-overlay">
                            <img className="w-100 rounded" src={AboutUsImage} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row d-flex">
                    <div className="col-md-6 order-1 mb-3 mt-5 mb-md-5"> {/* Change order on smaller screens */}
                        <div ref={imageContainerRef2} className="image-overlay">
                            <img className="w-100 rounded" src={OurVision} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2 mt-md-5">
                        <div className="uperText">
                            <h4 className='cursive'>Our Vision</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas animi corrupti ratione maxime eum cum excepturi. Perferendis voluptatem fuga, adipisci doloremque, velit nostrum excepturi consequatur consequuntur, ullam molestias ipsa.

                            </p>
                        </div>
                        <div className="LowerText">
                            <h4 className='cursive'>Our Mission</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro numquam error aspernatur voluptates aperiam libero reprehenderit quae ad qui illum maiores ratione esse autem rerum, rem illo recusandae consectetur at?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro numquam error aspernatur voluptates aperiam libero reprehenderit quae ad qui illum maiores ratione esse autem rerum, rem illo recusandae consectetur at?

                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUsPage;
