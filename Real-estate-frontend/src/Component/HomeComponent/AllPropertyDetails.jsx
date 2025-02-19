import React from "react";
import { motion } from "framer-motion";

const AllPropertyDetails = ({ pasProperty }) => {
    const {id, image, address, bathroom, category, name, owner_pic, price, rating, sqft, status, bed} = pasProperty;
  return (
    <div>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}>
      <div className="max-w-sm mt-10 rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="relative">
          <img className="w-full h-60 object-cover transition-transform duration-500 transform hover:scale-110" src={image} alt="Summer House"/>
          <span className="absolute top-2 font-semibold left-2 bg-purple-600 text-white text-base px-3 py-1 rounded-full">
            {status}
          </span>
          <button className="absolute top-2 right-6 border text-white px-[14px] font-bold py-[6px] text-2xl rounded-full shadow-md">
            ♡
          </button>
          <div className="absolute right-5 h-12 w-12 top-[11.5rem] z-30 rounded-full border">
               <img className="rounded-full" src={owner_pic} alt="owner Pic" />
          </div>
        </div>
        <div className="p-4">
          <p className="text-xl font-semibold">{price}</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-500 text-sm">★★★★☆</span>
            <span className="ml-2 text-gray-600 text-sm">{rating} (28 Reviews)</span>
          </div>
          <a href="#" className="text-lg font-bold mt-6 hover:text-[#f56200] ">{name}</a>
            <p className="text-gray-600 mt-4 text-sm">
            📍 {address}
          </p>
          <div className="flex items-center justify-between bg-gray-100 p-2 mt-5 rounded-lg text-sm text-gray-600">
            <span>🛏 {bed} Bed</span>
            <span>🛁 {bathroom} Bathroom</span>
            <span>📏 {sqft} Sqft</span>
          </div>
          <div className="flex justify-between text-sm mb-5 mt-5 text-gray-500">
            <span>Listed on: 13 Jan 2023</span>
            <span>Category: {category}</span>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default AllPropertyDetails;
