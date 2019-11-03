import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import NotificationBell from '../NotificationBell/NotificationBell';
import { useAuth0 } from '../../react-auth0-wrapper'
import ProfileWidget from '../../components/ProfileWidget/ProfileWidget';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <nav className="navbar-wrapper">
      <ul className="d-f ai-c">
        <li className="navbar-item" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="/">
            Home
          </NavLink>
        </li>

        <li className="navbar-item" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="/about">
            What is Prestigious?
          </NavLink>
        </li>

        <li className="navbar-item" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="/jobs">
            Jobs
          </NavLink>
        </li>

        <li className="navbar-item featured" >
          <NavLink activeClassName="active-nav-item" isActive={activeRouterHandler} to="/discover">
            Discover
          </NavLink>
        </li>

        {!isAuthenticated &&
          <li className="navbar-item" >
            <a href="#" 
            
              onClick={() =>
                loginWithRedirect({
                  redirect_uri: "http://localhost:3000/callback"
                })
              }
            >
              Log in
            </a>
          </li>
        }

        {isAuthenticated &&
          <React.Fragment>
            <li className="navbar-item d-f ai-c jc-c">
              <NotificationBell />
            </li>

            <li>
              <ProfileWidget />
            </li>
          </React.Fragment>
        }
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
