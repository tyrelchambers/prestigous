import React, { useState, useEffect } from 'react'
import './StoryPage.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import Story from '../../components/Story/Story'
import Axios from 'axios'
import { getStory } from '../../api/users/stories'

const StoryPage = ({match}) => {
  const [ story, setStory ] = useState();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fn = async () => {
      const _ = await getStory(match.params.storyId);
      setStory({..._});
    }

    fn();
    setLoading(false);

  }, []);

  if (loading) return null;

  return (
    <DisplayWrapper header={true}>
      <Story story={story}/>
    </DisplayWrapper>
  )
}

export default StoryPage
