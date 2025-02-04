import React from 'react';
import { Image } from 'antd';
import { FaExpand, FaBed, FaBath, FaCar } from "react-icons/fa";
const TodaySellProperty = () => {

    return (
        <div>
            <div className='bg-[#f2f6f7] w-full h-auto'>
                <div className='flex gap-8 px-32'>
                    <div className="pt-16 pb-11">
                        <div className ="flex gap-5">
                            <Image width={260} src="https://i.ibb.co.com/vCy8NxdZ/Sell-properties.png" />
                            <Image width={260} src="https://i.ibb.co.com/CKy1Nw8w/sell-properties-02.png" />
                        </div>
                        <div className="mt-8">
                            <Image width={540} src="https://i.ibb.co.com/qYbqVgFp/sell-properties-03.png" />
                        </div>
                    </div>
                    <div className="pt-16">
                        <p className='py-1  rounded-full text-center w-[140px] bg-[#ffeeeb] text-[#ff6d52] mb-3 font-medium text-base'>Popular Place</p>
                        <h2 className="text-4xl font-bold">Today Sells Properties</h2>
                        <p className="mt-5 text-[#7e7e7e] text-base font-medium mb-4">There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable. If you are going.</p>
                        <div className="">
                            <li className="mb-3 text-lg">Live Music Cocerts at Luviana</li>
                            <li className="mb-3 text-lg">Our SecretIsland Boat Tour is Just for You</li>
                            <li className="mb-3 text-lg">publishing packages and web page editors</li>
                            <li className="mb-3 text-lg">Nemo enim ipsam voluptatem quia voluptas</li>
                        </div>
                        <div>
                            <div className="">
                                <div className="flex pt-6 items-center justify-between space-x-6 border-b pb-4">
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-lg font-semibold">2110</p>
                                            <FaExpand className="text-gray-700" />
                                        </div>
                                        <p className="text-gray-500 text-sm">Square Ft</p>
                                    </div>
                                    <div>
                                        <div  className="flex items-center space-x-2 border-l pl-6">
                                            <p className="text-lg font-semibold">2110</p>
                                            <FaBed className="text-gray-700" />
                                        </div>
                                        <p className="text-gray-500 ml-6 text-sm">Bedrooms</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 border-l pl-6">
                                            <p className="text-lg font-semibold">2110</p>
                                            <FaBath className="text-gray-700" />
                                        </div>
                                        <p className="text-gray-500 ml-6 text-sm">Bathrooms</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2 border-l pl-6">
                                            <p className="text-lg font-semibold">2110</p>
                                            <FaCar className="text-gray-700" />
                                        </div>
                                        <p className="text-gray-500 ml-6 text-sm">Car Parking</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 bg-gray-100 p-4 mt-2">
                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-gray-900">Benjamin</p>
                                    <p className="text-blue-600 text-sm">benjamin@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaySellProperty;