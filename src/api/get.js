import Axios from "axios"

const BACKEND = process.env.REACT_APP_BACKEND_USERS;

export const getDrafts = () => {
  return Axios.get(`${BACKEND}/api/profile/drafts`, {withCredentials: true})
}

export const getSingleDraft = (draftId) => {
  return Axios.get(`${BACKEND}/api/draft/id/${draftId}`, {
    withCredentials: true
  });
}

export const getSingleStory = (storyId) => {
  return Axios.get(`${BACKEND}/api/story/id/${storyId}`);
}

export const getAllUsernames = (user) => {
  return Axios.get(`${BACKEND}/api/profile/allUsernames?user=${user}`, {
    withCredentials: true
  });
}

export const getProfileWithAuth0 = (id) => {
  return Axios.get(`${BACKEND}/api/profile/withAuth0`, {
    params: {
      authId: id
    }
  });
}