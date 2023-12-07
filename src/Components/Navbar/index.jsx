import { useState } from 'react'
import './index.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon style={{ color: "white" }}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/projects">Courses</a>
            </li>
            <li>
              <a to="/about">About</a>
            </li>
            <li>
              <a to="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar