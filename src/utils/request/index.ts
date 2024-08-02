import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, Method } from "axios";
import axios from "axios";
import { checkStatus } from "./checkStatus";

interface ResponseProps<T = unknown> {
    code: number;
    data?: T;
    msg?: string;
    total?: number | null;

    [key: string]: unknown;
}

let service: AxiosInstance = axios.create({
    timeout: 30000,
    withCredentials: true,
    baseURL: "http://localhost:3000"
});

// 请求拦截
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => config,
    (error) => Promise.reject(error)
);

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse<ResponseProps>) => response,
    (error) => {
        checkStatus(error?.response?.status, error?.response?.statusText);
        return Promise.reject(error.response);
    }
);

// 请求封装
export function httpRequest<T>(
    url: string,
    method: Method,
    config?: Record<string, unknown>
): Promise<AxiosResponse<ResponseProps<T>>> {
    return service({
        url,
        method,
        ...config
    });
}
