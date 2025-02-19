import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const tabs = [
    {
        id: "deluxe", label: "Deluxe Portion",
        content: (
            <div className="w-full flex gap-8 mx-auto p-6 bg-white rounded-lg">
                <div>
                    <h2 className="text-2xl font-semibold">Deluxe Portion</h2>
                    <p className="text-gray-600 mt-2">
                    Quisque ultricies eros vel laoreet malesuada. Phasellus aliquam augue elit, <br /> nec porttitor purus fringilla ac. Suspendisse ac ex pharetra, semper orci at, <br /> porttitor purus. Duis fringilla dolor ut ante sagittis condimentum.
                    </p>
                    <div className="bg-blue-900 mt-7 text-white p-4 w-[550px] font-semibold text-xl mt-4 rounded-lg">
                        <div className="flex justify-between border-b border-white py-2">
                            <span>Total Area</span>
                            <span>2400 Sq.ft</span>
                        </div>
                        <div className="flex justify-between border-b border-white py-2">
                            <span>Bedroom</span>
                            <span>140 Sq.ft</span>
                        </div>
                        <div className="flex justify-between border-b border-white py-2">
                            <span>Bathroom</span>
                            <span>40 Sq.ft</span>
                        </div>
                        <div className="flex justify-between border-b border-white py-2">
                            <span>Balcony</span>
                            <span>Allowed</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>Lounge</span>
                            <span>650 Sq.ft</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-[60rem]" src="https://i.ibb.co.com/nM0Xn9DY/sketch-property.webp" alt="" />
                </div>
            </div>
        ),
    },
    { id: "penthouse", label: "Penthouse", content: "Phasellus aliquam augue elit, nec porttitor purus fringilla ac. Suspendisse ac ex pharetra, semper orci at." },
    { id: "top-garden", label: "Top Garden", content: "Suspendisse ac ex pharetra, semper orci at, porttitor purus. Duis fringilla dolor ut ante sagittis condimentum." },
    { id: "double-height", label: "Double Height", content: "Duis fringilla dolor ut ante sagittis condimentum. Vestibulum venenatis turpis at odio tincidunt, nec elementum lorem auctor." },
    { id: "studio", label: "The Studio", content: "Vestibulum venenatis turpis at odio tincidunt, nec elementum lorem auctor. Nam euismod sapien eget quam volutpat, vel euismod felis dictum." }
];
const ApartmentMap = () => {

    const [activeTab, setActiveTab] = useState("deluxe");

    return (
        <div>
            <div className='px-28 w-full  mt-5 py-5'>
                <div className='text-center mt-8'>
                    <p className='py-1 m-auto rounded-full text-center w-[160px] bg-[#ffeeeb] text-[#ff6d52] mb-3 font-medium text-base'>Apartment Sketch</p>
                    <p className='text-4xl font-bold'>See Our Living Space Of Flat</p>
                    <p className='text-center font-semibold text-xl mt-3 text-[#9e9e9e]'>Highlight the best of your properties by using the List Category shortcode.</p>
                    <hr className='mt-5 w-20 border-2 border-orange-700 m-auto' />
                </div>
                <div className="w-full  mx-auto mt-10">
                    {/* Tabs */}
                    <div className="flex justify-center space-x-6 mt-6  pb-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id} onClick={() => setActiveTab(tab.id)} className={`pb-2 text-lg font-medium ${activeTab === tab.id ? "text-red-500 border-b-2 border-red-500" : "text-gray-600 hover:text-gray-900"
                                    } transition-colors duration-300`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-6 w-full bg-white">
                        <AnimatePresence mode="wait">
                            {tabs.map((tab) =>
                                tab.id === activeTab ? (
                                    <motion.div
                                        key={tab.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}>
                                        <p className="mt-3 text-gray-600">{tab.content}</p>
                                    </motion.div>
                                ) : null
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentMap;