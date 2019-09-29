import React from 'react'
import './DashHeader.scss'
import '../Dashboard.scss'
import { DashButton } from '../../../components/buttons/Buttons';
import {Link} from 'react-router-dom'
const avatar = require('../../../assets/images/jack-finnigan-rriAI0nhcbc-unsplash.jpg');

const DashHeader = () => {
  return (
    <div className="dashboard-header center">
      <img src={avatar} alt="" className="dashboard-header-avatar"/>  

      <h2 className="dashboard-title mb-">imtyrelchambers</h2>    
      <p className="dashboard-subtitle ">Tyrel Chambers</p>

      <ul className="d-f jc-sb dashboard-header-stats">
        <li>
          <h4 className="mb--">Followers</h4>
          <p className="m0">1,000</p>
        </li>

        <li>
          <h4 className="mb--">Followers</h4>
          <p className="m0">1,000</p>
        </li>

        <li>
          <h4 className="mb--">Followers</h4>
          <p className="m0">1,000</p>
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
          <Link to="#" className="btn btn-secondary">
            <i className="fas fa-user-circle mr-"></i>
            Edit your profile
          </Link>
        </li>

        <li>
          <Link to="/story/create" className="btn btn-secondary">
            <i className="fas fa-user-edit mr-"></i>
            Create a story
          </Link>
        </li>
      </ul>
      <hr className="hr"/>
    </div>
  )
}

export default DashHeader