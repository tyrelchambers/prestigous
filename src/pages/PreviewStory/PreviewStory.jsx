import React, {useState, useEffect} from 'react'
import Story from '../../components/Story/Story'
import Axios from 'axios';

const PreviewStory = ({match}) => {
  const [ story, setStory ] = useState();
  const {draftId} = match.params;

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BACKEND_USERS}/api/story/draft/${draftId}`, {
      withCredentials: true
    })
    .then(res =>{
      console.log(res)  
      setStory(res.data)})
    .catch(console.log)
  }, []);

  return (
    <div>
      <h1>Hey</h1>
      {story &&
        <Story 
          story={story}
        />
      }
    </div>
  )
}

export default PreviewStory
