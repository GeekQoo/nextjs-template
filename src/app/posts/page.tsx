import type { Metadata } from "next";
import { Button, Card, Space, Tag } from "antd";
import Link from "next/link";
import type { PaginationResProps } from "#/request";
import type { SearchParamsProps } from "#/global";
import type { PostProps } from "@/app/posts/type";
import dayjs from "dayjs";
import { GET_POST_LIST } from "@/api/posts";

export const metadata: Metadata = {
    title: "新闻资讯",
    description: "一个Next.js快速启动模板"
};

const getPostRes = async ({ page = 1, size = 10 }) => {
    const res = await GET_POST_LIST<PaginationResProps<PostProps>>({ page, size });
    if (res.data.code === 0 && res.data.data) {
        return res.data.data;
    } else {
        return null;
    }
};

const Posts: React.FC<SearchParamsProps<{ page: number }>> = async ({ searchParams }) => {
    const page = searchParams.page || 1;
    const postRes = await getPostRes({ page, size: 10 });

    if (!postRes) return <div className="page-container py">请求异常，请刷新后重试</div>;

    return (
        <div className="page-container py">
            {(postRes.list ?? []).map((item, index) => (
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
                        <div>第{postRes.pagination.page}页</div>
                        <div>/</div>
                        <div>
                            共{postRes.pagination && Math.ceil(postRes.pagination.total / postRes.pagination.size)}页
                        </div>
                    </Space>
                    <Button
                        type="primary"
                        disabled={
                            !(
                                postRes.pagination &&
                                page < Math.ceil(postRes.pagination.total / postRes.pagination.size)
                            )
                        }
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
