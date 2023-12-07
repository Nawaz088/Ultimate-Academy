import React from 'react'
import './styles.css'

const Roadmap = () => {
  return (
    <div className='roadmap_main'>
      <div className='roadmap_child1'>
        <h2>The Curriculum Roadmap</h2>
        <p>DesignCourse is structured to providing aspiring designers with the necessary foundation to produce beautiful user interfaces</p>
      </div>
      <div className='roadmap_child2_main'>{/*this div will do flex row */}
        <div className='roadmap_child2_leftchild'> {/*this is the right content div */}
          <div id='roadmap_leftchild_content_container'>
            <h1>Introduction to aws cloud</h1>
            <p>Mastering the fundamentals of aws services for cloud practitioner course</p>
          </div>
          <div id='roadmap_leftchild_content_container'>
            <h1>Introduction to aws cloud</h1>
            <p>Mastering the fundamentals of aws services for cloud practitioner course</p>
          </div>
        </div> 
        <div className='roadmap_child2_middlechild '>{/*this is the middle image div */}
          <img src={require('./roadmap_line.png')} />
        </div>
        <div className='roadmap_child2_rightchild'>{/*this is the left content div */}
          <div id='roadmap_rightchild_content_container'>
            <h1>Introduction to aws cloud</h1>
            <p>Mastering the fundamentals of aws services for cloud practitioner course</p>
          </div>
          <div id='roadmap_hidechild_content_container'>
            <h1>Introduction to aws cloud</h1>
            <p>Mastering the fundamentals of aws services for cloud practitioner course</p>
          </div>
          <div id='roadmap_rightchild_content_container'>
            <h1>Introduction to aws cloud</h1>
            <p>Mastering the fundamentals of aws services for cloud practitioner course</p>
          </div>
          <div id='roadmap_hidechild_content_container'>
            <h1>Introduction to aws cloud</h1>
            <p>Mastering the fundamentals of aws services for cloud practitioner course</p>
          </div>
          <div id='roadmap_rightchild_content_container'>
            <h1>Introduction to aws cloud</h1>
            <p>Mastering the fundamentals of aws services for cloud practitioner course</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap

