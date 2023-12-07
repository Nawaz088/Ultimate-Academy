import React from 'react'
import './styles.css'
import HeavyCard from '../../Components/HeavyCard';
import Form from "../../Components/Form";
import Navbar from '../../Components/Navbar';
import Hero from '../../Components/Hero';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="featureCourses">
        <HeavyCard Imge={'cardImage2.png'} title='MERN' disc={`MERN stack comprises MongoDB, Express.js, React.js, and Node.js, offering a robust, 
        full-stack solution for building powerful and scalable web applications`} to={"/reactpage"} />
        <div className="divisionLine"></div>
        <HeavyCard Imge={'aws.png'} title='AWS' disc={`AWS, Amazon's cloud computing platform, offers a vast selection of on-demand services, empowering businesses 
        with scalable solutions for computing, storage, and networking needs globally.`} />
        
      </div>
      <div className="formstyles">
        <Form />
      </div>
      <footer className="footer">
        <div className="fullFooterSection">
          <div className="logosection">
            <img src={require('./logo.png')} alt="this is an image"/>
            <h3>Ultimate Academy</h3>
            <p>Empowering minds, shaping futures  Your journey to tech excellence starts here.</p>
          </div>
          <div className="Footercourses">
            <ul>
              <li>
                <h4 id="h4styles">Courses</h4>
                <p>MERN Stack</p>
                <p>AWS Cloud</p>
              </li>
            </ul>
            <ul>
              <li>
                <h4>Resources</h4>
                <p>Documentation</p>
                <p>Papers</p>
                <p>Press Conferences</p>
              </li>
            </ul>
          </div>
        </div>
        {/* this is for the line */}
        <div className="footerline"></div>
        {/* this for the copy rights */}
        <div className="copyrights">
          <p>© 2023 Ultimate Academy Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
