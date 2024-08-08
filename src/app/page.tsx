import { CommonBanner } from "@/components/Banner";
import { SingleLineImageText } from "@/components/ImageText";
import { GET_BANNER_ALL } from "@/api/settings";
import type { BannerProps } from "#/settings";

const Home: React.FC = async () => {
    const bannerRes = await GET_BANNER_ALL<BannerProps[]>();
    const banners = bannerRes.data.data ?? [];

    return (
        <div>
            {banners && banners.length > 0 && <CommonBanner banners={banners} />}
            <SingleLineImageText className="bg-#fff" postId={7} />
            <SingleLineImageText postId={8} />
        </div>
    );
};

export default Home;
