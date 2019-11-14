import Axios from "axios";

const BACKEND = process.env.REACT_APP_BACKEND_USERS;

export const deleteDraft = (id) => {
  return Axios.delete(`${BACKEND}/api/story/draft/${id}`, {withCredentials: true}).then(console.log);
}