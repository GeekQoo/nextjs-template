import type { Metadata } from "next";
import { Card, Divider, Space, Tag } from "antd";
import { GET_GLOBAL_ALL } from "@/api/settings";
import { SettingsGlobalProps } from "#/settings";
import dayjs from "dayjs";

export const metadata: Metadata = {
    title: "关于我们",
    description: "一个Next.js快速启动模板"
};

const About: React.FC = async () => {
    // 获取全局配置项
    const settingsRes = await GET_GLOBAL_ALL<SettingsGlobalProps[]>();
    const settings = settingsRes.data.data ?? [];
    const settingAbout = settings.find((item) => item.key === "about")?.value ?? "";

    return (
        <div className="page-container py">
            <Card>
                <div>
                    <h1 className="text-24px font-bold">关于我们</h1>
                    <Divider />
                </div>
                <div className="mt richText-container" dangerouslySetInnerHTML={{ __html: settingAbout }}></div>
            </Card>
        </div>
    );
};

export default About;
