import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

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
                    <Layout>{children}</Layout>
                </AntdRegistry>
            </body>
        </html>
    );
}
