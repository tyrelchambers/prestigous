import React from 'react'
import './DashIndex.scss'
import Dashboard from '../Dashboard';
import DashHeader from '../DashHeader/DashHeader';
import DisplayWrapper from '../../../layouts/DisplayWrapper/DisplayWrapper';
import StoryWidget from '../../../components/StoryWidget/StoryWidget';




const DashIndex = () => {
  return (
    <DisplayWrapper header={true}>
      <Dashboard>
        <DashHeader/>
        <div className="dash-index-wrapper">
          <StoryWidget/>
        </div>
      </Dashboard>
    </DisplayWrapper>
  )
}

export default DashIndex
