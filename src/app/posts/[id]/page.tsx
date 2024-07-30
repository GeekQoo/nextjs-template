import type { ResProps } from "#/request";
import type { RouteParamsProps } from "#/global";
import type { PostProps } from "@/app/posts/type";
import { Card } from "antd";

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
            <Card hoverable>
                <h1 className="text-24px font-bold">{postItem?.title}</h1>
                <div className="mt richText-container" dangerouslySetInnerHTML={{ __html: postItem?.content! }}></div>
            </Card>
        </div>
    );
};

export default PostDetail;
