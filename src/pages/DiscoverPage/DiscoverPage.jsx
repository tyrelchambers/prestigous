import React, { useState, useEffect } from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import './DiscoverPage.scss'
import StoryFilters from '../../components/StoryFilters/StoryFilters';


export const DiscoverPage = () => {

  return (
    <DisplayWrapper header={true}>
      <div className="container center p-- discover-wrapper">
        <h1 className="title ta-c">Discover new &amp; great stories!</h1>

        <section className="d-f ai-c fxd-c">
          <div className="d-f ai-c w-100pr">
            <hr className="hr"/>
            <StoryFilters/>
          </div>
        </section>
      </div>
    </DisplayWrapper>
  )
}
