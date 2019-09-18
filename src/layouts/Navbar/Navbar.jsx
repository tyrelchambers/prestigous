import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <ul>
        <li>
          <NavLink>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink>
            What is Prestigious?
          </NavLink>
        </li>

        <li>
          <NavLink>
            Jobs
          </NavLink>
        </li>

        <li>
          <NavLink>
            Discover
          </NavLink>
        </li>

        <li>
          <NavLink to="/signup?r=writer">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
