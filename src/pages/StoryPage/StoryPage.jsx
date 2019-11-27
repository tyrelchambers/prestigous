import React, { useState, useEffect } from 'react'
import './StoryPage.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import Story from '../../components/Story/Story'
import { getStoryByTitle } from '../../api/users/stories'
import { useAuth0 } from '../../react-auth0-wrapper'

const StoryPage = ({match}) => {
  const [ story, setStory ] = useState();
  const [ loading, setLoading ] = useState(true);
  const { profile, user } = useAuth0();

  useEffect(() => {
    const fn = async () => {
      const _ = await getStoryByTitle(match.params.title);
      setStory({..._});
    }
    fn();
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <DisplayWrapper header={true}>
      <Story 
        story={story}
        profile={profile}  
        user={user}
      />
    </DisplayWrapper>
  )
}

export default StoryPage
