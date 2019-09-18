import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="brand">
        <h1>Prestigious</h1>
      </div>

      <Navbar/>
    </div>
  )
}

export default Header
