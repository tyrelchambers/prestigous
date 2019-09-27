import React from 'react'
import DisplayWrapper from '../../../layouts/DisplayWrapper/DisplayWrapper'
import Dashboard from '../Dashboard'
import DashHeader from '../DashHeader/DashHeader'

const Writer = () => {
  return (
    <DisplayWrapper header={true}>
      <Dashboard>
        <DashHeader />
      </Dashboard>
    </DisplayWrapper>
  )
}

export default Writer
