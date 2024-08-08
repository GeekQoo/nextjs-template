import React from "react";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { LayoutHeader, LayoutFooter } from "@/components/Layout";
import "@/styles/global.scss";
import { GET_GLOBAL_ALL } from "@/api/settings";
import { SettingsGlobalProps } from "#/settings";

export const metadata: Metadata = {
    title: "nextjs-template",
    description: "一个Next.js快速启动模板"
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    // 获取全局配置项
    const settingsRes = await GET_GLOBAL_ALL<SettingsGlobalProps[]>();
    const settings = settingsRes.data.data ?? [];

    return (
        <html lang="zh-CN">
            <body>
                <AntdRegistry>
                    <LayoutHeader settings={settings} />
                    <div
                        className="pt-60px"
                        style={{
                            minHeight: "calc(100vh - 270px)"
                        }}
                    >
                        {children}
                    </div>
                    <LayoutFooter theme="dark" settings={settings} />
                </AntdRegistry>
            </body>
        </html>
    );
}
