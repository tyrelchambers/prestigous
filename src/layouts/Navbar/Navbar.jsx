import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <ul>
        <li className="navbar-item" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="/">
            Home
          </NavLink>
        </li>

        <li className="navbar-item" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="#">
            What is Prestigious?
          </NavLink>
        </li>

        <li className="navbar-item" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="#">
            Jobs
          </NavLink>
        </li>

        <li className="navbar-item" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="#">
            Discover
          </NavLink>
        </li>

        <li className="navbar-item" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
const activeRouterHandler = (match, location) => {
  if (!match) {
    return false
  }
  
  return true;
}

export default Navbar
