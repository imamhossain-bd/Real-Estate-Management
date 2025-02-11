import React from 'react';
import { FaBed, FaBath } from "react-icons/fa";
import { BiRuler } from "react-icons/bi";
import { MdLayers } from "react-icons/md";

const DashPropertyDetails = ({propData}) => {
    const {id, name, location, beds, bathroom, feet, price, status, image} = propData
    return (
        <div>
            <div className="max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border">
                <div className="relative px-2 py-2">
                    <img className="w-full h-56 object-cover rounded-lg" src={image} alt="House"/>
                    <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow">
                    <span className="text-orange-500 text-xl">🔖</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {status}
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-gray-500 text-sm">{location}</p>
                    <div className="flex items-center gap-2 mt-3 text-gray-600 text-sm">
                    <span className="flex items-center gap-1"><FaBed /> {beds} Beds</span>
                    <span className="flex items-center gap-1"><FaBath /> {bathroom} Bath</span>
                    <span className="flex items-center gap-1"><BiRuler /> {feet} Ft</span>
                    <span className="flex items-center gap-1"><MdLayers /> 3 Floor</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold">${price}</span>
                    <button className="text-purple-600 font-semibold">More Inquiry →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashPropertyDetails;