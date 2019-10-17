import React, {useState, useEffect} from 'react'
import Story from '../../components/Story/Story'
import { inject, observer } from 'mobx-react'

const PreviewStory = inject("StoryStore")(observer(({StoryStore}) => {
  const [ story, setStory ] = useState();

  useEffect(() => {
    setStory(StoryStore.preview);
  }, []);

  return (
    <div>
      {/* <Story 
        story={story}
      /> */}
    </div>
  )
}));

export default PreviewStory
