import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTBlMGZhZWIwMTk0ZTQ0YWJkODE0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjU4NTg4NiwiZXhwIjoxNzE2ODQ1MDg2fQ.rNNbEZDHju70XK_kKTndS-GaHhfmYkBFRWq6w0S0OCc"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});