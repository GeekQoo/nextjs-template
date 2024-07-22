/*
 * 常见复用类型
 */
declare type UnKnownObject = Record<string, unknown>;

declare type AnyObject = Record<string, any>;

declare type Nullable<T> = T | null;

/*
 * 页面参数类型
 * T: 路由参数类型
 * K: 查询参数类型
 */
export interface RouteParamsProps<T> {
    params: T;
}

export interface SearchParamsProps<K> {
    searchParams: K;
}

export interface PageParamsProps<T, K> extends RouteParamsProps<T>, SearchParamsProps<K> {}