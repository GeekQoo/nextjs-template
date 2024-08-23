import type { Metadata } from "next";
import { Button, Card, Space, Tag } from "antd";
import Link from "next/link";
import type { PaginationResProps } from "#/request";
import { PageParamsProps, type RouteParamsProps } from "#/global";
import { PostProps, PostsCategoryProps } from "@/app/posts/type";
import dayjs from "dayjs";
import { GET_CATEGORY_BY_ID, GET_POST_LIST } from "@/api/posts";

// 获取文章数据
const getPostRes = async ({
    page = 1,
    size = 10,
    categoryId
}: {
    page: number;
    size: number;
    categoryId: number | null;
}) => {
    const res = await GET_POST_LIST<PaginationResProps<PostProps>>({ page, size, categoryId });
    return res.data.code === 0 && res.data.data ? res.data.data : null;
};

// 查询文章分类信息
const getCategoryRes = async (params: { id: number }) => {
    const res = await GET_CATEGORY_BY_ID<PostsCategoryProps>(params);
    return res.data.code === 0 && res.data.data ? res.data.data : null;
};

export async function generateMetadata({ params }: RouteParamsProps<{ id: string }>): Promise<Metadata> {
    const categoryRes = await getCategoryRes({ id: Number(params.id) });
    return { title: categoryRes?.categoryName };
}

const PostsCategory: React.FC<PageParamsProps<{ id: string }, { page: number }>> = async ({ searchParams, params }) => {
    const page = searchParams.page || 1;
    const postRes = await getPostRes({ page, size: 10, categoryId: params.id ? Number(params.id) : null });

    if (!postRes) return <div className="page-container py">请求异常，请刷新后重试</div>;

    const tagColors = [
        "processing",
        "success",
        "error",
        "warning",
        "magenta",
        "red",
        "volcano",
        "orange",
        "gold",
        "lime",
        "green",
        "cyan",
        "blue",
        "geekblue",
        "purple"
    ];

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
                        <div className="relative flex-1">
                            <Link href={`/posts/${item.id}`} className="text-20px c-#333">
                                {item.title}
                            </Link>
                            <Link href={`/posts/${item.id}`} className="block mt text-14px c-#333">
                                {item.summary}
                            </Link>
                            <div className="absolute-bl w-100% flex-y-center">
                                <Space className="mr-a">
                                    {(item.tags ?? []).map((item, index) => (
                                        <Tag className="m-0!" key={index} color={tagColors[index % tagColors.length]}>
                                            {item.tagName}
                                        </Tag>
                                    ))}
                                </Space>
                                <div className="text-12px c-#333">{item.category?.categoryName}</div>
                                <div className="ml text-12px c-#999">
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

export default PostsCategory;
