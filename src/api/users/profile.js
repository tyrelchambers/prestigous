import { toast } from "react-toastify";
import Axios from "axios";

const BACKEND_USERS = process.env.REACT_APP_BACKEND_USERS;

export const getProfile = async () => {

  const profile = await Axios.get(`${BACKEND_USERS}/api/profile/getProfile`, {
    withCredentials: true
  }).then(res => {
    return res.data;
  }).catch(err => toast.error(err.error));

  return profile;
}

export const getCookieFromDb = async (user) => {
  if ( !user ) return;

  const session = await Axios.post(`${BACKEND_USERS}/api/sessions/new`, {
    ...user
  })
  .then(res => res.data)
  .catch(console.log)                                
  return session;
}