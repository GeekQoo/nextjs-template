import type { Metadata } from "next";
import { Button, Card, Space, Tag } from "antd";
import Link from "next/link";
import type { PaginationResProps } from "#/request";
import type { SearchParamsProps } from "#/global";
import type { PostProps } from "@/app/posts/type";
import dayjs from "dayjs";

export const metadata: Metadata = {
    title: "新闻资讯",
    description: "一个Next.js快速启动模板"
};

const getPostRes = async ({ page = 1, size = 10 }): Promise<PaginationResProps<PostProps>> => {
    const res = await fetch(`http://localhost:3000/article?page=${page}&size=${size}`);
    return await res.json();
};

const Posts: React.FC<
    SearchParamsProps<{
        page: number; // 当前页码
    }>
> = async ({ searchParams }) => {
    const page = searchParams.page || 1;

    const postRes = await getPostRes({ page, size: 10 });
    const postPagination = postRes.data?.pagination;

    return (
        <div className="page-container py">
            {(postRes.data?.list ?? []).map((item, index) => (
                <Card hoverable className="mb!" key={index}>
                    <div className="flex ">
                        {item.thumbnail && (
                            <Link href={`/posts/${item.id}`} className="block mr flex-fixed-320 h-180px">
                                <img className="block wh-100%  object-cover" src={item.thumbnail} />
                            </Link>
                        )}
                        <div className="relative">
                            <Link href={`/posts/${item.id}`} className="text-20px c-#333">
                                {item.title}
                            </Link>
                            <Link href={`/posts/${item.id}`} className="block mt text-14px c-#333">
                                {item.summary}
                            </Link>
                            <div className="absolute-bl w-100% flex-y-center">
                                <Tag color="success">{item.category?.categoryName}</Tag>
                                <div className="ml-a text-12px c-#999">
                                    发布于{dayjs(item.createdAt).format("YYYY-MM-DD ")}
                                </div>
                            </div>
                        </div>
                    </div>
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
