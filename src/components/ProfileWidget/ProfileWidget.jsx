import React from 'react'
import './ProfileWidget.scss';
import { useAuth0 } from '../../react-auth0-wrapper';
import NavbarDropdown from '../../layouts/NavbarDropdown/NavbarDropdown';
import LoaderSmall from '../Loaders/LoaderSmall/LoaderSmall';

const ProfileWidget = () => {
  const { user, loading } = useAuth0();

  if ( loading ) {
    return <LoaderSmall />;
  }

  return (
    <div className="d-f ai-c profile-widget">
      <img src={user.picture} className="profile-image small mr-" alt="Profile image"/>
      <h5 className="profile-widget-username">{user.nickname}</h5>
      <i className="fas fa-chevron-down ml+"></i>

      <NavbarDropdown />
    </div>
  )
}

export default ProfileWidget
