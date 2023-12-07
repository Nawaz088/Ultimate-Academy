import React from 'react'
import './style.css'
const Card = ({Image, heading, description}) => {
  return (
    <div className='CardContainer'>
      {/* image div */}
      <div className='childImage'>
        <img src={require('./bgImage.png')} alt='Here should be an image' />
      </div>
      {/* content div */}
      <div className='Cardcontent'>
        <h3>
          {/* MERN:MONGO DB,EXPRESS JS, REACT And NODE JS */}
          {heading}
        </h3>
        <p>
          {/* MERN stack comprises MongoDB, Express.js, React.js, and Node.js, offering a robust, full-stack solution for building powerful and scalable web applications */}
          {description}
        </p>
      </div>
      {/* button div */}
        <button>
            Join
        </button>
    </div>
  )
}

export default Card
