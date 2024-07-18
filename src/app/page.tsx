import { Button, Carousel } from "antd";
import banner1 from "@/assets/images/banner/banner-1.jpg";
import banner2 from "@/assets/images/banner/banner-2.jpg";

const Home: React.FC = () => {
    let banners = [
        { src: banner1.src, title: "MacBook Air", desc: "玩转工作创作和娱乐" },
        { src: banner2.src, title: "DJI Mini3 Pro", desc: "小巧便携，航拍利器" }
    ];

    return (
        <div>
            <Carousel autoplay>
                {banners.map((item, index) => (
                    <div key={index} className="w-100% h-600px relative select-none">
                        <img className="absolute-tl block wh-100%  object-cover" src={item.src} />
                        <div className="absolute-tl block wh-100% z-9 flex-center! bg-[rgba(0,0,0,0.05)]">
                            <div className="text-center c-#fff">
                                <div className="text-60px font-bold">{item.title}</div>
                                <div
                                    className="text-20px font-bold"
                                    style={{
                                        letterSpacing: "23px",
                                        textIndent: "23px"
                                    }}
                                >
                                    {item.desc}
                                </div>
                                <Button type="primary" size="large" className="mt-8">
                                    查看详情
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Home;
