import fetchApi from "./fetchApi";

import {
  BASE_URL,
  CLOUDINARY_BASE_URL,
  UPLOAD_THUMBNAIL,
  UPLOAD_VIDEO,
  UPLOAD_RAW_FILE,
  COURSES_URL,
  ANALYTICS_URL,
  MENTORSHIP_URL,
  SIGNUP_URL,
  LOGIN_URL,
  CREATE_EVENT,
  GET_EVENTS,
  GET_PARTICIPANTS,
  PASSWORD_RECOVERY_URL,
  RESET_PASSWORD_URL,
  GOOGLE_CALENDER,
  ADD_PARTICIPANTS,
  DELETE_PARTICIPANTS,
  SEND_INVITE,
  GET_USER,
  DELETE_EVENT,
  EVENT_BY_TOKEN,
} from "./rootEndPoints.js";


const uploadThumbnail = async (file) => {

  const formData = new FormData()
   formData.append('file', file)
   formData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_KEY}`)
   formData.append("cloud_name", `${process.env.REACT_APP_CLOUD_NAME}`)
   const res = await fetch(`${CLOUDINARY_BASE_URL}/${UPLOAD_THUMBNAIL}`, {
    method: 'POST',
    body: formData,
  })
  const result = await res.json()
 return result.secure_url
};

const uploadVideo = async (file) => {

  const formData = new FormData()
   formData.append('file', file)
   formData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_KEY}`)
   formData.append("cloud_name", `${process.env.REACT_APP_CLOUD_NAME}`)
   const res = await fetch(`${CLOUDINARY_BASE_URL}/${UPLOAD_VIDEO}`, {
    method: 'POST',
    body: formData,
  })
  const result = await res.json()
  console.log(result.secure_url)
  return result.secure_url
};

const uploadFile = async (file) => {
  const formData = new FormData()
   formData.append('file', file)
   formData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_KEY}`)
   formData.append("cloud_name", `${process.env.REACT_APP_CLOUD_NAME}`)
   const res = await fetch(`${CLOUDINARY_BASE_URL}/${UPLOAD_RAW_FILE}`, {
    method: 'POST',
    body: formData,
  })
  const result = await res.json()
  console.log(result.secure_url)
  return result.secure_url
};

const createCourses = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${COURSES_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const getAnalyticsData = async () => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${ANALYTICS_URL}`);
    return result;
  } catch (err) {
    return err;
  }
};

const getMentorshipData = async () => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${MENTORSHIP_URL}`);
    return result;
  } catch (err) {
    return err;
  }
};

const register = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const login = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const recoverPassword = async (params) => {
  try {
    const result = await fetchApi.post(
      `${BASE_URL}/${PASSWORD_RECOVERY_URL}`,
      params
    );
    return result;
  } catch (err) {
    return err;
  }
};

const resetPassword = async (params) => {
  try {
    const result = await fetchApi.post(
      `${BASE_URL}/${RESET_PASSWORD_URL}`,
      params
    );
    return result;
  } catch (err) {
    return err;
  }
};

const createEvents = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${CREATE_EVENT}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const getAllEvents = async () => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${GET_EVENTS}`);
    const datas = await dataObj.data;
    return datas;
  } catch (err) {
    return err;
  }
};

const getEventsById = async (id) => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${GET_EVENTS}/${id}`);
    const datas = await dataObj.data;
    return datas;
  } catch (err) {
    return err;
  }
};

const getEventsByToken = async (id) => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${EVENT_BY_TOKEN}/${id}`);
    const datas = await dataObj;
    return datas;
  } catch (err) {
    return err;
  }
};


const getParticipants = async (id) => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${GET_PARTICIPANTS}/${id}`);
    const datas = await dataObj.data;
    return datas;
  } catch (err) {
    return err;
  }
};

const addToGoogleCalender = async (params) => {
  try {
    const result = await fetchApi.post(
      `${BASE_URL}/${GOOGLE_CALENDER}`,
      params
    );
    return result;
  } catch (err) {
    return err;
  }
};

const sendInvite = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${SEND_INVITE}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const addParticipants = async (params) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${ADD_PARTICIPANTS}`, params);
    return result;
  } catch (err) {
    return err;
  }
}

const deleteEvent = async (id) => {
  try {
    const result = await fetchApi.deleteE(`${BASE_URL}/${DELETE_EVENT}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
}

const getUser = async () => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${GET_USER}`);

    const datas = await dataObj.data;
    return datas;
  } catch (err) {
    return err;
  }
};

const updateUser = async (params) => {
  try {
    const result = await fetchApi.patch(`${BASE_URL}/${GET_USER}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const deleteParticipants = async (id) => {
  try {
    const result = await fetchApi.deleteE(`${BASE_URL}/${DELETE_PARTICIPANTS}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
}

const userServices = {
  uploadThumbnail,
  uploadVideo,
  uploadFile,
  createCourses,
  getAnalyticsData,
  getMentorshipData,
  register,
  login,
  createEvents,
  getAllEvents,
  getEventsById,
  getParticipants,
  recoverPassword,
  resetPassword,
  addToGoogleCalender,
  addParticipants,
  deleteParticipants,
  deleteEvent,
  sendInvite,
  getUser,
  updateUser,
  getEventsByToken
};

export default userServices;
