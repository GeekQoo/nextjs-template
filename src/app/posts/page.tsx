import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "新闻资讯",
    description: "一个Next.js快速启动模板"
};

const Posts: React.FC = () => {
    return (
        <div className="page-container py">
            <h1>新闻资讯</h1>
            <p>这是一个新闻资讯页面</p>
        </div>
    );
};

export default Posts;
