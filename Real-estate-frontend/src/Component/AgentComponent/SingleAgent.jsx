import useHookAgent from '@/Hooks/useHookAgent';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SingleAgent = () => {

    const [singleData, setSingleData] = useState();
    const { id } = useParams();
    const { agentData } = useHookAgent();

    useEffect(() => {
        const singleData = agentData.find((item) => item.id == id);
        setSingleData(singleData);
    }, [agentData, id])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const property = {
        images: [
            "https://i.ibb.co.com/Df4r3K0b/p-10-BDu-HOj-Bg.jpg",
            "https://i.ibb.co.com/B5WPzNDz/Veedo-Slider-1-1.jpg",
            "https://i.ibb.co.com/qYbqVgFp/sell-properties-03.png",
        ],
        price: "800.59",
        title: "Ready home for sale",
        type: "Modern House",
        size: "1200",
        beds: "2",
        baths: "1",
        location: "4517 Washington Ave, Manchester",
        agentImage: "https://randomuser.me/api/portraits/women/10.jpg"
    };

    const { images, price, title, type, size, beds, baths, location, agentImage } = property;

    const { name, email, address, image, description, practice_area, experience, position, phone, house_name, social } = singleData || {};

    return (
        <div className='mb-28'>
            <div className='relative'>
                <img className='bg-cover bg-no-repeat w-full h-[28rem]' src="https://i.ibb.co.com/nMw7wcQg/agent-details-breadcrumb.png" alt="" />
                <div className='absolute inset-0 bg-gradient-to-r from-black/100 opacity-85 to-transparent'></div>
                <div className='absolute flex items-center left-[43rem] top-1/2 transform -translate-y-1/2 text-5xl text-white font-bold'>
                    <h2>Agents Details</h2>
                </div>
                <div className='absolute top-[26rem] rounded-md left-[46rem] bg-[#ff5a3c] px-7 py-4 '>
                    <h2 className='flex justify-center items-center gap-2 font-bold text-lg text-[#fff]'>Home <span><FontAwesomeIcon icon={faAngleRight} className='font-bold' /></span> <span>Agent Details</span></h2>
                </div>
            </div>
            <div className='mt-[9rem] px-12 mb-10'>
                <div className='w-full flex'>
                    <div>
                        <img className='w-[45rem] h-[33rem] rounded-lg' src={image} alt="" />
                    </div>
                    <div className='py-10 px-10 w-full'>
                        <h2 className='text-3xl font-bold'>{name}</h2>
                        <p className='text-[#4881f3] text-xl mt-2 font-medium'>{position}</p>
                        <hr className='border mt-5 mb-5' />
                        <div>
                            <h2 className='text-xl font-medium'>{description}</h2>

                            <div className="grid grid-cols-2 text-xl gap-y-3 gap-x-10 mt-10 text-gray-700">
                                <p><span className="font-semibold">Phone:</span> {phone}</p>
                                <p><span className="font-semibold">Email:</span> {email}</p>
                                <p><span className="font-semibold">Position:</span> {position}</p>
                                <p><span className="font-semibold">Address:</span> {address}</p>
                                <p><span className="font-semibold">Experience:</span> {experience} Years</p>
                                <p><span className="font-semibold">Practice Area:</span> {practice_area}</p>
                            </div>

                            <div className="flex mt-16 gap-6">
                                <a href='#' target="_blank" rel="noopener noreferrer" className="text-gray-600 px-3 py-3 rounded-lg border hover:text-white transition-all duration-500 hover:bg-[#ff5a3c]">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href='#' target="_blank" rel="noopener noreferrer" className="text-gray-600 px-3 py-3 rounded-lg border hover:text-white transition-all duration-500 hover:bg-[#ff5a3c]">
                                    <FaTwitter size={20} />
                                </a>
                                <a href='#' target="_blank" rel="noopener noreferrer" className="text-gray-600 px-3 py-3 rounded-lg border hover:text-white transition-all duration-500 hover:bg-[#ff5a3c]">
                                    <FaLinkedinIn size={20} />
                                </a>
                                <a href='#' target="_blank" rel="noopener noreferrer" className="text-gray-600 px-3 py-3 rounded-lg border hover:text-white transition-all duration-500 hover:bg-[#ff5a3c]">
                                    <FaInstagram size={20} className='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-14'>
                    <h2 className='text-3xl font-semibold'>Biography</h2>
                    <p className='text-xl font-medium text-[#949393] mt-5'>More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size. Today, our proven sales training program has made us a leader in sales and management training.</p>


                    <p className='mt-5 text-xl font-medium text-[#949393]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sals ut labore et dolore for magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate sale velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem., sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                <div className='flex gap-10 mt-16 items-center'>
                    <div className='w-[25rem] h-[27rem] shadow-lg hover:border transition-all duration-500 hover:border-[#ff5a3c] rounded-lg'>
                        <img className='w-[15rem] ml-[5rem] mt-16' src="https://i.ibb.co.com/svCnSgbw/our-process-01.png" alt="" />
                        <h2 className=' mt-7 text-center text-2xl font-bold'>Home buying</h2>
                        <p className='text-center text-lg font-medium text-[#828282] mt-5'>Lorem ipsum dolor sit ame it, <br /> consectetur adipisicing elit, sed do <br /> eiusmod te mp or</p>
                    </div>
                    <div className='w-[25rem] h-[27rem] shadow-lg hover:border transition-all duration-500 hover:border-[#ff5a3c] rounded-lg'>
                        <img className='w-[15rem] ml-[5rem] mt-16' src="https://i.ibb.co.com/pj18TY3X/our-process-02.png" alt="" />
                        <h2 className=' mt-7 text-center text-2xl font-bold'>Home buying</h2>
                        <p className='text-center text-lg font-medium text-[#828282] mt-5'>Lorem ipsum dolor sit ame it, <br /> consectetur adipisicing elit, sed do <br /> eiusmod te mp or</p>
                    </div>
                    <div className='w-[25rem] h-[27rem] shadow-lg hover:border transition-all duration-500 hover:border-[#ff5a3c] rounded-lg'>
                        <img className='w-[15rem] ml-[5rem] mt-16' src="https://i.ibb.co.com/qFYgxCGM/our-process-03.png" alt="" />
                        <h2 className=' mt-7 text-center text-2xl font-bold'>Home buying</h2>
                        <p className='text-center text-lg font-medium text-[#828282] mt-5'>Lorem ipsum dolor sit ame it, <br /> consectetur adipisicing elit, sed do <br /> eiusmod te mp or</p>
                    </div>
                </div>
                <div className='mt-20 mb-7 text-lg font-medium text-[#585858]'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sals ut labore et dolore for magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate sale velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem., sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                <div className='flex gap-8'>
                    <div className="bg-[#f4f4f4] px-7 shadow-md mt-10 py-4 rounded-md w-full">
                        <h2 className="text-3xl font-bold mb-8">Contact for any Inquiry</h2>
                        <hr />
                        <div className='mt-8'>
                            <div className='flex items-center gap-10'>
                                <div>
                                    <label className='text-lg font-semibold' htmlFor="">Name *</label> <br />
                                    <input type="text" name="" id="" placeholder='Name' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-3 text-lg' />
                                </div>
                                <div>
                                    <label className='ml-7 text-lg font-semibold' htmlFor="">Email *</label><br />
                                    <input type="email" name="" id="" placeholder='Email Address' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-3 ml-7 text-lg' /><br />
                                </div>
                            </div>
                            <div className='flex items-center mt-5 mb-5 gap-10'>
                                <div>
                                    <label className='text-lg font-semibold' htmlFor="">Name *</label> <br />
                                    <input type="text" name="" id="" placeholder='Name' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-3 text-lg' />
                                </div>
                                <div>
                                    <label className='ml-7 text-lg font-semibold' htmlFor="">Email *</label><br />
                                    <input type="email" name="" id="" placeholder='Email Address' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-3 ml-7 text-lg' /><br />
                                </div>
                            </div>
                            <textarea name="" id="" placeholder='Message' cols="111" rows="5" className='mt-5 rounded-md border outline-none border-slate-400 px-3 py-3 text-lg'></textarea>
                        </div>
                        <button className='px-6 font-bold text-xl transition-all duration-500 mb-5 hover:text-[#fff] py-3 border bg-transparent border-[#ff3407] hover:bg-[#ff3407] mt-5 rounded-md'>Submit Message</button>
                    </div>
                    <div className='mt-10'>
                        <div className="w-[30rem] rounded-xl shadow-lg bg-[#f0f0f0] p-4">
                            {/* Header Section */}
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg font-bold">All Listing</h2>
                                <div className="flex gap-2">
                                    <button className="p-2 border rounded-full"><FaArrowLeft /></button>
                                    <button className="p-2 border rounded-full"><FaArrowRight /></button>
                                </div>
                            </div>

                            {/* Image Slider */}
                            <div className="relative">
                                <Slider {...settings}>
                                    {images && images.map((img, index) => (
                                        <div key={index} className="relative">
                                            <img src={img} alt={title} className="rounded-xl w-full h-[270px] object-cover" />
                                        </div>
                                    ))}
                                </Slider>

                                {/* For Sale Badge */}
                                <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 text-sm rounded-md">For Sale</div>

                                {/* Agent Image */}
                                <div className="absolute top-3 right-3">
                                    <img src={agentImage} alt="Agent" className="w-10 h-10 rounded-full border-2 border-white" />
                                </div>

                                {/* Heart Icon */}
                                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md">
                                    <FaHeart className="text-gray-500 hover:text-red-500" />
                                </button>
                            </div>

                            {/* Property Info */}
                            <div className="mt-14 mb-5">
                                <p className="text-red-500 font-bold text-lg">${price}</p>
                                <h3 className="font-bold text-xl mt-3">{title}</h3>
                                <p className="text-gray-500 mt-2">{type}</p>
                                <div className="flex justify-between text-gray-600 text-sm mt-4">
                                    <span>{size} Sqft</span>
                                    <span>{beds} Beds</span>
                                    <span>{baths} Baths</span>
                                </div>
                                <div className="mt-3 flex items-center text-gray-600">
                                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                                    <span>{location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAgent;