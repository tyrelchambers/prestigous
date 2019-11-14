import Axios from "axios";

const BACKEND = process.env.REACT_APP_BACKEND_USERS;

export const allStories = async (query) => {
  return Axios.get(`${BACKEND}/api/story/all${query}`).then(res => res);
}