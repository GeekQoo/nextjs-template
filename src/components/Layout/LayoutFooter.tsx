import React from "react";
import { Space } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import policeIcon from "@/assets/images/icon/beian.png";

export const LayoutFooter: React.FC = () => {
    return (
        <div className="layout-footer bg-#fff p-xy">
            <div className="page-container">
                <div className="flex-center">
                    <Space size={16}>
                        <div className="text-14px c-#333">Copyright © {dayjs().format("YYYY")} NEXTJS-TEMPLATE</div>
                        <Link
                            className="block text-14px c-#333"
                            target="_blank"
                            href="https://beian.mps.gov.cn/#/query/webSearch"
                        >
                            测ICP备12345678号-1
                        </Link>
                        <Link className=" block text-14px c-#333" target="_blank" href="https://beian.miit.gov.cn/">
                            <div className="flex-y-center">
                                <img className="h-18px block" src={policeIcon.src} alt="公安备案" />
                                <div className="ml-1">测公网安备 0123456789123号</div>
                            </div>
                        </Link>
                    </Space>
                </div>
            </div>
        </div>
    );
};
