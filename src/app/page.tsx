import { CommonBanner } from "@/components/Banner";
import { CommonImageText, ProductImageText } from "@/components/ImageText";
import { GET_BANNER_ALL } from "@/api/settings";
import type { BannerProps } from "#/settings";

const Home: React.FC = async () => {
    const bannerRes = await GET_BANNER_ALL<BannerProps[]>();
    const banners = bannerRes.data.data ?? [];

    return (
        <div>
            {banners && banners.length > 0 && <CommonBanner banners={banners} />}
            <ProductImageText categoryId={13} />
            <CommonImageText className="bg-#fff" postId={7} />
            <CommonImageText postId={8} />
        </div>
    );
};

export default Home;
