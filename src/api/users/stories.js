import React from 'react';
import Axios from "axios";

const BACKEND_USERS = process.env.REACT_APP_BACKEND_USERS;

export const getStoriesInProfile = async () => {
  return await Axios.get(`${BACKEND_USERS}/api/story/profile`, {withCredentials: true})
    .then(res => res.data.stories)
    .catch(console.log);
}

export const getStory = async (id) => {
  return await Axios.get(`${BACKEND_USERS}/api/story/${id}`, {withCredentials: true})
    .then(res => res.data)
    .catch(console.log);
}