import { CommonBanner } from "@/components/Banner";
import { CommonImageText } from "@/components/ImageText";
import { GET_BANNER_ALL } from "@/api/settings";
import type { BannerProps } from "#/settings";

const getBannerRes = async () => {
    const res = await GET_BANNER_ALL<BannerProps[]>();
    return res.data.data ?? [];
};

const Home: React.FC = async () => {
    const bannerRes = await getBannerRes();

    return (
        <div>
            {bannerRes && bannerRes.length > 0 && <CommonBanner banners={bannerRes} />}
            <CommonImageText title="图文模块/视频文模块" />
        </div>
    );
};

export default Home;
