import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./BlogPage.css";
import commentImg from "../../assets/Team-4.jpg";
import Footer from "../../Components/Footer/Footer";

const BlogPage = () => {
  // const comments = [
  //   {
  //     name: "Jean Doe",
  //     timestamp: "January 9, 2018 at 2:21pm",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?",
  //     image: commentImg,
  //     replies: [
  //       {
  //         name: "John Smith",
  //         timestamp: "January 9, 2018 at 2:45pm",
  //         text: "I completely agree with you, Jean!",
  //         image: commentImg,
  //         replies: [
  //           {
  //             name: "Alice Brown",
  //             timestamp: "January 9, 2018 at 3:00pm",
  //             text: "I think this is a great discussion.",
  //             image: commentImg,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Jane Roe",
  //     timestamp: "January 10, 2018 at 1:15pm",
  //     text: "This is a different comment without replies.",
  //     image: commentImg,
  //   },
  // ];

  const categories = [
    { category: "Creatives", count: 12 },
    { category: "News", count: 22 },
    { category: "Design", count: 37 },
    { category: "HTML", count: 42 },
    { category: "Web Development", count: 14 },
  ];

  const location = useLocation();
  const [backgroundImg, setBackgroundImg] = useState(null);
  const [text, setText] = useState(null);
  const [date, setDate] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [blogText, setBlogText] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (location.state) {
      setBackgroundImg(location.state.backgroundImg);
      setText(location.state.text);
      setDate(location.state.date);
      setAdmin(location.state.admin);
      setBlogText(location.state.blogText);
      setImage(location.state.image);
      console.log(location.state);
    }
  }, [location]);

  // Check screen width to adjust margin dynamically
  // const screenWidth = window.innerWidth;

  // Recursive function to render comments and replies
  // const renderComments = (comments, level = 0) =>
  //   comments.map((comment, index) => {
  //     // Adjust margin for smaller screens
  //     const marginLeft = screenWidth < 600 ? level * 2 : level * 10;

    //   return (
    //     <div
    //       key={index}
    //       className="d-flex mb-2"
    //       style={{
    //         marginLeft: `${marginLeft}px`, // Adjusted indentation for nested replies
    //       }}
    //     >
    //       {/* Comment Image */}
    //       <img
    //         src={comment.image}
    //         alt="User"
    //         className="rounded-circle me-1 me-md-3"
    //         style={{ width: "50px", height: "50px" }}
    //       />
    //       <div className="comment">
    //         {/* Comment Content */}
    //         <h6 className="mb-1 blogPageh1">{comment.name}</h6>
    //         <small className="blogPageh1">{comment.timestamp}</small>
    //         <p className="mt-2">{comment.text}</p>
    //         <button className="blogPage-button">Reply</button>

    //         {/* Render nested replies */}
    //         {comment.replies && renderComments(comment.replies, level)}
    //       </div>
    //     </div>
    //   );
    // });

  return (
    <>
      <div
        className="blogPage-bg"
        style={{
          "--background-img": `url(${backgroundImg})`,
        }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center w-50 scroll-up-text">
          <h1 className="blogPage-text">{text}</h1>
          <p className="blogPage-text text-white mb-0">{date}</p>
          <p className="blogPage-text text-white">{admin}</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="d-flex flex-column flex-md-row gap-3 gap-md-5">
            <div className="col-12 col-md-8">
              <div className="justified-text">
                <p className="">{blogText}</p>
                <p  className="">{blogText}</p>
                <p  className="">{blogText}</p>
                <p  className="">{blogText}</p>
                <p  className="">{blogText}</p>
                <p  className="">{blogText}</p>
              </div>
              {/* <div className="container">
                <h4 className="blogPageh1">6 Comments</h4>
                {renderComments(comments)} {/* Render comments */}
              {/* </div>  */}

              {/* <div className="p-4">
                <h4 className="blogPageh1">Leave a comment</h4>
                <form>
                  <div className="row mt-3 p-5 rounded blogPage-form-bg">
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="website" className="form-label">
                          Website
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="website"
                          name="website"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    {/* <button
                      type="submit"
                      className="rounded message mx-3 blogPage-comment-button"
                    >
                      POST COMMENT
                    </button>
                  </div>
                </form>
              </div> */} 
            </div>

            <div className="col-12 col-md-3 mx-5">
              <div className="blogpage-input-bg p-3">
                <input
                  className="blogpage-input"
                  type="text"
                  placeholder="Type a keyword and hit enter"
                />
              </div>
              <div className="mt-4">
                <h5 className="mb-2">Categories</h5>
                <div className="">
                  {categories.map((item, index) => (
                    <div key={index} className="categories">
                      <div className="category mb-0">
                        <h6>{item.category}</h6>
                        <p className="mb-0 count">({item.count})</p>
                      </div>
                      <hr className="bloghr"/>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <img className="blog-author-img" src={commentImg} alt="" />
                </div>
                <div className="mt-3 about-author justified-text">
                  <h5 className="fw-bold">About The Author</h5>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    quam veniam ab impedit, fugit libero dolore officiis ea. Qui
                    corrupti eos quo provident voluptas natus obcaecati, aspernatur rem?
                  </p>
                  <button className="blogPage-comment-button">Read More</button>
                </div>

                <div className="about-author justified-text mt-5">
                  <h6>Paragraph</h6>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quia eaque, rem dignissimos voluptatibus quam autem iusto in,
                    eum tempore magni ab aliquid. Eos, quo quasi. Iste quibusdam
                    provident quam, aspernatur ducimus quisquam commodi magnam velit
                    architecto quos dolorem recusandae nostrum, dignissimos similique!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPage;
