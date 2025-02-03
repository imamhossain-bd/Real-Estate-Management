import { Carousel } from "antd";

const Home = () => {
    return (
        <div>
            <div>
            <Carousel autoplay>
                <div>
                <img src="https://i.ibb.co.com/4RYBj3sd/slide-00.jpg" alt="" />
                </div>
                <div>
                <img className="h-[620px] w-full" src="https://i.ibb.co.com/zWyt9bT4/Veedo-Slider-1-1.jpg" alt="" />
                </div>
                <div>
                <img src="https://i.ibb.co.com/q3p9j87n/slide-02.jpg" alt="" />
                </div>
            </Carousel>
            <h2>Hello</h2>
            </div>
        </div>
    );
};

export default Home;