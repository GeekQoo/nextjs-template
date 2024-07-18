import { Carousel } from "antd";
import banner1 from "@/assets/images/banner/banner-1.jpg";
import banner2 from "@/assets/images/banner/banner-2.jpg";

const Home: React.FC = () => {
    return (
        <div>
            <Carousel autoplay>
                <div className="w-100% h-600px">
                    <img className="block wh-100%  object-cover" src={banner1.src} />
                </div>
                <div className="w-100% h-600px">
                    <img className="block wh-100% object-cover" src={banner2.src} />
                </div>
            </Carousel>
            <div className="w-100% h-5000px bg-amber"></div>
        </div>
    );
};

export default Home;
