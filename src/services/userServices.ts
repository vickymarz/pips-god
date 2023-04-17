import fetchApi from "./fetchApi.js";
import {
  paymentTypes,
  tokenTypes,
  RegisterTypes,
  EmailVerifyTypes,
  LoginTypes,
  AdminTypes,
  AnalyticsType,
  ContactType,
  AddModuleType,
  UpdateModuleType,
  RolesTypes
} from "./dataTypes";

import {
  BASE_URL,
  INITIALIZE_TRANSACTION,
  VERIFY_TRANSACTION,
  SIGNUP_URL,
  VERIFY_EMAIL,
  LOGIN_URL,
  LOGOUT_URL,
  REFRESH_TOKENS_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
  ANALYTICS_URL,
  COURSE_MODULES_URL,
  GET_ROLES_URL,
  CLOUDINARY_BASE_URL,
  UPLOAD_THUMBNAIL,
  UPLOAD_VIDEO,
  UPLOAD_RAW_FILE,
  COURSE_MODULES_BRIEF_URL,
  CONTACT_URL,
} from "./rootEndPoints";


const initializeTransaction = async (params:paymentTypes) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${INITIALIZE_TRANSACTION}`, params);
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

const register = async (params: RegisterTypes) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const verifyEmail = async (params: EmailVerifyTypes ) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${VERIFY_EMAIL}?token=${params.token}&trans=${params.trans}`);
    return result;
  } catch (err) {
    return err;
  }
};

const login = async (params: LoginTypes) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const refreshTokens = async (params: {refreshToken: string}):Promise<unknown> => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${REFRESH_TOKENS_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const logout = async (params: {refreshToken: string}) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${LOGOUT_URL}`, params);
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

const adminRegister = async (params: AdminTypes) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const adminLogin = async (params: LoginTypes) => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const getRoles = async (params: RolesTypes):Promise<unknown> => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${GET_ROLES_URL}`, params);
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

const updateAnalyticsData = async (params: AnalyticsType) => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${ANALYTICS_URL}?startDate=${params.startDate}&endDate=${params.endDate}`);
    return result;
  } catch (err) {
    return err;
  }
};

const createModule = async (params:AddModuleType): Promise<unknown> => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${COURSE_MODULES_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};

const getAllModules = async ():Promise<unknown> => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${COURSE_MODULES_URL}`);
    return result;
  } catch (err) {
    return err;
  }
};

const getAllModulesBrief = async ():Promise<unknown> => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${COURSE_MODULES_BRIEF_URL}`);
    return result;
  } catch (err) {
    return err;
  }
};

const getModule = async (id: null | number ):Promise<unknown> => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${COURSE_MODULES_URL}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
};
const getModuleDetails = async (id: null | number ):Promise<unknown> => {
  try {
    const result = await fetchApi.get(`${BASE_URL}/${COURSE_MODULES_URL}/${id}?role=user`);
    return result;
  } catch (err) {
    return err;
  }
};

const deleteModule = async (id: number):Promise<unknown> => {
  try {
    const result = await fetchApi.deleteE(`${BASE_URL}/${COURSE_MODULES_URL}/${id}`);
    return result;
  } catch (err) {
    return err;
  }
}


const updateModule = async (params:UpdateModuleType):Promise<unknown> => {
  try {
    const result = await fetchApi.patch(`${BASE_URL}/${COURSE_MODULES_URL}/${params?.courseModule.courseModuleId}`, params);
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
  return result.secure_url
};

// const getDocument = async (id:number) => {
//   try {
//     const result = await fetchApi.get(`${BASE_URL}/${GET_DOCUMENT}/${id}`, );
//     return result;
//   } catch (err) {
//     return err;
//   }
// };


const contact = async (params: ContactType ): Promise<unknown> => {
  try {
    const result = await fetchApi.post(`${BASE_URL}/${CONTACT_URL}`, params);
    return result;
  } catch (err) {
    return err;
  }
};




const userServices = {
  initializeTransaction,
  verifyTransaction,
  register,
  verifyEmail,
  login,
  logout,
  refreshTokens,
  recoverPassword,
  resetToken,
  resetPassword,
  adminRegister,
  adminLogin,
  getRoles,
  getAnalyticsData,
  updateAnalyticsData,
  createModule,
  getAllModules,
  getAllModulesBrief,
  getModule,
  getModuleDetails,
  deleteModule,
  updateModule,
  uploadThumbnail,
  uploadVideo,
  uploadFile,
  // getDocument,
  contact
};

export default userServices;
