//Axios.ts
import axios, { InternalAxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

const request: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        console.log(error)
        // 处理请求错误
        return Promise.reject(error);
    },
);

// 添加响应拦截器
request.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: any) => {
        console.log(error)
        // 处理响应错误
        return Promise.reject(error);
    },
);

// export const get = <T>(url: string, config?: InternalAxiosRequestConfig): Promise<T> => {
//     return request.get<T>(url, config).then(response => response.data);
// };
//
// export const post = <T>(url: string, data?: any, config?: InternalAxiosRequestConfig): Promise<T> => {
//     return request.post<T>(url, data, config).then(response => response.data);
// };
export default request;