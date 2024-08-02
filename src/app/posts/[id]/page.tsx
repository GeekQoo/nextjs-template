import type { RouteParamsProps } from "#/global";
import type { PostProps } from "@/app/posts/type";
import { Card, Divider, Space } from "antd";
import dayjs from "dayjs";
import { GET_POST_BY_ID } from "@/api/posts";

const getPostRes = async (params: { id: number }) => {
    const res = await GET_POST_BY_ID<PostProps>(params);
    if (res.data.code === 0 && res.data.data) {
        return res.data.data;
    } else {
        return null;
    }
};

const PostDetail: React.FC<RouteParamsProps<{ id: string }>> = async ({ params }) => {
    const postRes = await getPostRes({ id: Number(params.id) });

    if (!postRes) return <div className="page-container py">请求异常，请刷新后重试</div>;

    return (
        <div className="page-container py">
            <Card>
                <div>
                    <h1 className="text-24px font-bold">{postRes?.title}</h1>
                    <Space size={16} className="mt">
                        <div>发布时间：{dayjs(postRes?.createdAt).format("YYYY-MM-DD ")}</div>
                        <div>所属分类：{postRes?.category.categoryName}</div>
                    </Space>
                    <Divider />
                </div>
                <div className="mt richText-container" dangerouslySetInnerHTML={{ __html: postRes?.content! }}></div>
            </Card>
        </div>
    );
};

export default PostDetail;
