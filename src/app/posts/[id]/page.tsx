import type { ResProps } from "#/request";
import type { RouteParamsProps } from "#/global";
import type { PostProps } from "@/app/posts/type";

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
            <h1>{postItem?.title}</h1>
            <p className="mt">{postItem?.content}文章页面</p>
        </div>
    );
};

export default PostDetail;
