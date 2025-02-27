import { API_HOST } from "@/lib/constants";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_HOST,
  headers: {
    Accept: "application/json",
    Authorization: "Bearer" + " " + localStorage.getItem("token") || "",
  }
})

export default apiClient;