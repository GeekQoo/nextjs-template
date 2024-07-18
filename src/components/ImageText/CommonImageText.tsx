import banner2 from "@/assets/images/banner/banner-2.jpg";

interface Props {
    className?: string;
    title?: string;
    imagePosition?: "left" | "right";
}

const Image: React.FC<Props> = ({ className = "" }) => {
    return (
        <div className={`flex-1 h-250px ${className}`}>
            <img className="block wh-100% object-cover" src={banner2.src} />
        </div>
    );
};

export const CommonImageText: React.FC<Props> = ({ className = "", imagePosition = "left", title }) => {
    return (
        <div className={`page-container py-8 ${className}`}>
            {title && <div className="mb-8 text-center text-30px c-#333 font-bold">{title}</div>}
            <div className="flex-y-center">
                {imagePosition === "left" && <Image className="mr-8" />}
                <div className="flex-1 lh-32px text-16px c-#333">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <span key={index}>左边用来展示图片或者视频，右边用来放文字描述，左右可以按需调整</span>
                    ))}
                </div>
                {imagePosition === "right" && <Image className="ml-8" />}
            </div>
        </div>
    );
};
