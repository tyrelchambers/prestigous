import React from 'react'
import DashHeader from './DashHeader/DashHeader'
import DashSubnav from '../../layouts/DashSubnav/DashSubnav'

const Dashboard = ({children}) => {

  return (
    <div className="container center dashboard-wrapper">
      <DashSubnav />
      <DashHeader />
      {children}
    </div>
  )
}

export default Dashboard
