import React, { useState, useEffect } from 'react'
import './StoryPage.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import Story from '../../components/Story/Story'
import Axios from 'axios'

const StoryPage = ({match}) => {
  const [ story, setStory ] = useState();

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BACKEND_USERS}/api/story/${match.params.storyId}`)
    .then(res => setStory(res.data))
    .catch(console.log);
  }, [match.params.storyId]);

  return (
    <DisplayWrapper header={true}>
      {/* <Story story={story}/> */}
      {console.log(story)}
    </DisplayWrapper>
  )
}

export default StoryPage
