import React from 'react'
import './DashIndex.scss'
import Dashboard from '../Dashboard';
import DashHeader from '../DashHeader/DashHeader';
import DisplayWrapper from '../../../layouts/DisplayWrapper/DisplayWrapper';
import StoryWidget from '../../../components/StoryWidget/StoryWidget';

const DashIndex = ({profileType = "writer"}) => {
  const template = () => {
    if ( profileType === "writer" ) {
      return [
        <StoryWidget />
      ]
    }
  }
  return (
    <DisplayWrapper header={true}>
      <Dashboard>
        <div className="dash-index-wrapper">
          {template()}
        </div>
      </Dashboard>
    </DisplayWrapper>
  )
}

export default DashIndex
