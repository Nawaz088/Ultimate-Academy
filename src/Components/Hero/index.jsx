import React from 'react'
import "./index.css"
import Courses from '../Courses'
import Card from '../Card'

const Hero = () => {
  return (
    <>
      <div className='contaner'>
        <div className='content'>
          <h1>Start learning skill From your favorite mentor</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
          <button>Expolre</button>
        </div>
    
        <div className="image">
          <img
              alt="This is an image"
              src={require("./hero_image.png")}
          />

        </div>
      </div>
      <div className='featuredCourses'>
        <h1>Featured Courses</h1>
        <p>Unlock your potential with our top-notch selection of specialized and diverse featured courses.</p>
      </div>
      
    </>
  )
}

export default Hero
