"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Space } from "antd";
import Link from "next/link";
import type { SettingsGlobalProps } from "#/settings";

export const LayoutHeader: React.FC<{ settings: SettingsGlobalProps[] }> = ({ settings }) => {
    const pathname = usePathname();

    const menus = [
        { name: "首页", path: "/" },
        { name: "新闻动态", path: "/posts" },
        { name: "关于我们", path: "/about" }
    ];

    const [headerAnimation, setHeaderAnimation] = useState("translate-y-none");

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop > lastScrollTop) {
                setHeaderAnimation("translate-y--60px");
            } else {
                setHeaderAnimation("translate-y-none");
            }

            lastScrollTop = scrollTop;
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 通过全局配置项key获取value
    const getValueByKey = (settings: SettingsGlobalProps[], key: string) => {
        const setting = settings.find((item) => item.key === key);
        return setting?.value;
    };

    return (
        <div className={`layout-header fixed w-100% z-999 h-60px shadow transition-all-300 bg-#fff ${headerAnimation}`}>
            <div className="page-container flex-y-center">
                <div className="h-60px py-10px flex-y-center">
                    <img
                        className="block h-100%"
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                    <div className="ml-2 text-20px">{getValueByKey(settings, "title")}</div>
                </div>
                <Space size="large" className="ml-a">
                    {menus.map((item, index) => (
                        <Link
                            key={index}
                            className={`block text-16px ${pathname === item.path || (pathname.includes(item.path) && item.path !== "/") ? "c-#1890ff" : "c-#333"} cursor-pointer transition hover:c-#1890ff`}
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    ))}
                </Space>
            </div>
        </div>
    );
};
