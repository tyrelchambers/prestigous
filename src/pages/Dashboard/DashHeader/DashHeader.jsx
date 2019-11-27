import React, { useState, useEffect } from 'react'
import './DashHeader.scss'
import '../Dashboard.scss'
import {Link} from 'react-router-dom'
import { useAuth0 } from '../../../react-auth0-wrapper'
const DashHeader = () => {
  const [ u, setU ] = useState();
  const { user } = useAuth0();

  useEffect(() => {
    setU({...user});
  }, [])

  if ( !u ) return null;

  return (
    <div className="dashboard-header center mt+">
      <img src={u.picture} alt="" className="avatar"/>  

      <h2 className="dashboard-title mb-">imtyrelchambers</h2>    
      <p className="dashboard-subtitle ">Tyrel Chambers</p>

      <ul className="d-f jc-sb dashboard-header-stats">
        <li>
          <h4 className="mb--">Followers</h4>
          <p className="m0">1,000</p>
        </li>

        <li>
          <h4 className="mb--">Views</h4>
          <p className="m0">1,000</p>
        </li>

        <li>
          <h4 className="mb--">Subscribers</h4>
          <p className="m0">1,000</p>
        </li>

        <li>
          <h4 className="mb--">Revenue</h4>
          <p className="m0">$1,000</p>
        </li>
      </ul>

      <ul className="d-f jc-sb dashboard-header-actions">
        <li>
          <Link to="#" className="btn btn-secondary">
            <i className="fas fa-comment-alt mr-"></i>
            Send a message
          </Link>
        </li>

        <li>
          <Link to="/edit_profile" className="btn btn-secondary">
            <i className="fas fa-user-circle mr-"></i>
            Edit your profile
          </Link>
        </li>

        <li>
          <Link to="/create_story" className="btn btn-secondary">
            <i className="fas fa-user-edit mr-"></i>
            Create a story
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DashHeader
