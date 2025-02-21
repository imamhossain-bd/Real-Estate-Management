import React, { useState } from 'react';
import { motion } from "framer-motion";

const Properties = () => {

    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <div>
            <div className='px-28 py-10'>
                <h2 className='text-3xl font-bold'>Property Listing</h2>
                <div className='flex gap-6 justify-center'>
                    <div>
                        <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Property</h2>

                            {/* Search Input */}
                            <input
                                type="text"
                                placeholder="Enter Keyword..."
                                className="w-full border p-2 rounded-md mb-3"
                            />

                            {/* Dropdowns */}
                            {["Property Types", "Property Status", "Price", "Bedrooms", "Bathrooms", "Garage"].map(
                                (label, index) => (
                                    <select key={index} className="w-full border p-2 rounded-md mb-3">
                                        <option>{label}</option>
                                    </select>
                                )
                            )}

                            {/* Min & Max Area */}
                            <div className="flex space-x-2 mb-3">
                                <input
                                    type="text"
                                    placeholder="Min Area"
                                    className="w-1/2 border p-2 rounded-md"
                                />
                                <input
                                    type="text"
                                    placeholder="Max Area"
                                    className="w-1/2 border p-2 rounded-md"
                                />
                            </div>

                            
                            {/* Advanced Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full border p-2 rounded-md flex items-center justify-between"
                            >
                                <span>Advanced</span>
                                <span className="text-xl">⋮</span>
                            </button>

                            {/* Advanced Options (Animated) */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
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
                            <button className="w-full bg-[#fd6a27] text-white p-3 mt-4 rounded-md font-semibold">
                                Search
                            </button>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties;