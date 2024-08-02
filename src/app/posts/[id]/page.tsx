import type { RouteParamsProps } from "#/global";
import type { PostProps } from "@/app/posts/type";
import { Card, Divider, Space, Tag } from "antd";
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
            <Card>
                <div>
                    <h1 className="text-24px font-bold">{postRes?.title}</h1>
                    <Space size={16} className="mt">
                        <div>发布时间：{dayjs(postRes?.createdAt).format("YYYY-MM-DD ")}</div>
                        <div>所属分类：{postRes?.category.categoryName}</div>
                        <div className="flex-y-center">
                            <div>所属标签：</div>
                            <Space>
                                {(postRes?.tags ?? []).map((item, index) => (
                                    <Tag className="m-0!" key={index} color={tagColors[index % tagColors.length]}>
                                        {item.tagName}
                                    </Tag>
                                ))}
                            </Space>
                        </div>
                    </Space>
                    <Divider />
                </div>
                <div className="mt richText-container" dangerouslySetInnerHTML={{ __html: postRes?.content! }}></div>
            </Card>
        </div>
    );
};

export default PostDetail;
