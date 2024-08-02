import { httpRequest } from "@/utils/request";

// 获取文章列表
export function GET_POST_LIST<T = unknown>(params: Record<string, unknown>) {
    return httpRequest<T>("/article", "get", {
        params,
        headers: {}
    });
}

// 通过ID查询文章
export function GET_POST_BY_ID<T = unknown>(params: Record<string, unknown>) {
    return httpRequest<T>(`/article/${params.id}`, "get", {
        headers: {}
    });
}
