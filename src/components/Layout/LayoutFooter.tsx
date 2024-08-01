import React from "react";
import { Col, Divider, Row, Space, Tag } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { BilibiliOutlined, QqOutlined, TikTokOutlined, WechatOutlined, WechatWorkOutlined } from "@ant-design/icons";
import policeIcon from "@/assets/images/icon/beian.png";

export const LayoutFooter: React.FC = () => {
    return (
        <div className="layout-footer bg-#fff">
            <div className="page-container">
                <Row className="py-8">
                    <Col className="b-r-1px b-r-solid b-r-#f0f0f0" span={5}>
                        <div className="wh-100% flex-center">
                            <div className="p-4 b-rd-10px c-#333">
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
                            <div className="mb-6 c-#666">菜单名一</div>
                            {[1, 2, 3].map((item, index) => (
                                <Link key={index} className="mt first:mt-0 block c-#333" href="https://www.github.com">
                                    菜单导航
                                </Link>
                            ))}
                        </div>
                    </Col>
                    <Col className="b-r-1px b-r-solid b-r-#f0f0f0" span={6}>
                        <div className="text-center text-14px">
                            <div className="mb-6 c-#666">菜单名一</div>
                            {[1, 2, 3].map((item, index) => (
                                <Link key={index} className="mt first:mt-0 block c-#333" href="https://www.github.com">
                                    菜单导航
                                </Link>
                            ))}
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className="flex flex-col justify-center h-100%">
                            <div className="flex justify-end">
                                <Space>
                                    <div className="wh-40px b-rd-50% bg-#0082EF flex-center text-20px c-#fff cursor-pointer">
                                        <WechatWorkOutlined />
                                    </div>
                                    <div className="wh-40px b-rd-50% bg-#2aae67 flex-center text-20px c-#fff cursor-pointer">
                                        <WechatOutlined />
                                    </div>
                                    <div className="wh-40px b-rd-50% bg-#09f flex-center text-20px c-#fff cursor-pointer">
                                        <QqOutlined />
                                    </div>
                                    <div className="wh-40px b-rd-50% bg-#000 flex-center text-20px c-#fff cursor-pointer">
                                        <TikTokOutlined />
                                    </div>
                                    <div className="wh-40px b-rd-50% bg-#fb7299 flex-center text-20px c-#fff cursor-pointer">
                                        <BilibiliOutlined />
                                    </div>
                                </Space>
                            </div>
                            <div className="text-right mt">联系电话：021-12345678 / 13XXXXXXXXX</div>
                            <div className="text-right mt">联系地址：上海市浦东新区测试写字楼A栋1001室内</div>
                        </div>
                    </Col>
                </Row>
                <Divider className="m-0!" />
                <div className="flex-center lh-65px">
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
