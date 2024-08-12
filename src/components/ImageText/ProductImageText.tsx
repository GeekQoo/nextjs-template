import type { PostProps } from "@/app/posts/type";
import { GET_POST_LIST } from "@/api/posts";
import type { PaginationResProps } from "#/request";
import { Card, Col, Row } from "antd";

interface Props {
    // 公用属性
    className?: string;
    title?: string;
}

export const ProductImageText: React.FC<Props> = async ({ title, className }) => {
    const postRes = await GET_POST_LIST<PaginationResProps<PostProps>>({ page: 1, size: 2 });
    const postList = postRes.data.data?.list ?? [];

    return (
        <div className={`${className}`}>
            <div className="page-container py-8">
                <div className="mb-8 text-center text-30px c-#333 font-bold">{title ?? "产品中心"}</div>
                <Row gutter={16}>
                    {postList.map((item, index) => (
                        <Col key={index} span={12}>
                            <Card hoverable>
                                <div className="mb">
                                    <div className="text-center text-24px font-bold c-#333 text-ellipsis-1">
                                        {item.title}
                                    </div>
                                    <div className="mt lh-24px text-16px c-#666 text-ellipsis-2">{item.summary}</div>
                                    <div className="mt text-center">
                                        <a className="text-16px c-#1890ff b-b-1px b-b-solid b-b-#1890ff">查看详情</a>
                                    </div>
                                </div>
                                <img className="w-100% h-300px object-cover" src={item.thumbnail} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};
