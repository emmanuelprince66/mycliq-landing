import Axios from "axios";

export const AuthAxios = Axios.create({
  baseURL: "https://check-server-api.herokuapp.com/api/v1",
  withCredentials: false,
});
export const BaseAxios = Axios.create({
  baseURL: "https://check-server-api.herokuapp.com/api/v1",
  withCredentials: false,
});

AuthAxios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('authToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
