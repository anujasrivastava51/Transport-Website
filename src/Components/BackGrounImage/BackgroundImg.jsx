import React from 'react'
import './backgroundImg.css'
const BackgroundImg = () => {
  const backgroundData = [
    {
      number: "349",
      para: "Number of Trucks",
    },
    {
      number: "7000+",
      para: "Customers Satisfied",
    },
    {
      number: "120",
      para: "Number of Staffs",
    },
    {
      number: "493",
      para: "Destinations",
    },
    
  ]
  return (
    <>
      <div className="bg-image-background overlay d-flex align-items-md-center justify-content-md-around">
        {backgroundData.map((data, index) => (
          <div key={index} className='d-flex align-items-md-center mx-5 mx-md-0 m-md-5'>
            <div className='mx-5 mx-md-3 textData'>
              <h1 className='mb-0'>{data.number}</h1>
              <p className='text-white mb-0'>{data.para}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BackgroundImg
