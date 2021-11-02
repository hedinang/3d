import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'



function MobileNavbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)


  // const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint = 620;

  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth)
  //   window.addEventListener("resize", handleWindowResize);

  //   // Return a function from the effect that removes the event listener
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);



  // const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false)
    // } else {
    //   setDropdown(true)
    // }

    setDropdown(true)
  }

  const onMouseLeave = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false)
    // } else {
    //   setDropdown(false)
    // }
    setDropdown(false)

  }
  return (
    <>
      <nav className='navbar'>
        <img style={{ width: '70px', height: '70px', backgroundColor: '#fd7e14', marginBottom: '20px' }}
          src='https://secureservercdn.net/160.153.137.163/zxn.7da.myftpupload.com/wp-content/uploads/2021/03/cropped-logo2.png' />
        {/* <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div> */}
        <div>A</div>
      </nav>
    </>
  )
}


function DesktopNavbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const onMouseEnter = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false)
    // } else {
    //   setDropdown(true)
    // }

    setDropdown(true)
  }

  const onMouseLeave = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false)
    // } else {
    //   setDropdown(false)
    // }
    setDropdown(false)

  }

  const onClick = () => {
    setDropdown(true);
  }

  return (
    <>
      <nav className='navbar'>
        <img style={{ width: '70px', height: '70px', backgroundColor: '#fd7e14', marginBottom: '20px' }}
          src='https://secureservercdn.net/160.153.137.163/zxn.7da.myftpupload.com/wp-content/uploads/2021/03/cropped-logo2.png' />
        {/* <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div> */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
          <li className='nav-item'>
            <Link to='/' className='nav-links'
            // onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            // onClick = {onClick}
          >
            Products <i className='fas fa-caret-down' />
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
            // onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export { MobileNavbar, DesktopNavbar }
