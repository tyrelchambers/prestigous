import Axios from "axios";

const BACKEND = process.env.REACT_APP_BACKEND_USERS;

export const deleteDraft = (id) => {
  return Axios.delete(`${BACKEND}/api/draft/id/${id}`, {withCredentials: true}).then(console.log);
}

export const deleteStory = (id) => {
  return Axios.delete(`${BACKEND}/api/story/id/${id}`, {withCredentials: true}).then(console.log);
}