import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import  Hamburger  from '../../Images/hamburgericon.png';
import   Brand  from '../../Images/BrandIcon.png';
import './Navbar.css';



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Brand} style={{width:'7vw',height:'7vh'}} alt='StoreCodeIcon'/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        
        <img src={Hamburger} style={{width:'7vw',height:'7vh'}} alt='BurgerIcon'/>

        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Store</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Login</NavLink>
            </li>
            <li>
              <NavLink to="/about">Register</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/contact">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact"></NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar