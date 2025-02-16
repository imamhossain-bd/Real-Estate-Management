import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Popularplace from '../../Component/HomeComponent/Popularplace';
import TodaySellProperty from '../../Component/HomeComponent/TodaySellProperty';
import DashPropertyDetails from '@/Dashboard/DashboardPages/DashboardProperty/DashPropertyDetails';
import { useEffect, useState } from 'react';


const Home = () => {
    return (
        <div className=''>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                speed={1000}
                effect="fade"
                modules={[Autoplay, Pagination, EffectFade]}
                className="mySwiper">

                <SwiperSlide>
                    <div className="relative h-[100vh]">
                        <img src="https://i.ibb.co/TBtdYr4T/slide-00.jpg" alt="" className="zoom-effect w-full h-[100vh]" />
                        <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <h2 className="text-4xl font-bold">Discover Amazing Places</h2>
                            <p className="text-lg mt-2">Explore the world’s best locations with us.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-[100vh]">
                        <img src="https://i.ibb.co/WNS6T9Zv/slide-02.jpg" alt="" className="zoom-effect w-full h-[100vh]" />
                        <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <h2 className="text-4xl font-bold">Experience New Adventures</h2>
                            <p className="text-lg mt-2">Let’s make your next journey unforgettable.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative h-[100vh]">
                        <img src="https://i.ibb.co.com/gLdHjf0p/Veedo-Slider-1-1.jpg" alt="" className="zoom-effect w-full h-[100vh]" />
                        <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <h2 className="text-4xl font-bold">Your Dream Destination Awaits</h2>
                            <p className="text-lg mt-2">Plan your trip with the best travel guides.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div>
                <Popularplace></Popularplace>
            </div>
            <div>
                <TodaySellProperty></TodaySellProperty>
            </div>
            <div className='px-10 mt-9 mb-10'>
                
            </div>
        </div>
    );
};

export default Home;
