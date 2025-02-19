import React from 'react';
import { motion } from "framer-motion";



const cardVariants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const cardVariants2 = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const cardVariants3 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
const PropertyProcess = () => {
    return (
        <div>
            <div className='px-14 w-full py-5'>
                <div className='text-center mt-8'>
                    <p className='py-1 m-auto rounded-full text-center w-[160px] bg-[#ffeeeb] text-[#ff6d52] mb-3 font-medium text-base'>Our Process</p>
                    <p className='text-3xl font-bold'>We Make Process Simple</p>
                    <p className='text-center font-semibold text-xl mt-3 text-[#9e9e9e]'>Highlight the best of your properties by using the List Category shortcode.</p>
                    <hr className='mt-5 w-20 border-2 border-orange-700 m-auto' />
                </div>
                <div>
                    <div className="flex gap-10 justify-center mt-10">
                        {/* Card 1 */}
                        <motion.div variants={cardVariants1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                         className="bg-white shadow-md rounded-lg p-6 w-80 hover:shadow-xl transition-shadow duration-300">
                            <img src="https://i.ibb.co.com/hny4DJP/our-process-01.png" alt="Buy Property" className="w-44 mx-auto mb-4"/>
                            <h2 className="text-xl font-semibold text-center text-gray-800 mb-3">
                                Buy a property
                            </h2>
                            <p className="text-gray-600 text-sm font-medium text-center mb-6">
                            over 1 million+ homes for sale available <br /> on the website, we can match you with a <br /> house you will want to call home.
                            </p>
                            <button className="hover:text-[#fff] text-[#ff5a3c] border-2 border-[#ff5a3c] py-3 ml-16 px-4 hover:bg-red-500 text-sm font-medium rounded-lg transition-colors">
                                Browse Property
                            </button>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={cardVariants2} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-white shadow-md rounded-lg p-6 w-80 hover:shadow-xl transition-shadow duration-300">
                            <img src="https://i.ibb.co.com/wNfC5Kzt/our-process-02.png" alt="Sell Property" className="w-44 mx-auto mb-4"/>
                            <h2 className="text-xl font-semibold text-center text-gray-800 mb-3">
                                Rent a Home
                            </h2>
                            <p className="text-gray-600 text-sm font-medium text-center mb-6">
                            ver 1 million+ homes for sale available <br /> on the website, we can match you with a house you will want to call home.
                            </p>
                            <button className="hover:text-[#fff] text-[#ff5a3c] border-2 border-[#ff5a3c] py-3 ml-20 px-4 hover:bg-red-500 text-sm font-medium rounded-lg transition-colors">
                                List Property
                            </button>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={cardVariants3} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="bg-white shadow-md rounded-lg p-6 w-80 hover:shadow-xl transition-shadow duration-300">
                            <img src="https://i.ibb.co.com/9msQt05F/our-process-03.png" alt="Rent Property" className="w-44 mx-auto mb-4"/>
                            <h2 className="text-xl font-semibold text-center text-gray-800 mb-3">
                                Sell a property
                            </h2>
                            <p className="text-gray-600 text-sm font-medium text-center mb-6">
                            over 1 million+ homes for sale available <br /> on the website, we can match you with a <br /> house you will want to call home.
                            </p>
                            <button className="hover:text-[#fff] text-[#ff5a3c] border-2 border-[#ff5a3c] py-3 ml-20 px-4 hover:bg-red-500 text-sm font-medium rounded-lg transition-colors">
                                Explore Rentals
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyProcess;