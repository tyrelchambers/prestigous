import Axios from "axios"

const BACKEND = process.env.REACT_APP_BACKEND_USERS;

export const likeStory = (id) => {
  return Axios.patch(`${BACKEND}/api/story/like/${id}`, null, {withCredentials: true});
}

export const dislikeStory = (id) => {
  return Axios.patch(`${BACKEND}/api/story/dislike/${id}`, null, {withCredentials: true});
}