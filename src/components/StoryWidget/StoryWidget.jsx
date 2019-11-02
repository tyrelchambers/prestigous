import React, { useEffect, useState } from 'react'
import StoryCompact from '../StoryCompact/StoryCompact'
import './StoryWidget.scss'
import Axios from 'axios';
import { getStoriesInProfile } from '../../api/users/stories';

const StoryWidget = () => {
  const [ stories, setStories ] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const stories = await getStoriesInProfile();
      setStories([...stories]);
    }
    fn();
  }, []);

  const storiesList = stories.map((x) => <StoryCompact key={x._id} id={x._id} title={x.title} author={x.author} created_at={x.created_at}/>);

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
