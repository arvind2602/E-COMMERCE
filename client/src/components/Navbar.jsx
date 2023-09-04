import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './css/Navbar.css'



const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
        <li><a>Logo</a></li>
        <li><a>Everything</a></li>
        <li><a>Women</a></li>
        <li><a>Men</a></li>
        <li><PersonIcon/></li>
        <li><LocalMallIcon/></li>
      </ul>
    </div>
  )
}

export default Navbar