interface Props {
    params: { id: string };
}

const PostDetail: React.FC<Props> = ({ params }) => {
    return (
        <div className="page-container py">
            <h1>ID{params.id}</h1>
            <p>这是ID{params.id}文章页面</p>
        </div>
    );
};

export default PostDetail;
