/*
 * 幻灯片类型
 */
export interface BannerProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    sort: number;
}

/*
 * 全局设置类型
 */
export interface SettingsGlobalProps {
    id: number;
    name: string;
    key: string;
    value: string;
    sort: number;
}
