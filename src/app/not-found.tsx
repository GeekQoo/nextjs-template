import { Button, Result } from "antd";

export default function NotFound() {
    return (
        <div
            className="flex-center"
            style={{
                height: "calc(100vh - 60px)"
            }}
        >
            <Result
                status="404"
                title="404"
                subTitle="抱歉，您访问的页面不存在。"
                extra={
                    <Button type="primary" href="/">
                        返回首页
                    </Button>
                }
            />
        </div>
    );
}
