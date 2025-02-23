import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Range } from "react-range";
import DetailsProperty from './DetailsProperty';
import { Grid, List } from "lucide-react";



const Properties = () => {

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

    const [allProperty, setAllProperty] = useState([]);

    useEffect(() => {
        const fackData = async () => {
            const res = await fetch('/AllPropertyData.json')
            const data = await res.json();
            setAllProperty(data);
            console.log(data)
        }
        fackData();
    }, [])


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

    return (
        <div>
            <div className='px-20 py-10'>
                <h2 className='text-3xl font-bold'>Property Listing</h2>
                <div className='flex gap-6 justify-center'>
                    <div>
                        <div className="max-w-[23rem] mx-auto mt-14 bg-white p-6 shadow-lg rounded-lg">
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
                            <button className="w-full bg-[#fd6a27] text-white p-3 mt-4 rounded-md font-semibold">
                                Search
                            </button>
                        </div>
                        <div className='max-w-[23rem] mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg'>
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
                                                <a href='/singleproperty' className="text-md hover:text-[#fc5a39] font-semibold">{property.name}</a>
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
                        <div>
                            <h2>hello</h2>
                        </div>
                    </div>
                    <div>
                        <div className='mt-[4rem]'>
                            <div className='w-full flex gap-5 px-5 justify-between items-center shadow-lg py-6 bg-[#f1f1f1] rounded-md'>
                                <div className='flex gap-5'>
                                    <select className='px-5 py-3 rounded-full text-lg font-semibold outline-none' name="" id="">
                                        <option value="">For Rent</option>
                                        <option value="">For Sell</option>
                                    </select>
                                    <select className='px-5 py-3 rounded-full text-lg font-semibold outline-none' name="" id="">
                                        <option value="">Default</option>
                                        <option value="">Most Popular</option>
                                        <option value="">Top Rated</option>
                                        <option value="">Newest Items</option>
                                        <option value="">Price Low To High</option>
                                        <option value="">Price High to Low</option>
                                    </select>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <h2 className='text-xl font-semibold'>Showing at 15 result</h2>
                                    <div>
                                        <button title="Grid" className="p-2 rounded-md  hover:bg-gray-300" value="grid" name="display" type="submit">
                                            <Grid className="w-7 h-7 text-gray-600" />
                                        </button>
                                        <button title="List" className="p-2 rounded-md  hover:bg-gray-300"
                                            value="list" name="display" type="submit">
                                            <List className="w-7 h-7 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-x-10'>
                            {
                                allProperty.map((allPro) => <DetailsProperty key={allPro.id} pasAllProperty={allPro} ></DetailsProperty>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties;