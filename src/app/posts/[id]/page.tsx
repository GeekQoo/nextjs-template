import { ResProps } from "#/request";

interface Props {
    params: { id: string };
}

interface PostProps {
    id: number;
    title: string;
    content: string;
}

const getPostRes = async (params: { id: string | number }): Promise<ResProps<PostProps>> => {
    const res = await fetch(`http://localhost:3000/article/${params.id}`);
    return await res.json();
};

const PostDetail: React.FC<Props> = async ({ params }) => {
    const postRes = await getPostRes({ id: params.id });
    const postItem = postRes.data;

    return (
        <div className="page-container py">
            <h1>{postItem?.title}</h1>
            <p className="mt">{postItem?.content}文章页面</p>
        </div>
    );
};

export default PostDetail;
