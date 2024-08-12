import { GET_POST_BY_ID } from "@/api/posts";
import type { PostProps } from "@/app/posts/type";

interface Props {
    // 公用属性
    className?: string;
    imagePosition?: "left" | "right";
    // 传入该ID可查询指定文章
    postId?: number;
    // 下面参数如果传入则会覆盖文章接口查询到的数据
    title?: string;
    content?: string;
    thumbnail?: string;
}

const Image: React.FC<{
    className?: string;
    src?: string;
}> = ({ className = "", src }) => {
    return (
        <div className={`flex-1 h-250px ${className}`}>
            <img className="block wh-100% object-cover" src={src} />
        </div>
    );
};

export const CommonImageText: React.FC<Props> = async ({
    postId,
    title = "",
    content = "",
    thumbnail = "",
    className = "",
    imagePosition = "left"
}) => {
    const postRes = await GET_POST_BY_ID<PostProps>({ id: Number(postId) });
    const postItem = postRes.data.data;

    if (!postItem) return <div className="page-container py">请求异常，请刷新后重试</div>;

    return (
        <div className={`${className}`}>
            <div className="page-container py-8">
                <div className="mb-8 text-center text-30px c-#333 font-bold">{title ? title : postItem.title}</div>
                <div className="flex-y-center">
                    {imagePosition === "left" && (
                        <Image className="mr-8" src={thumbnail ? thumbnail : postItem.thumbnail} />
                    )}
                    <div className="flex-1 lh-32px text-16px c-#333">{content ? content : postItem.summary}</div>
                    {imagePosition === "right" && (
                        <Image className="ml-8" src={thumbnail ? thumbnail : postItem.thumbnail} />
                    )}
                </div>
            </div>
        </div>
    );
};
