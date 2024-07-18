import { Button, Carousel } from "antd";
import banner1 from "@/assets/images/banner/banner-1.jpg";
import banner2 from "@/assets/images/banner/banner-2.jpg";

interface Props {
    className?: string;
    height?: number;
    autoplay?: boolean;
    arrows?: boolean;
    autoplaySpeed?: number;
    draggable?: boolean;
}

export const CommonBanner: React.FC<Props> = ({
    className = "",
    arrows = false,
    autoplay = true,
    autoplaySpeed = 3000,
    draggable = true
}) => {
    let banners = [
        { src: banner1.src, title: "MacBook Air", desc: "玩转工作创作和娱乐" },
        { src: banner2.src, title: "DJI Mini3 Pro", desc: "小巧便携，航拍利器" }
    ];
    return (
        <Carousel
            className={className}
            autoplay={autoplay}
            arrows={arrows}
            autoplaySpeed={autoplaySpeed}
            draggable={draggable}
        >
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
    );
};
