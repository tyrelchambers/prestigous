import React from 'react'
import './NavbarDropdown.scss';
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../react-auth0-wrapper';

const NavbarDropdown = () => {
  const { logout } = useAuth0();
  return (
    <div className="navbar-dropdown-wrapper">
      <ul className="navbar-dashboard-dropdown d-f fxd-c">
       <li className="d-f ai-c ">
          <Link to="/dashboard"
            className="dropdown-link"
          >Dashboard</Link>
        </li>
        <li>
          <Link to="/account/default_message" className="dropdown-link">Account</Link>
        </li>

        <li>
          <Link to="/" className="dropdown-link" onClick={logout}>Sign Out</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarDropdown
