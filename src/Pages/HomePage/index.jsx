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
            <img src="https://s3-alpha-sig.figma.com/img/621b/2ab0/949c23b4ac884657bfd4f465224b184e?Expires=1701043200&Signature=EHlSd10SqjLSXRDA8NihLt3jAk-ESR-NKJS9GTboUhsfFj84lEqInLLArZx1SFtpfOkrZ2wYHM8PY42HqeQOu95bXxDuUDrepapIb5JcnTR0dhfVbFlYZdrRdM28z0r5kFr9e4V3SzETTz4S2CcvMue-G8eq8MFk6546nclHISqsxMqO2kIDRpC7oYYOygzGt8vLHt9K7kRK-vSAQfrw3NXpGxStNWHqgFHHDQfJMqfNxgrK2onexRv87a5UTcBTAj5Aw5Stk-fxKNG169rCHcjZems3Ld0zQe97wBOf~HewTnAidHRoTC~NkMwiv0P0dGWAxrBVGLUmMIQuEq42vA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="this is an image"/>
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
