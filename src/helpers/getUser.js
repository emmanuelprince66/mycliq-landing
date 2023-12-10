import axios from "axios";
import { AuthAxios } from "./axiosInstance";
export const getUser = async (token) => {
  const user = await AuthAxios({
    url: "/user",
    method: "GET",
  });
  return user?.data;
};
