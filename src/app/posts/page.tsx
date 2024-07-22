import type { Metadata } from "next";
import { PaginationResProps } from "#/request";
import { Button, Card, Space } from "antd";
import Link from "next/link";

export const metadata: Metadata = {
    title: "新闻资讯",
    description: "一个Next.js快速启动模板"
};

interface Props {
    params: {};
    searchParams: {
        page: number;
    };
}

interface PostProps {
    id: number;
    title: string;
    content: string;
}

const getPostRes = async ({ page = 1, size = 10 }): Promise<PaginationResProps<PostProps>> => {
    const res = await fetch(`http://localhost:3000/article?page=${page}&size=${size}`);
    return await res.json();
};

const Posts: React.FC<Props> = async ({ params, searchParams }) => {
    const page = searchParams.page || 1;

    const postRes = await getPostRes({ page, size: 10 });
    const postPagination = postRes.data?.pagination;

    return (
        <div className="page-container py">
            {(postRes.data?.list ?? []).map((item, index) => (
                <Card hoverable className="mb!" key={index}>
                    <Link href={`/posts/${item.id}`} className="text-20px c-#333">
                        {item.title}
                    </Link>
                    <div className="mt">{item.content}</div>
                </Card>
            ))}
            <div className="flex-center pt">
                <Space size="large">
                    <Button type="primary" disabled={!(page > 1)} href={`/posts?page=${Number(page) - 1}`}>
                        上一页
                    </Button>
                    <Space>
                        <div>第{postPagination?.page}页</div>
                        <div>/</div>
                        <div>共{postPagination && Math.ceil(postPagination.total / postPagination.size)}页</div>
                    </Space>
                    <Button
                        type="primary"
                        disabled={!(postPagination && page < Math.ceil(postPagination.total / postPagination.size))}
                        href={`/posts?page=${Number(page) + 1}`}
                    >
                        下一页
                    </Button>
                </Space>
            </div>
        </div>
    );
};

export default Posts;
