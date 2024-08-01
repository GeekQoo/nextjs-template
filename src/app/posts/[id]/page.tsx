import type { ResProps } from "#/request";
import type { RouteParamsProps } from "#/global";
import type { PostProps } from "@/app/posts/type";
import { Card, Divider, Space } from "antd";
import dayjs from "dayjs";

const getPostRes = async (params: { id: number }): Promise<ResProps<PostProps>> => {
    const res = await fetch(`http://localhost:3000/article/${params.id}`);
    return await res.json();
};

const PostDetail: React.FC<
    RouteParamsProps<{
        id: string; // 文章ID
    }>
> = async ({ params }) => {
    const postRes = await getPostRes({ id: Number(params.id) });
    const postItem = postRes.data;

    return (
        <div className="page-container py">
            <Card>
                <div>
                    <h1 className="text-24px font-bold">{postItem?.title}</h1>
                    <Space size={16} className="mt">
                        <div>发布时间：{dayjs(postItem?.createdAt).format("YYYY-MM-DD ")}</div>
                        <div>所属分类：{postItem?.category.categoryName}</div>
                    </Space>
                    <Divider />
                </div>
                <div className="mt richText-container" dangerouslySetInnerHTML={{ __html: postItem?.content! }}></div>
            </Card>
        </div>
    );
};

export default PostDetail;
