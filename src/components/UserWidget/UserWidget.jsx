import React from 'react'
import { SmallButton } from '../buttons/Buttons'
import './UserWidget.scss';

const UserWidget = ({profile, profileImg}) => {
  return (
    <div className="d-f user-widget-wrapper">
      <img src={profileImg} alt="" className="avatar"/>

      <div className="d-f fxd-c ml+">
        <h3 className="widget-username">{profile.firstName} {profile.lastName}</h3>
        <div className="d-f w-372px">
          <SmallButton text="Follow" classNames="m-" icon={<i className="fas fa-plus mr--"></i>}/>
          <SmallButton text="Subscribe 20,000" classNames="m-"/>
        </div>
      </div>
    </div>
  )
}

export default UserWidget
