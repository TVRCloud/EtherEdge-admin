import axios from "axios";

// const BASE_URL = "http://localhost:5000/";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

const storedData = localStorage.getItem("persist:alpha96");
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;

const Token = user?.userInfo?.[0]?.accessToken;
// console.log(Token);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${Token}` },
});
