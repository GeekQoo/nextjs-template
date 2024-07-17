"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Space } from "antd";
import Link from "next/link";

// LOGO
const HeaderLogo = () => {
    return (
        <div className="h-60px py-10px flex-y-center">
            <img className="block h-100%" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            <div className="ml-2 text-20px">Next.js template</div>
        </div>
    );
};

// 菜单
const HeaderMenu = () => {
    const pathname = usePathname();

    const menus = [
        { name: "首页", path: "/" },
        { name: "新闻动态", path: "/news" },
        { name: "关于我们", path: "/about" }
    ];

    return (
        <Space size="large" className="ml-a">
            {menus.map((item, index) => (
                <Link
                    key={index}
                    className={`block text-16px ${pathname === item.path ? "c-#1890ff" : "c-#333"} cursor-pointer transition hover:c-#1890ff`}
                    href={item.path}
                >
                    {item.name}
                </Link>
            ))}
        </Space>
    );
};

export const LayoutHeader: React.FC = () => {
    const [headerStyle, setHeaderStyle] = useState({
        transform: "none"
    } as React.CSSProperties);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > lastScrollTop) {
                setHeaderStyle({ transform: "translateY(-60px)" });
            } else {
                setHeaderStyle({ transform: "none" });
            }
            lastScrollTop = scrollTop;
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="layout-header fixed w-100% z-999 bg-#fff h-60px shadow transition-all-300 " style={headerStyle}>
            <div className="page-container flex-y-center">
                <HeaderLogo />
                <HeaderMenu />
            </div>
        </div>
    );
};
