import React, { useEffect, useState } from 'react'
import StoryCompact from '../StoryCompact/StoryCompact'
import './StoryWidget.scss'
import Axios from 'axios';
import { getStoriesInProfile } from '../../api/users/stories';
import FeaturedStory from '../../layouts/FeaturedStory/FeaturedStory';

const StoryWidget = () => {
  const [ stories, setStories ] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const stories = await getStoriesInProfile();
      setStories([...stories]);
    }
    fn();
  }, []);

  const storiesList = stories.map((x) => <FeaturedStory key={x._id} story={x}/>);

  return (
    <div className="story-widget-wrapper">
      <h2 className="title">Recently Published Stories</h2>
      <main className="story-list-wrapper d-f">
        {storiesList}
      </main>
    </div>
  )
}

export default StoryWidget
