import React from "react";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { LayoutHeader } from "@/components/Layout";
import "@/styles/global.scss";

export const metadata: Metadata = {
    title: "nextjs-template",
    description: "一个Next.js快速启动模板"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
            <body>
                <AntdRegistry>
                    <LayoutHeader />
                    <div className="pt-60px">{children}</div>
                </AntdRegistry>
            </body>
        </html>
    );
}
