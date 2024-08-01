import React from "react";
import { Col, Row, Space } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { BilibiliOutlined, QqOutlined, TikTokOutlined, WechatOutlined, WechatWorkOutlined } from "@ant-design/icons";
import policeIcon from "@/assets/images/icon/beian.png"; // 联系按钮

// 联系按钮
const ContactButton: React.FC<{
    color: string;
    icon: React.ReactNode;
}> = (props) => {
    return (
        <div
            className="wh-40px b-rd-50%  flex-center text-20px c-#fff cursor-pointer"
            style={{
                background: props.color
            }}
        >
            {props.icon}
        </div>
    );
};

export const LayoutFooter: React.FC<{ theme?: "light" | "dark" }> = ({ theme = "light" }) => {
    return (
        <div
            className="layout-footer "
            style={{
                background: theme === "light" ? "#fff" : "#1f2329"
            }}
        >
            <div className="page-container">
                <Row className="py-8">
                    <Col className="b-r-1px b-r-solid b-r-#f9f9f9" span={5}>
                        <div className="wh-100% flex-center">
                            <div
                                className="p-4 b-rd-10px"
                                style={{
                                    color: theme === "light" ? "#333" : "#fff"
                                }}
                            >
                                <div className="h-60px flex-center">
                                    <img
                                        className="block h-100%"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                                    />
                                </div>
                                <div className="mt-2 text-20px">Next.js template</div>
                            </div>
                        </div>
                    </Col>
                    <Col className="b-r-1px b-r-solid b-r-#f0f0f0" span={6}>
                        <div className="text-center text-14px">
                            <div className="mb-6 c-#7b7181">菜单名一</div>
                            {[1, 2, 3].map((item, index) => (
                                <Link
                                    key={index}
                                    className="mt first:mt-0 block hover:c-#7b7181"
                                    style={{
                                        color: theme === "light" ? "#333" : "#fff"
                                    }}
                                    href="https://www.github.com"
                                >
                                    菜单导航
                                </Link>
                            ))}
                        </div>
                    </Col>
                    <Col className="b-r-1px b-r-solid b-r-#f0f0f0" span={6}>
                        <div className="text-center text-14px">
                            <div className="mb-6 c-#7b7181">菜单名一</div>
                            {[1, 2, 3].map((item, index) => (
                                <Link
                                    key={index}
                                    className="mt first:mt-0 block hover:c-#7b7181!"
                                    style={{
                                        color: theme === "light" ? "#333" : "#fff"
                                    }}
                                    href="https://www.github.com"
                                >
                                    菜单导航
                                </Link>
                            ))}
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className="flex flex-col justify-center h-100%">
                            <div className="flex justify-end">
                                <Space>
                                    <ContactButton icon={<WechatWorkOutlined />} color="#0082EF" />
                                    <ContactButton icon={<WechatOutlined />} color="#2aae67" />
                                    <ContactButton icon={<QqOutlined />} color="#09f" />
                                    <ContactButton icon={<TikTokOutlined />} color="#000" />
                                    <ContactButton icon={<BilibiliOutlined />} color="#fb7299" />
                                </Space>
                            </div>
                            <div
                                className="text-right text-14px mt"
                                style={{
                                    color: theme === "light" ? "#333" : "#fff"
                                }}
                            >
                                联系电话：021-12345678 / 13XXXXXXXXX
                            </div>
                            <div
                                className="text-right text-14px mt"
                                style={{
                                    color: theme === "light" ? "#333" : "#fff"
                                }}
                            >
                                联系地址：上海市浦东新区测试写字楼A栋1001室内
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="flex-center lh-65px b-t-1px b-t-solid b-t-#f0f0f0">
                    <Space size={16}>
                        <div
                            className="text-14px"
                            style={{
                                color: theme === "light" ? "#333" : "#fff"
                            }}
                        >
                            Copyright © {dayjs().format("YYYY")} NEXTJS-TEMPLATE
                        </div>
                        <Link
                            className="block text-14px"
                            style={{
                                color: theme === "light" ? "#333" : "#fff"
                            }}
                            target="_blank"
                            href="https://beian.mps.gov.cn/#/query/webSearch"
                        >
                            测ICP备12345678号-1
                        </Link>
                        <Link
                            className=" block text-14px "
                            style={{
                                color: theme === "light" ? "#333" : "#fff"
                            }}
                            target="_blank"
                            href="https://beian.miit.gov.cn/"
                        >
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
