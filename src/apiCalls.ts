import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { loginUser } from "./redux/userRedux";
import { publicRequest, userRequest } from "./requestMethods";

const storedData = localStorage.getItem("persist:alpha96");
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const userId = user?.userInfo?.[0]?.id;
// const userType = user?.userInfo?.[0]?.type;

// signup
export const signUpData = async (data: { email: string; password: string }) => {
  const newData = { ...data, state: "active", isVerified: false };
  // console.log('first check', newData);
  try {
    const res = await publicRequest.post("/signup", newData);
    console.log("Response Status:", res.status);
  } catch (err) {
    console.log(err);
  }
};

// signin
export const signInData = async (
  loginData: { email: string; password: string },
  dispatch: Dispatch<UnknownAction>
) => {
  try {
    const res = await publicRequest.post("/signin", loginData);
    console.log("Response Status:", res.status);
    const { _id: id, accessToken, type, state } = res.data;
    const userData = { id, accessToken, type, state };
    dispatch(loginUser(userData));
  } catch (error) {
    console.log(error);
  }
};

// view profile
export const viewProfileData = async () => {
  try {
    const res = await userRequest.get(`/Viewprofile`);
    console.log("Response Status:", res.status);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// edit profile
export const editProfile = async (data: {
  username: string;
  firstName: string;
  lastName: string;
  description?: string | undefined;
}) => {
  console.log("apiii data", data);
  try {
    const res = await userRequest.put(`/editprofile/${userId}`, data);
    console.log("Response Status:", res.status);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// update profile image
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProfileImage = async (formData: any) => {
  try {
    const res = await userRequest.put(`/update-profile-image`, formData);
    console.log("Response Status:", res.status);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
