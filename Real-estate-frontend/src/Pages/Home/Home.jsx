import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Popularplace from '../../Component/HomeComponent/Popularplace';
import TodaySellProperty from '../../Component/HomeComponent/TodaySellProperty';
import DashPropertyDetails from '@/Dashboard/DashboardPages/DashboardProperty/DashPropertyDetails';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import AllProperty from '@/Component/HomeComponent/AllProperty';
import RecentPost from '@/Component/HomeComponent/RecentPost';
import PropertyProcess from '@/Component/HomeComponent/PropertyProcess';
import ApartmentMap from '@/Component/HomeComponent/ApartmentMap';
import OurClient from '@/Component/HomeComponent/OurClient';


const Home = () => {


    
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });


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

            <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div>
                <TodaySellProperty></TodaySellProperty>
            </div>
            </motion.div>

            <div className='px-10 mt-9 mb-10'>
                <AllProperty></AllProperty>
            </div>

            <div>
                <RecentPost></RecentPost>
            </div>

            <div>
                <PropertyProcess></PropertyProcess>
            </div>

            <div>
                <ApartmentMap></ApartmentMap>
            </div>

            <div>
                <OurClient></OurClient>
            </div>
        </div>
    );
};

export default Home;
