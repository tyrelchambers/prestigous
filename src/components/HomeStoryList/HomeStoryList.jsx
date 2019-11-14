import React, { useState, useEffect } from 'react'
import { allStories } from '../../api/stories/stories';
import FeaturedStory from '../../layouts/FeaturedStory/FeaturedStory';

export const HomeStoryList = (props) => {
  const [ stories, setStories ] = useState();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fn = async () => {
      const s = await allStories(props.location.search);
      setStories([...s.data]);
      setLoading(false);

    }

    fn();
  }, [])

  if ( loading ) return null;

  const storyList = stories.map((x, id) => <FeaturedStory key={id} story={x} />)

  return (
    <React.Fragment>
      {storyList}
    </React.Fragment>
  );
}
