import { CommonBanner } from "@/components/Banner";
import { CommonImageText } from "@/components/ImageText";

const Home: React.FC = () => {
    return (
        <div>
            <CommonBanner />
            <CommonImageText title="图文模块/视频文模块" />
        </div>
    );
};

export default Home;
