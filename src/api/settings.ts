import { httpRequest } from "@/utils/request";

// 获取全部幻灯片
export function GET_BANNER_ALL<T = unknown>() {
    return httpRequest<T>("/settings/banner/all", "get", {
        headers: {}
    });
}

// 获取全部全局配置项
export function GET_GLOBAL_ALL<T = unknown>() {
    return httpRequest<T>("/settings/global/all", "get", {
        headers: {}
    });
}
