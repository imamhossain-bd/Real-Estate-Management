import React from 'react';
import { motion } from "framer-motion";



const cardVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariantsBottom = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};


const RecentPost = () => {
    return (
        <div>
            <div className='px-14 w-full py-5 bg-[#f2f6f7] '>
                <div className='text-center mt-8'>
                    <p className='py-1 m-auto rounded-full text-center w-[160px] bg-[#ffeeeb] text-[#ff6d52] mb-3 font-medium text-base'>Our Recent Post</p>
                    <p className='text-3xl font-bold'>Publish What We Think, About Our <br /> Company Activities</p>
                    <hr className='mt-5 w-20 border-2 border-orange-700 m-auto' />
                </div>

                <div className='flex gap-14 pl-[14rem] mb-10'>
                    {/* Post Number 1 */}
                    <motion.div variants={cardVariantsLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className='mt-5 w-[350px] shadow-lg rounded-lg overflow-hidden cursor-pointer'>
                            <div className="relative">
                                <img className="w-full  h-60 object-cover rounded-t-lg transition-transform duration-500 transform hover:scale-110" src="https://i.ibb.co.com/qYbqVgFp/sell-properties-03.png" alt="Property" />
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>
                            </div>

                            {/* Text Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Our latest development projects by more efficie.
                                </h3>
                                <p className="mt-3 text-gray-600 text-sm">
                                    Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam
                                    ipsum pretium cursus.
                                </p>

                                {/* Author & Date */}
                                <div className="mt-5 flex items-center text-gray-500 text-xs">
                                    <span className="font-bold">BY ROBERT HAVEN</span>
                                    <span className="ml-4">|</span>
                                    <span className="ml-4">DEC 25, 2019</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Post Number 2 */}
                    <motion.div variants={cardVariantsBottom} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className='mt-5 w-[350px] shadow-lg rounded-lg overflow-hidden cursor-pointer'>
                            <div className="relative">
                                <img className="w-full  h-60 object-cover rounded-t-lg transition-transform duration-500 transform hover:scale-110" src="https://i.ibb.co.com/dq2DQgr/ft-960.jpg" alt="Property" />
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>
                            </div>

                            {/* Text Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Our latest development projects by more efficie.
                                </h3>
                                <p className="mt-3 text-gray-600 text-sm">
                                    Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam
                                    ipsum pretium cursus.
                                </p>

                                {/* Author & Date */}
                                <div className="mt-5 flex items-center text-gray-500 text-xs">
                                    <span className="font-bold">BY ROBERT HAVEN</span>
                                    <span className="ml-4">|</span>
                                    <span className="ml-4">DEC 25, 2019</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Post Number 3 */}
                    <motion.div variants={cardVariantsRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className='mt-5 w-[350px] shadow-lg rounded-lg overflow-hidden cursor-pointer'>
                            <div className="relative">
                                <img className="w-full  h-60 object-cover rounded-t-lg transition-transform duration-500 transform hover:scale-110" src="https://i.ibb.co.com/Df4r3K0b/p-10-BDu-HOj-Bg.jpg" alt="Property" />
                                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>
                            </div>

                            {/* Text Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Our latest development projects by more efficie.
                                </h3>
                                <p className="mt-3 text-gray-600 text-sm">
                                    Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam
                                    ipsum pretium cursus.
                                </p>

                                {/* Author & Date */}
                                <div className="mt-5 flex items-center text-gray-500 text-xs">
                                    <span className="font-bold">BY ROBERT HAVEN</span>
                                    <span className="ml-4">|</span>
                                    <span className="ml-4">DEC 25, 2019</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default RecentPost;