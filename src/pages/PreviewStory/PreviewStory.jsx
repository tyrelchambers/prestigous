import React, {useState, useEffect} from 'react'
import Story from '../../components/Story/Story'
import Axios from 'axios';
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper';

const PreviewStory = ({match}) => {
  const [ story, setStory ] = useState();
  const {draftId} = match.params;

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BACKEND_USERS}/api/draft/id/${draftId}`, {
      withCredentials: true
    })
    .then(res =>{
      setStory(res.data)})
    .catch(console.log)
  }, []);

  return (
    <DisplayWrapper header={true}>
      {story &&
        <Story 
          story={story}
        />
      }
    </DisplayWrapper>
  )
}

export default PreviewStory
