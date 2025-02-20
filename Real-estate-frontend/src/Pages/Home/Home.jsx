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
import { FaMapMarkerAlt, FaEllipsisV } from "react-icons/fa";

const Home = () => {

    const [advanced, setAdvanced] = useState(false);

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
                <div className="absolute  ml-[20rem] mt-[-10rem] z-50 ">
                    <div className="flex items-center gap-4 py-6 px-8 bg-white shadow-md rounded-lg overflow-hidden">

                        {/* Keyword Input */}
                        <input type="text" placeholder="Enter Keyword..." className="px-7 py-5 w-48 outline-none border-r"/>

                        {/* Property Types Dropdown */}
                        <select className="px-7 py-5 w-48 border-r bg-white">
                            <option>Property Types</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                        </select>

                        {/* Location Input with Icon */}
                        <div className="flex items-center px-4 py-3 w-48 border-r">
                            <FaMapMarkerAlt className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full focus:outline-none"
                            />
                        </div>

                        {/* Price Dropdown */}
                        <select className="px-4 py-3 w-36 border-r bg-white  ">
                            <option>Price</option>
                            <option>$500 - $1000</option>
                            <option>$1000 - $2000</option>
                        </select>

                        {/* Advanced Button */}
                        <button
                            onClick={() => setAdvanced(!advanced)}
                            className="px-4 py-3 w-36 flex items-center justify-between border-r bg-white hover:bg-gray-100 transition"
                        >
                            <span>Advanced</span>
                            <FaEllipsisV className="text-gray-500" />
                        </button>

                        {/* Search Button */}
                        <button className="px-6 py-3 bg-transparent border-2 border-[#ff922c] text-black rounded-lg font-bold hover:bg-[#ff922c] transition">
                            Search
                        </button>
                    </div>

                    {/* Advanced Options Dropdown */}
                    {advanced && (
                        <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-2 p-4 bg-white shadow-lg rounded-lg">
                            <p className="text-sm text-gray-600">More filters coming soon...</p>
                        </motion.div>
                    )}
                </div>
            </div>

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
