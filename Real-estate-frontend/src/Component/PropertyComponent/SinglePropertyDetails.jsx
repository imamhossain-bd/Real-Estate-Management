import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import UseHookData from '@/Hooks/UseHookData';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCheck, faCircleCheck, faDownload, faExchangeAlt, faHeart, faLocationDot, faPrint, faShareAlt, faTag } from "@fortawesome/free-solid-svg-icons";

const SinglePropertyDetails = ({ }) => {

    const [singleData, setSingleData] = useState([]);
    const { id } = useParams();
    const { data } = UseHookData();

    useEffect(() => {
        if (data) {
            const singleData = data.find((item) => item.id == id);
            setSingleData(singleData);
        }
    }, [data, id])

    console.log(singleData);

    const { image, address, bathroom, category, name, room, garage, swimming, owner_pic, price, rating, sqft, status, bed } = singleData || {};

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
                <div className='flex mt-8 gap-5'>
                    <div>
                        <div className='bg-[#f4f4f4] px-7 shadow-xl py-4 rounded-md w-full'>
                            <div className='flex gap-4 items-center'>
                                <FontAwesomeIcon icon={faBuilding} />
                                <h2 className='font-medium'>APPARTMENT</h2>
                            </div>
                            <h2 className='text-3xl mt-3 font-bold'>{name}</h2>
                            <p className='mt-3 text-lg flex gap-4 items-center font-medium'><FontAwesomeIcon icon={faLocationDot} className='text-[#1d4afc]' /> {address}</p>
                            <ul className='mt-5'>
                                <li className='flex gap-5 items-center'><FontAwesomeIcon icon={faTag} className='text-[#ff5e19]' /> <span className='font-bold'>Special Price </span>Get extra 19% off (price inclusive of discount)</li>
                                <li className='flex gap-5 items-center'><FontAwesomeIcon icon={faTag} className='text-[#ff5e19]' /> <span className='font-bold'>Bank Offer </span>10% instant discount on VISA Cards</li>
                                <li className='flex gap-5 items-center'><FontAwesomeIcon icon={faTag} className='text-[#ff5e19]' /> <span className='font-bold'>No cost EMI $49/month.</span> Standard EMI also available</li>
                            </ul>
                            <div className='flex items-center gap-4 mt-5 list-none'>
                                <a href='#' className='bg-[#dcdcdc] shadow-md px-4 text-lg py-3 rounded-md text-[#]'><FontAwesomeIcon icon={faExchangeAlt} /></a>
                                <a href='#' className='bg-[#dcdcdc] shadow-md px-4 text-lg py-3 rounded-md text-[#]'><FontAwesomeIcon icon={faHeart} /></a>
                                <a href='#' className='bg-[#dcdcdc] shadow-md px-4 text-lg py-3 rounded-md text-[#]'><FontAwesomeIcon icon={faShareAlt} /></a>
                                <a href='#' className='bg-[#dcdcdc] shadow-md px-4 text-lg py-3 rounded-md text-[#]'><FontAwesomeIcon icon={faPrint} /></a>
                                <a href='#' className='bg-[#dcdcdc] shadow-md px-4 text-lg py-3 rounded-md text-[#]'><FontAwesomeIcon icon={faDownload} /></a>
                                <button className='px-7 py-4 text-xl font-bold rounded-md text-[#fff] bg-[#ff4c15]'><a href="#">Booking Now</a></button>
                            </div>
                            <hr className='mt-7 border border-[#ababab]' />
                            <div className='flex items-center gap-32 mt-6 list-none font-bold text-lg'>
                                <li>Room : {room}</li>
                                <li>Beds : {bed}</li>
                                <li>Area : {sqft} Sqft</li>
                            </div>
                            <div className='flex items-center gap-32 mt-6 list-none font-bold text-lg'>
                                <li>Baths: {bathroom}</li>
                                <li>Car Garage: {garage} Capacity</li>
                                <li>Swimming: {swimming}</li>
                            </div>
                            <div className='mt-6'>
                                <h2 className='text-3xl font-bold'>Description</h2>
                                <p className='text-[#1e1d1d] mt-4 text-lg'>
                                    Maecenas egestas quam et volutpat bibendum metus vulputate platea eleifend sed Integer dictum ultricies consectetuer <br /> nunc vivamus a. Eu mus justo magna lacinia purus sodales scelerisque. Sociosqu pede facilisi. Curae; lacinia id. Sociis <br /> pretium gravida auctor mus amet accumsan adipiscing id dignissim, potenti. Curae; massa ridiculus lobortis consectetuer <br /> condimentum mollis vulputate hymenaeos tellus egestas auctor dictumst imperdiet curae; quisque ut porta molestie dui <br /> duis blandit molestie etiam enim erat sociis lacinia litora phasellus sit. Ipsum Lacinia class enim pharetra interdum potenti <br /> tellus parturient. Potenti scelerisque erat facilisi mauris tortor, mattis euismod augue nascetur rutrum augue ipsum tortor <br /> cum Porta primis.
                                </p>
                                <p className='text-[#1e1d1d] mt-6 text-lg'>
                                    Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempor. Magnis mollis lobortis nam, <br /> montes ut, consequat sed amet nullam, malesuada nascetur ornare sociosqu magna cum gravida quam tincidunt <br /> dapibus tellus  felis nibh inceptos netus convallis facilisis torquent. Laoreet pulvinar ut. Fringilla lacus tellus lectus erat hac <br /> conubia ege quisque nisi aliquam nibh molestie nisi hymenaeos id phasellus metus duis inceptos arcu hendrerit ligula blandit  lectus nisl fermentum sociosqu pretium eros libero.
                                </p>
                                <div className='mt-8 mb-7 flex gap-5'>
                                    <span className='me-4 text-xl font-semibold'>Highlights:</span>
                                    <div>
                                        <ul>
                                            <li className='flex gap-5 items-center text-lg'><FontAwesomeIcon icon={faCheck} className='px-2 py-1 bg-[#f0c399] rounded' /> Regular Fit.</li>
                                            <li className='flex gap-5 items-center text-lg'><FontAwesomeIcon icon={faCheck} className='px-2 py-1 bg-[#f0c399] rounded' /> Full sleeves.</li>
                                            <li className='flex gap-5 items-center text-lg'><FontAwesomeIcon icon={faCheck} className='px-2 py-1 bg-[#f0c399] rounded' /> Machine wash, tumble dry.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>Hello</h2>
                        </div>
                    </div>
                    <div className='w-[40rem] bg-slate-400 h-[200px] rounded-md px-4 py-4'>
                        <h2>Hello</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePropertyDetails;