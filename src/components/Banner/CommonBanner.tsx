import { Button, Carousel } from "antd";
import type { BannerProps } from "#/settings";

export const CommonBanner: React.FC<{
    className?: string;
    height?: number;
    autoplay?: boolean;
    arrows?: boolean;
    autoplaySpeed?: number;
    draggable?: boolean;
    banners: BannerProps[];
}> = async ({ className = "", arrows = false, autoplay = true, autoplaySpeed = 3000, draggable = true, banners }) => {
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
                    <img className="absolute-tl block wh-100%  object-cover" src={item.imageUrl} />
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
                                {item.description}
                            </div>
                            <Button href={item.linkUrl} type="primary" size="large" className="mt-8">
                                查看详情
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};
