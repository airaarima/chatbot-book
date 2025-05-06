import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const v1 = "/api/v1";

// const API_URL = process.env.API_URL as string; // TODO: em breve alterarei isso
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const TOKEN_KEY = "@chat-book";

export const api: AxiosInstance = axios.create({
  baseURL: `${API_URL}${v1}`,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
