"use client";

import React, { useEffect, useState } from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [headerStyle, setHeaderStyle] = useState({
        transform: "none"
    } as React.CSSProperties);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 0) {
                setHeaderStyle({ transform: "translateY(-100px) translateZ(0px)" });
            } else {
                setHeaderStyle({ transform: "none" });
            }
        });
    }, []);

    return (
        <div>
            <div className="layout-header fixed w-100% z-999 bg-#fff h-60px shadow transition" style={headerStyle}>
                12345
            </div>
            <div className="layout-content pt-60px">{children}</div>
        </div>
    );
};
