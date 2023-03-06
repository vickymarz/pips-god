import fetchApi from "./fetchApi.js";
import {
  paymentTypes,
  tokenTypes
 } from "./dataTypes";

import {
  BASE_URL,
  INITIALIZE_TRANSACTION,
  VERIFY_TRANSACTION,
  SIGNUP_URL,
  LOGIN_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
  GET_COURSES,
  GET_COURSE,
  DELETE_COURSE,
  CLOUDINARY_BASE_URL,
  UPLOAD_THUMBNAIL,
  UPLOAD_VIDEO,
  UPLOAD_RAW_FILE,
  COURSES_URL,
  GET_VIDEOS,
  GET_DOCUMENTS,
  GET_DOCUMENT,
  ANALYTICS_URL,
  MENTORSHIP_URL,
} from "./rootEndPoints";


const initializeTransaction = async (params:paymentTypes) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${INITIALIZE_TRANSACTION}`, params);
    console.log(result)
    return result;
  } catch (err) {
    return err;
  }
};

const verifyTransaction = async (id: string | undefined) => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${VERIFY_TRANSACTION}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
};

const register = async (params: any) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const login = async (params: any) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const recoverPassword = async (params: any) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${FORGOT_PASSWORD_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const resetToken = async (params: tokenTypes) => {
  try {
    const result = await fetchApi.post(
      `${BASE_URL}/${RESET_PASSWORD_URL}?token=${params?.token}`,
      {'email': params?.email}
    );
    return result;
  } catch (err) {
    return err;
  }
};

const resetPassword = async (params: tokenTypes) => {
  try {
    const result = await fetchApi.post(
      `${BASE_URL}/${RESET_PASSWORD_URL}?token=${params?.token}`,
       params
    );
    return result;
  } catch (err) {
    return err;
  }
};

const uploadThumbnail = async (file: File) => {

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

const uploadVideo = async (file: File) => {

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

const uploadFile = async (file: File) => {
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

const createCourses = async (params:any) => {
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

const getVideos = async () => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${GET_VIDEOS}`);
    return result;
  } catch (err) {
    return err;
  }
};

const getDocuments = async () => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${GET_DOCUMENTS}`);
    return result;
  } catch (err) {
    return err;
  }
};

const getDocument = async (id:number) => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${GET_DOCUMENT}/${id}`, );
    return result;
  } catch (err) {
    return err;
  }
};

const getAllCourses = async () => {
  try {
    const dataObj = await fetchApi.get(`${BASE_URL}/${GET_COURSES}`);
    const datas = await dataObj.data;
    return datas;
  } catch (err) {
    return err;
  }
};

const deleteCourse = async (id: number) => {
  try {
    const result = await fetchApi.deleteE(`${BASE_URL}/${DELETE_COURSE}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
}

const getCourse = async (id: number) => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${GET_COURSE}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
};



// const getEventsByToken = async (id) => {
//   try {
//     const dataObj = await fetchApi.get(`${BASE_URL}/${EVENT_BY_TOKEN}/${id}`);
//     const datas = await dataObj;
//     return datas;
//   } catch (err) {
//     return err;
//   }
// };


// const getParticipants = async (id) => {
//   try {
//     const dataObj = await fetchApi.get(`${BASE_URL}/${GET_PARTICIPANTS}/${id}`);
//     const datas = await dataObj.data;
//     return datas;
//   } catch (err) {
//     return err;
//   }
// };

// const addToGoogleCalender = async (params) => {
//   try {
//     const result = await fetchApi.post(
//       `${BASE_URL}/${GOOGLE_CALENDER}`,
//       params
//     );
//     return result;
//   } catch (err) {
//     return err;
//   }
// };

// const sendInvite = async (params) => {
//   try {
//     const result = await fetchApi.post(`${BASE_URL}/${SEND_INVITE}`, params);
//     return result;
//   } catch (err) {
//     return err;
//   }
// };

// const addParticipants = async (params) => {
//   try {
//     const result = await fetchApi.post(`${BASE_URL}/${ADD_PARTICIPANTS}`, params);
//     return result;
//   } catch (err) {
//     return err;
//   }
// }

// const deleteEvent = async (id) => {
//   try {
//     const result = await fetchApi.deleteE(`${BASE_URL}/${DELETE_EVENT}/${id}`);
//     return result;
//   } catch (err) {
//     return err;
//   }
// }

// const getUser = async () => {
//   try {
//     const dataObj = await fetchApi.get(`${BASE_URL}/${GET_USER}`);

//     const datas = await dataObj.data;
//     return datas;
//   } catch (err) {
//     return err;
//   }
// };

// const updateUser = async (params) => {
//   try {
//     const result = await fetchApi.patch(`${BASE_URL}/${GET_USER}`, params);
//     return result;
//   } catch (err) {
//     return err;
//   }
// };


const userServices = {
  initializeTransaction,
  verifyTransaction,
  register,
  login,
  recoverPassword,
  resetToken,
  resetPassword,
  uploadThumbnail,
  uploadVideo,
  uploadFile,
  createCourses,
  getAnalyticsData,
  getMentorshipData,
  getVideos,
  getDocuments,
  getDocument,
  getAllCourses,
  getCourse,
  deleteCourse,
  // createEvents,
  // getAllEvents,
  // getEventsById,
  // getParticipants,
  // addToGoogleCalender,
  // addParticipants,
  // deleteParticipants,
  // deleteEvent,
  // sendInvite,
  // getUser,
  // updateUser,
  // getEventsByToken
};

export default userServices;
