import Axios from "axios"

const BACKEND = process.env.REACT_APP_BACKEND_USERS;

export const sendMessage = async ({to, from, message}) => {
  return Axios.post(`${BACKEND}/api/message/new`, {
    to,
    from,
    body: message
  }, 
  {
    withCredentials: true
  })
  .then(console.log)
  .catch(console.log)
}