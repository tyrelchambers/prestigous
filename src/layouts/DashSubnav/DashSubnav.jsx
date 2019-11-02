import React from 'react'
import { NavLink } from 'react-router-dom'
import './DashSubnav.scss'

const DashSubnav = () => {
  return (
    <nav className="dash-subnav-wrapper">
      <ul className="dash-subnav">
        <li>
          <NavLink to="/dashboard" className="dash-subnav-item" activeClassName="active-subnav-item">
            Overview
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile/stories" className="dash-subnav-item" activeClassName="active-subnav-item">
            Stories
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/inbox" className="dash-subnav-item" activeClassName="active-subnav-item">
            Inbox
          </NavLink>
        </li>

        <li>
          <NavLink to="#" className="dash-subnav-item" activeClassName="active-subnav-item">
            Comments
          </NavLink>
        </li>

        <li>
          <NavLink to="#" className="dash-subnav-item" activeClassName="active-subnav-item">
            Requests
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default DashSubnav
