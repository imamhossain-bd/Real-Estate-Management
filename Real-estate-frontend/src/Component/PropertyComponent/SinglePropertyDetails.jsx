import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const SinglePropertyDetails = ({}) => {


    
    return (
        <div>
            <div className='px-16 py-9'>
                <div className='mt-7 mb-7'>
                    <h2 className='text-lg font-semibold'>Home / Property / <span className='text-[#ff411b]'>Single Property</span></h2>
                    <h1 className='text-3xl font-bold mt-3'>Single Property</h1>
                </div>
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
                    className="mySwiper rounded-lg">

                    <SwiperSlide>
                        <div className="relative h-[100vh]">
                            <img src="https://i.ibb.co/TBtdYr4T/slide-00.jpg" alt="" className="zoom-effect w-full h-[100vh]" />
                            <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-[100vh]">
                            <img src="https://i.ibb.co/WNS6T9Zv/slide-02.jpg" alt="" className="zoom-effect w-full h-[100vh]" />
                            <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-[100vh]">
                            <img src="https://i.ibb.co.com/gLdHjf0p/Veedo-Slider-1-1.jpg" alt="" className="zoom-effect w-full h-[100vh]" />
                            <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='flex mt-8 gap-5 items-center'>
                    <div className='bg-slate-400 px-3 py-4 rounded-md w-full'>
                        <h2>hello</h2>
                    </div>
                    <div className='max-w-md bg-slate-400 rounded-md px-4 py-4'>
                        <h2>Hello</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePropertyDetails;