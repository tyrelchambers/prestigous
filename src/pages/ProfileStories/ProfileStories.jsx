import React, { useEffect, useState } from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import DashSubnav from '../../layouts/DashSubnav/DashSubnav'
import { getStoriesInProfile } from '../../api/users/stories';
import FeaturedStory from '../../layouts/FeaturedStory/FeaturedStory';
import { deleteStory } from '../../api/delete';

const ProfileStories = () => {
  const [ stories, setStories] = useState();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fn = async () => {
      await getStoriesInProfile().then(res => setStories([...res]));
      setLoading(false);
    }

    fn();
  }, []);

  if (loading) return null;

  const deleteHandler = async (id) => {
    await deleteStory(id);
    await getStoriesInProfile().then(res => setStories([...res]));

  }
  
  const storiesList = stories.map(x => 
    <FeaturedStory 
      key={x._id} 
      story={x} 
      classNames="dashboard-story" 
      deleteHandler={() => deleteHandler(x._id)}/>
  )

  return (
    <DisplayWrapper header="true">
      <DashSubnav/>
      <h1 className="title ta-c">Stories</h1>

      <section className="d-f jc-sb container center">
        <div className="story-list-wrapper">
          {storiesList}
        </div>
      </section>
    </DisplayWrapper>
  )
}

export default ProfileStories
