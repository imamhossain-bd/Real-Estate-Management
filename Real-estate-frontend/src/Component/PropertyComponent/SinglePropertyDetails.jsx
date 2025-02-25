import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import UseHookData from '@/Hooks/UseHookData';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCheck, faCircleCheck, faDownload, faExchangeAlt, faHeart, faLocationDot, faPrint, faShareAlt, faTag } from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Range } from "react-range";


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


    const [activeTab, setActiveTab] = useState("Hospital");

    const placesData = {
        Hospital: [
            { name: "Massachusetts General Hospital", distance: "23.7 km", type: "Medical College" },
            { name: "Langone Medical Center", distance: "13.2 km", type: "Heart Hospital" },
            { name: "Mount Sinai Hospital", distance: "58.0 km", type: "Eye Hospital" },
        ],
        Shopping: [
            { name: "Westfield Mall", distance: "5.0 km", type: "Shopping Mall" },
            { name: "The Galleria", distance: "7.3 km", type: "Luxury Mall" },
        ],
        School: [
            { name: "Harvard University", distance: "10.5 km", type: "University" },
            { name: "Lincoln High School", distance: "4.8 km", type: "Public School" },
        ],
        Restaurant: [
            { name: "The French Laundry", distance: "2.4 km", type: "Fine Dining" },
            { name: "Joe’s Pizza", distance: "1.2 km", type: "Fast Food" },
        ],
    };

    const properties = [
        {
            "id": 1,
            "price": "$350,000",
            "image": "../src/assets/p-1-BQ0X_fIz.jpg",
            "name": "Luxury Villa",
            "rating": 4.8,
            "address": "123 Palm Street, Miami, FL",
            "bed": 4,
            "bathroom": 3,
            "category": "House",
            "status": "Sell",
            "sqft": 2500,
            "owner_pic": "../src/assets/avatar-03.webp"
        },
        {
            "id": 2,
            "price": "$2,500",
            "image": "../src/assets/p-2-DzlMFwfd.jpg",
            "name": "Downtown Apartment",
            "rating": 4.5,
            "address": "456 Main Ave, New York, NY",
            "bed": 2,
            "bathroom": 2,
            "category": "Apartment",
            "status": "Rent",
            "sqft": 1200,
            "owner_pic": "../src/assets/avatar-04.jpg"
        },
        {
            "id": 3,
            "price": "$540,000",
            "image": "../src/assets/p-3-CYB7E841.jpg",
            "name": "Modern Family Home",
            "rating": 4.7,
            "address": "789 Oak Drive, Los Angeles, CA",
            "bed": 5,
            "bathroom": 4,
            "category": "House",
            "status": "Sell",
            "sqft": 3200,
            "owner_pic": "../src/assets/avatar-05.webp"
        },
        {
            "id": 4,
            "price": "$850,000",
            "image": "../src/assets/image (1).png",
            "name": "Countryside Estate",
            "rating": 4.9,
            "address": "72 Hillside Rd, Nashville, TN",
            "bed": 5,
            "bathroom": 4,
            "category": "House",
            "status": "Sell",
            "sqft": 4000,
            "owner_pic": "../src/assets/avatar-06.webp"
        }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [isPrice, setIsPrice] = useState(false);

    const options = [
        "Air Conditioning",
        "Garage Facility",
        "Swimming Pool",
        "Play Ground",
        "Furniture Include",
        "Marble Floor",
        "Store Room",
        "High Class Door",
        "Floor Heating System",
        "Garden Include",
    ];

    const [values, setValues] = useState([0, 1000000]);
    const min = 0;
    const max = 1000000;

    const [FirstFloor, setIsFirstFloor] = useState(false);
    const [SecondFloor, setIsSecondFloor] = useState(false);
    const [ThirdFloor, setIsThirdFloor] = useState(false);

    const [isPlaying, setIsPlaying] = useState(false);

    const { image, property_id, address, bathroom, age, insurance, garden_field, elevator, fireplace, type, third_party, total_floor, dining_capacity, heating_system, installment_facility, swimming_pool, security, exit, category, name, room, garage, swimming, owner_pic, price, rating, sqft, status, bed } = singleData || {};

    return (
        <div>
            <div className='px-16 py-9 bg-[#f6f1ed]'>
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
                    <div className='mb-5'>
                        <div className='bg-[#f4f4f4] px-7 shadow-md py-4 rounded-md w-full'>
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
                                            <li className='flex gap-5 mb-3 items-center text-lg'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /> Regular Fit.</li>
                                            <li className='flex gap-5 mb-3 items-center text-lg'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /> Full sleeves.</li>
                                            <li className='flex gap-5 mb-3 items-center text-lg'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /> Machine wash, tumble dry.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#f4f4f4] px-7 shadow-md mt-10 py-4 rounded-md w-full'>
                                <h2 className='text-3xl font-bold mt-5'>More Information</h2>
                                <div>
                                    <ul className='grid grid-cols-3 mb-5 mt-5 gap-y-5 text-lg font-semibold'>
                                        <li>Age : {age}</li>
                                        <li>Insurance : {insurance}</li>
                                        <li>Garden & Field : {garden_field}</li>
                                        <li>Alivator : {elevator}</li>
                                        <li>Fire Place : {fireplace}</li>
                                        <li>Type : {type}</li>
                                        <li>3rd Party : {third_party}</li>
                                        <li>Total Floor : {total_floor}</li>
                                        <li>Dining Capacity : {dining_capacity}</li>
                                        <li>Heating System : {heating_system}</li>
                                        <li>Installment Facility : {installment_facility}</li>
                                        <li>Swiming Pool : {swimming}</li>
                                        <li>Security : {security}</li>
                                        <li>Exit : {exit}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#f4f4f4] px-7 shadow-md mt-10 py-4 rounded-md w-full'>
                                <h2 className='text-3xl font-bold mt-5'>Property Summary</h2>
                                <div>
                                    <ul className='grid grid-cols-2 gap-10 mb-5 mt-5 gap-y-5 text-lg font-semibold'>
                                        <li className='border-b-2'>Property Id : <span className='ml-36'>{property_id}</span></li>
                                        <li className='border-b-2'>Listing Type : <span className='ml-36'>{status}</span></li>
                                        <li className='border-b-2'>Property Type: <span className='ml-[8rem]'>{category}</span></li>
                                        <li className='border-b-2'>Current Owner : <span className='ml-36'></span></li>
                                        <li className='border-b-2'>Insurance : <span className='ml-40'>{insurance}</span></li>
                                        <li className='border-b-2'>Architecture : <span className='ml-36'></span></li>
                                        <li className='border-b-2'>Total Floor : <span className='ml-[9.5rem]'>{total_floor}</span></li>
                                        <li className='border-b-2'>Year of Built : <span className='ml-36'>{age}</span></li>
                                        <li className='border-b-2'>Furniture Type : <span className='ml-36'></span></li>
                                        <li className='border-b-2'>Payment Way : <span className='ml-32'>Instalment / Cash</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#f4f4f4] px-7 shadow-md mt-10 py-4 rounded-md w-full'>
                                <h2 className='text-3xl font-bold mt-5'>Property Features</h2>
                                <div>
                                    <ul className='grid grid-cols-3 gap-10 mb-5 mt-8 gap-y-5 text-lg font-semibold'>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Fitness Lab and Room</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Swiming Pools</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Parking Facility</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Green Park View</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Playground Include</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Garden</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Kitchen Furniture</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Fire Security</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>High Class Door</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Store Room</span></li>
                                        <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCheck} className='px-2 py-2 bg-[#f0c399] rounded-full' /><span>Marble Floor</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f4f4f4] px-7 shadow-md mt-10 py-4 rounded-md w-full'>
                            <div>
                                <h2 className='text-3xl font-bold mt-5'> Floor Plans</h2>
                                <div className='mt-7'>
                                    <div className='mb-5'>
                                        <button onClick={() => setIsFirstFloor(!FirstFloor)} className='w-full flex items-start text-[#000] rounded-md text-lg font-bold py-2 px-3 bg-[#ffafa6]'> First Floor Plans {FirstFloor ? <FaChevronUp className='ml-[52.5rem] mt-2' /> : <FaChevronDown className='ml-[52.5rem] mt-2' />}</button>
                                        {/* DropDown Content */}
                                        {FirstFloor && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: FirstFloor ? "auto" : 0, opacity: FirstFloor ? 1 : 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden">
                                                <div className="mt-2 bg-gray-100 p-4 rounded-md shadow-md">
                                                    <span className='text-xl font-bold'>Total Sqft: 4200 sqft</span>
                                                    <ul className='flex gap-6 mt-5'>
                                                        <li><span className='text-lg font-bold'>Bed:</span> 162.5 sqft</li>
                                                        <li><span className='text-lg font-bold'>Kitchen:</span> 108.2 sqft</li>
                                                        <li><span className='text-lg font-bold'>Dining:</span> 145.7 sqft</li>
                                                        <li><span className='text-lg font-bold'>Bath:</span> 38.7 sqft</li>
                                                        <li><span className='text-lg font-bold'>Storage:</span> 123.2 sqft</li>
                                                    </ul>
                                                    <div>
                                                        <img className='w-[60rem] mt-5' src="/src/assets/house-floor-plan.png" alt="" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                    <div className='mb-5'>
                                        <button onClick={() => setIsSecondFloor(!SecondFloor)} className='w-full flex items-start text-[#000] rounded-md text-lg font-bold py-2 px-3 bg-[#ffafa6]'>Second Floor Plans {SecondFloor ? <FaChevronUp className='ml-[51rem] mt-2' /> : <FaChevronDown className='ml-[51rem] mt-2' />}</button>
                                        {/* DropDown Content */}
                                        {SecondFloor && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: SecondFloor ? "auto" : 0, opacity: SecondFloor ? 1 : 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden">
                                                <div className="mt-2 bg-gray-100 p-4 rounded-md shadow-md">
                                                    <span className='text-xl font-bold'>Total Sqft: 4200 sqft</span>
                                                    <ul className='flex gap-6 mt-5'>
                                                        <li><span className='text-lg font-bold'>Bed:</span> 162.5 sqft</li>
                                                        <li><span className='text-lg font-bold'>Kitchen:</span> 108.2 sqft</li>
                                                        <li><span className='text-lg font-bold'>Dining:</span> 145.7 sqft</li>
                                                        <li><span className='text-lg font-bold'>Bath:</span> 38.7 sqft</li>
                                                        <li><span className='text-lg font-bold'>Storage:</span> 123.2 sqft</li>
                                                    </ul>
                                                    <div>
                                                        <img className='w-[60rem] mt-5' src="/src/assets/house-floor-plan.png" alt="" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                    <div className='mb-5'>
                                        <button onClick={() => setIsThirdFloor(!ThirdFloor)} className='w-full flex items-start text-[#000] rounded-md text-lg font-bold py-2 px-3 bg-[#ffafa6]'>Third Floor Plans{ThirdFloor ? <FaChevronUp className='ml-[52rem] mt-2' /> : <FaChevronDown className='ml-[52rem] mt-2' />}</button>
                                        {/* DropDown Content */}
                                        {ThirdFloor && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: ThirdFloor ? "auto" : 0, opacity: ThirdFloor ? 1 : 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden">
                                                <div className="mt-2 bg-gray-100 p-4 rounded-md shadow-md">
                                                    <span className='text-xl font-bold'>Total Sqft: 4200 sqft</span>
                                                    <ul className='flex gap-6 mt-5'>
                                                        <li><span className='text-lg font-bold'>Bed:</span> 162.5 sqft</li>
                                                        <li><span className='text-lg font-bold'>Kitchen:</span> 108.2 sqft</li>
                                                        <li><span className='text-lg font-bold'>Dining:</span> 145.7 sqft</li>
                                                        <li><span className='text-lg font-bold'>Bath:</span> 38.7 sqft</li>
                                                        <li><span className='text-lg font-bold'>Storage:</span> 123.2 sqft</li>
                                                    </ul>
                                                    <div>
                                                        <img className='w-[60rem] mt-5' src="/src/assets/house-floor-plan.png" alt="" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f4f4f4] px-7 shadow-md mt-10 py-4 rounded-md w-full'>
                            <div className="relative w-full max-w-4xl mx-auto">
                                {/* Video or Image */}
                                {!isPlaying ? (
                                    <div className="relative">
                                        {/* Thumbnail Image */}
                                        <img
                                            src="/src/assets/house-floor-plan.png" // Replace with your actual image
                                            alt="Video Thumbnail"
                                            className="w-full h-auto rounded-lg"
                                        />
                                        {/* Play Button */}
                                        <button
                                            onClick={() => setIsPlaying(true)}
                                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                                        >
                                            <motion.div
                                                className="p-6 bg-orange-500 rounded-full shadow-lg relative"
                                                initial={{ scale: 1 }}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                            >
                                                <FaPlay className="text-white text-2xl" />
                                            </motion.div>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="relative">
                                        {/* Embedded Video */}
                                        {/* <iframe
                                            className="w-full aspect-video rounded-lg"
                                            src="https://www.youtube.com/watch?v=x9gIy59kWw0&ab_channel=SPLConstruction"
                                            title="Video Player"
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                        ></iframe> */}
                                        <video className="w-full aspect-video rounded-lg" src="">
                                            <source src="./homePlan.mp4" type="" />
                                        </video>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#f4f4f4] px-7 shadow-md mt-10 py-4 rounded-md w-full">
                                {/* Title */}
                                <h2 className="text-2xl font-semibold mb-4">Nearby Places</h2>

                                {/* Tabs */}
                                <div className="relative flex space-x-6 border-b">
                                    {Object.keys(placesData).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`relative pb-2 text-lg font-medium transition duration-300 ${activeTab === tab ? "text-[#9d6b53]" : "text-gray-600"
                                                }`}>
                                            {tab}
                                            {/* Active Tab Indicator */}
                                            {activeTab === tab && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9d6b53]"
                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }} />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Animated Table Content */}
                                <AnimatePresence mode="wait">
                                    <motion.table
                                        key={activeTab}
                                        className="w-full mt-4 border-collapse"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <thead>
                                            <tr className="border-b text-left text-gray-600">
                                                <th className="py-2">Name</th>
                                                <th className="py-2">Distance</th>
                                                <th className="py-2">Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {placesData[activeTab].map((place, index) => (
                                                <motion.tr
                                                    key={index}
                                                    className="border-b"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 20 }}
                                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                                >
                                                    <td className="py-3">{place.name}</td>
                                                    <td className="py-3">{place.distance}</td>
                                                    <td className="py-3">{place.type}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </motion.table>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#f4f4f4] px-7 shadow-md mt-10 py-4 rounded-md w-full">
                                <h2 className="text-3xl font-bold mb-4">Write A Review</h2>
                                <p className='text-xl font-semibold'>Your Rating: {rating}</p>

                                <div>
                                    <input type="text" name="" id="" placeholder='Name' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-5 text-lg' />
                                    <input type="email" name="" id="" placeholder='Email Address' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-5 ml-7 text-lg' /><br />
                                    <textarea name="" id="" placeholder='Message' cols="106" rows="5" className='mt-5 rounded-md border outline-none border-slate-400 px-3 py-3 text-lg'></textarea>
                                </div>
                                <button className='px-6 font-bold text-xl transition-all duration-500 mb-5 hover:text-[#fff] py-3 border bg-transparent border-[#ff3407] hover:bg-[#ff3407] mt-5 rounded-md'>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[42rem]'>
                        <div className='bg-[#f4f4f4] px-7 shadow-md py-4 rounded-md w-full'>
                            <h2 className='font-bold mt-5 text-xl'>Listed By</h2>
                            <div className='flex gap-5 items-center'>
                                <div>
                                    <img src="/src/assets/avatar-05.webp" alt="" className='w-[6rem] mt-5 rounded-full' />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold mb-5'>Luann McLawhorn</h2>
                                    <p className='text-lg font-medium'>+(81) 84 538 91231 info@website.com</p>
                                </div>
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder='Your Name' className='w-full border border-[#949494] rounded-md px-3 text-lg py-2 mt-8 bg-[#f4f4f4] outline-none' /> <br />
                                <input type="text" name="" id="" placeholder='Phone Number' className='w-full border border-[#949494] rounded-md px-3 text-lg py-2 mt-3 bg-[#f4f4f4] outline-none' /> <br />
                                <input type="email" name="" id="" placeholder='Your Email' className='w-full border border-[#949494] rounded-md px-3 text-lg py-2 mt-3 bg-[#f4f4f4] outline-none' /> <br />
                                <textarea name="" id="" cols="50" rows="4" placeholder='Message' className='border border-[#949494] rounded-md px-3 text-lg py-2 mt-3 bg-[#f4f4f4] outline-none'></textarea>
                            </div>
                            <button className='mt-2 w-full text-xl font-bold py-3 border border-[#ff4322] bg-transparent hover:bg-[#fa392f] hover:text-[#fff] rounded-md transition-all duration-500'>Send Message</button>
                        </div>
                        <div className="bg-[#f4f4f4] px-7 shadow-md py-4 rounded-md w-full mt-10">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Property</h2>

                            {/* Search Input */}
                            <input type="text" placeholder="Enter Keyword..." className="w-full border p-2 rounded-md mb-3 outline-none" />

                            {/* Dropdowns */}
                            <div className="relative w-full">
                                <select className="p-2 w-full outline-none border rounded-md mb-3 appearance-none pr-10">
                                    <option placeholder="" value="">Property Types</option>
                                    <option value="">House</option>
                                    <option value="">Office</option>
                                    <option value="">Appartment</option>
                                    <option value="">Condos</option>
                                    <option value="">Villa</option>
                                    <option value="">Small Family</option>
                                    <option value="">Single Room</option>
                                </select>
                                <FontAwesomeIcon icon={faAngleDown} className={`absolute right-3 top-5 transform -translate-y-1/2 text-gray-500 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                            </div>

                            <div className="relative w-full">
                                <select className="p-2 w-full outline-none border rounded-md mb-3 appearance-none pr-10">
                                    <option className='' value="">Property Status</option>
                                    <option value="">For Rent</option>
                                    <option value="">For Sell</option>
                                </select>
                                <FontAwesomeIcon icon={faAngleDown} className={`absolute right-3 top-5 transform -translate-y-1/2 text-gray-500 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                            </div>

                            <div className="relative w-full">
                                <input className="p-2 w-full outline-none border rounded-md mb-3 pr-10" type="text" placeholder="Location" />
                                <FontAwesomeIcon icon={faLocationDot} className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-500" />
                            </div>

                            <div className="relative w-full max-w-md mb-5 mx-auto">
                                {/* Dropdown Button */}
                                <button
                                    onClick={() => setIsPrice(!isPrice)}
                                    className="w-full flex justify-between items-center border  p-3 rounded-md bg-white text-gray-700 shadow-sm  transition-all">
                                    Price
                                    <FontAwesomeIcon icon={faAngleDown} className={`transition-transform ${isPrice ? "rotate-180" : ""}`} />
                                </button>

                                {/* Dropdown Content - Show Only When isOpen is True */}
                                {isPrice && (
                                    <div className="absolute left-0 w-full bg-white p-4 shadow-lg border rounded-md mt-2 z-10">
                                        {/* Tooltip Arrow */}
                                        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l"></div>

                                        {/* Price Range Display */}
                                        <div className="flex justify-between text-gray-600 text-sm font-semibold mb-3">
                                            <span>{values[0].toLocaleString()} $</span>
                                            <span>{values[1].toLocaleString()} $</span>
                                        </div>

                                        {/* Custom Range Slider */}
                                        <Range
                                            step={1000}
                                            min={min}
                                            max={max}
                                            values={values}
                                            onChange={(newValues) => setValues(newValues)}
                                            renderTrack={({ props, children }) => (
                                                <div {...props} className="h-1 bg-[#9c774f] w-full rounded-md">
                                                    {children}
                                                </div>
                                            )}
                                            renderThumb={({ props }) => (
                                                <div {...props} className="w-5 h-5 bg-[#9c774f] rounded-full border-2 border-white shadow-md cursor-pointer" />
                                            )}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="relative w-full">
                                {/* Dropdown Select */}
                                <select className="p-2 w-full outline-none border rounded-md mb-3 appearance-none pr-10">
                                    <option value="">Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>

                                {/* Custom Dropdown Arrow */}
                                <FontAwesomeIcon icon={faAngleDown} className={`absolute right-3 top-5 transform -translate-y-1/2 text-gray-500 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                            </div>

                            <div className="relative w-full">
                                {/* Dropdown Select */}
                                <select className="p-2 w-full outline-none border rounded-md mb-3 appearance-none pr-10">
                                    <option value="">Bathrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                </select>

                                {/* Custom Dropdown Arrow */}
                                <FontAwesomeIcon icon={faAngleDown} className={`absolute right-3 top-5 transform -translate-y-1/2 text-gray-500 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                            </div>


                            <div className="relative w-full">
                                {/* Dropdown Select */}
                                <select className="p-2 w-full outline-none border rounded-md mb-3 appearance-none pr-10">
                                    <option value="">Garage</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                </select>

                                {/* Custom Dropdown Arrow */}
                                <FontAwesomeIcon icon={faAngleDown} className={`absolute right-3 top-5 transform -translate-y-1/2 text-gray-500 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                            </div>

                            {/* Min & Max Area */}
                            <div className="flex space-x-2 mb-3">
                                <input type="text" placeholder="Min Area" className="w-1/2 outline-none border p-2 rounded-md" />
                                <input type="text" placeholder="Max Area" className="w-1/2 outline-none border p-2 rounded-md" />
                            </div>


                            {/* Advanced Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full border p-2 rounded-md flex items-center justify-between">
                                <span>Advanced</span>
                                <span className="text-xl">⋮</span>
                            </button>

                            {/* Advanced Options (Animated) */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden">
                                <h3 className="text-lg font-semibold mt-4">Additional Options</h3>
                                <div className="mt-2 space-y-2">
                                    {options.map((option, index) => (
                                        <label key={index} className="flex items-center space-x-2">
                                            <input type="checkbox" className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200" />
                                            <span className="text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Search Button */}
                            <button className='mt-6 w-full text-xl font-bold py-3 border border-[#ff4322] bg-transparent hover:bg-[#fa392f] hover:text-[#fff] rounded-md transition-all duration-500'>Send Message</button>
                        </div>
                        <div className='bg-[#f4f4f4] px-7 shadow-md py-4 rounded-md w-full mt-10'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-xl font-semibold mb-4">Recent Property</h2>
                                <div className="space-y-4">
                                    {properties.map((property) => (
                                        <motion.div
                                            key={property.id}
                                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <img
                                                src={property.image}
                                                alt={property.name}
                                                className="w-16 h-16 rounded-md object-cover"
                                            />
                                            <div>
                                                <a href='' className="text-md hover:text-[#fc5a39] font-semibold">{property.name}</a>
                                                <p className="text-yellow-600 font-bold text-lg">
                                                    {property.price} <span className="text-gray-500 text-sm">( Monthly )</span>
                                                </p>
                                                <p className="text-gray-600 text-sm">📐 {property.sqft}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePropertyDetails;