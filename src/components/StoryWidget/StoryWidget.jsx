import React, { useEffect, useState } from 'react'
import StoryCompact from '../StoryCompact/StoryCompact'
import './StoryWidget.scss'
import Axios from 'axios';

const StoryWidget = () => {
  const [ stories, setStories ] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BACKEND_USERS}/api/story/profile`, {withCredentials: true})
    .then(res => setStories([...res.data.stories]))
    .catch(console.log);
  }, []);

  const storiesList = stories.map((x, id) => <StoryCompact key={id} id={id} title={x.title} author={x.author} created_at={x.created_at}/>);

  return (
    <div className="story-widget-wrapper">
      <h2 className="title">Recently Published Stories</h2>
      <main className="story-widget-main d-f">
        {storiesList}
      </main>
    </div>
  )
}

export default StoryWidget
