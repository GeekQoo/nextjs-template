import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "关于我们",
    description: "一个Next.js快速启动模板"
};

const About: React.FC = () => {
    return (
        <div className="page-container py h-10000px">
            <h1>关于我们</h1>
            <p>这是一个关于我们页面</p>
        </div>
    );
};

export default About;
