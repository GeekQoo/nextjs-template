import { httpRequest } from "@/utils/request";

// 获取全部幻灯片
export function GET_BANNER_ALL<T = unknown>() {
    return httpRequest<T>("/settings/banner/all", "get", {
        headers: {}
    });
}
