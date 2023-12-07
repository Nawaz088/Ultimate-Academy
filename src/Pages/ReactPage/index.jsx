import React from 'react'
import Navbar from '../../Components/Navbar';
import NavStatusbar from '../../Components/NavStatusbar';
import MERNStackDevelopment from '../../Components/MERNStackDevelopment';
import Roadmap from '../../Components/Roadmap';
import Form from '../../Components/Form';
import './styles.css'
const ReactPage = () => {
  return (
    <div className='PageWraper'>
      <Navbar />
      <NavStatusbar />
      <MERNStackDevelopment />
      <Roadmap />
      <div className='course_details'>
        <div className='details_row_1'>
          <div> {/*this div is just for to containg the items and making one item */}
            <div className='course_heading'>
              <div className='check_box'></div>
              <h1>Introduction</h1>
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div>
            <div className='course_heading'>
              <div className='check_box'></div>
              <h1>Introduction</h1>
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div>
            <div className='course_heading'>
              <div className='check_box'></div>
              <h1>Introduction</h1>
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
        <div className='details_row_1'>
          <div>
            <div className='course_heading'>
              <div className='check_box'></div>
              <h1>Introduction</h1>
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <div>
            <div className='course_heading'>
              <div className='check_box'></div>
              <h1>Introduction</h1>
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
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

export default ReactPage;
