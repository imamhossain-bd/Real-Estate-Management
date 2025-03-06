import React, { useState } from 'react';
import { FaBed, FaBath } from "react-icons/fa";
import { BiRuler } from "react-icons/bi";
import { MdLayers } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';

const DashAddPropert = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };


    const [formData, setFormData] = useState({
        property_name: "",
        status: "",
        price: "",
        property_category: "",
        bedrooms: "",
        bathrooms: "",
        square_foot: "",
        floor: "",
        zip_code: "",
        city: "",
        country: "",
        property_address: "",
        image: null,
        owner_id: "", 
    });

    const handelChange = (e) => {
        // if(e.target.name === image){
        //     setFormData({...formData, image: e.target.files[0] });
        // }else{
        //     setFormData({...formData, [e.target.name]: e.target.value })
        // }

        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
    
        for (let key in formData) {
            data.append(key, formData[key]);
        }
    
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/properties", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success(response.data.message || "Property added successfully!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to add property.");
            console.log(error)
        }
    };
    

    return (
        <div className='pt-32 px-8'>
            <div className='flex gap-6'>
                <div className="max-w-sm bg-white dark:bg-gray-800 h-[29rem] rounded-2xl shadow-lg overflow-hidden border-2">
                    <div className="relative px-2 py-2">
                        <img className="w-full h-56 object-cover rounded-lg" src='../src/assets/p-4-BayuI12Z.jpg' alt="House" />
                        <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow">
                            <span className="text-orange-500 text-xl">🔖</span>
                        </div>
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                            Rent
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-semibold">Skyscraper Apartment</h3>
                        <p className="text-gray-500 text-sm">Houston, TX</p>
                        <div className="flex items-center gap-2 mt-3 text-gray-900 text-sm">
                            <span className="flex items-center gap-1"><FaBed /> 4 Beds</span>
                            <span className="flex items-center gap-1"><FaBath /> 3 Bath</span>
                            <span className="flex items-center gap-1"><BiRuler /> 4200 Ft</span>
                            <span className="flex items-center gap-1"><MdLayers /> 3 Floor</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-xl font-bold">$700000</span>
                        </div>
                        <div className='flex items-center gap-5 mt-3'>
                            <button className="text-purple-900 hover:text-[#fff] hover:bg-[#6058e8] border-2 font-semibold py-2 px-3 rounded-md">Add Property</button>
                            <button className="text-[#fff] bg-[#e96767] font-semibold py-2 px-8 rounded-md">Cancel</button>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Image Div */}
                    <div className="border-2-2 border-2-dashed border-2-gray-300 rounded-lg p-6 w-[110vh] h-[50vh] text-center bg-white shadow-lg">
                        <h2 className="text-gray-700 font-medium mb-2">Add Property Photo</h2>
                        <label htmlFor="fileUpload" className="cursor-pointer flex flex-col items-center justify-center h-72 border-2-2 border-2-dashed border-2-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 transition" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-indigo-500 mb-2" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            <p className="text-gray-900">
                                {selectedFile ? selectedFile.name : "Drop your images here, or click to browse"}
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                                (1900 x 1200 (4:3) recommended. PNG, JPG, JPEG, and GIF files are allowed)
                            </p>
                        </label>
                        <input id="fileUpload" type="file" className="hidden" onChange={handleFileChange}/>
                    </div>
                    {/* New Property Add */}
                    <div className="bg-white shadow-lg mb-5 mt-3 rounded-lg p-6 w-full max-w-4xl mx-auto">
                        <h2 className="text-lg font-semibold mb-4">Property Information</h2>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Property Name & Categories */}
                            <div>
                                <label className="block text-gray-900 text-sm mb-1">Property Name</label>
                                <input type="text" placeholder="Name" onChange={handelChange} className="w-full border-2 rounded px-3 py-2 outline-none" />
                            </div>
                            <div>
                                <label className="block text-gray-900 text-sm mb-1">Property Categories</label>
                                <input type="text" placeholder="Villas" onChange={handelChange} className="w-full border-2 rounded px-3 py-2 outline-none" />
                            </div>

                            {/* Price & Property For */}
                            <div className="relative">
                                <label className="block text-gray-900 text-sm mb-1">Price</label>
                                <div className="flex items-center border-2 rounded px-3 py-2">
                                    <span className="text-gray-500">$</span>
                                    <input type="text" placeholder="000" onChange={handelChange} className="w-full outline-none ml-2" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-900 text-sm mb-1">Property For</label>
                                <input type="text" placeholder="Sale" onChange={handelChange} className="w-full border-2 rounded px-3 py-2 outline-none" />
                            </div>

                            {/* Bedroom & Bathroom */}
                            <div className="relative">
                                <label className="block text-gray-900 text-sm mb-1">Bedroom</label>
                                <div className="flex items-center border-2 rounded px-3 py-2">
                                    <span className="text-gray-500">🛏️</span>
                                    <input type="number" onChange={handelChange} className="w-full outline-none ml-2" />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-gray-900 text-sm mb-1">Bathroom</label>
                                <div className="flex items-center border-2 rounded px-3 py-2">
                                    <span className="text-gray-500">🛁</span>
                                    <input type="number" onChange={handelChange} className="w-full outline-none ml-2" />
                                </div>
                            </div>

                            {/* Square Foot & Floor */}
                            <div className="relative">
                                <label className="block text-gray-900 text-sm mb-1">Square Foot</label>
                                <div className="flex items-center border-2 rounded px-3 py-2">
                                    <span className="text-gray-500">📏</span>
                                    <input type="number" onChange={handelChange} className="w-full outline-none ml-2" />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-gray-900 text-sm mb-1">Floor</label>
                                <div className="flex items-center border-2 rounded px-3 py-2">
                                    <span className="text-gray-500">🏢</span>
                                    <input type="number" onChange={handelChange} className="w-full outline-none ml-2" />
                                </div>
                            </div>

                            {/* Property Address */}
                            <div className="col-span-2">
                                <label className="block text-gray-900 text-sm mb-1">Property Address</label>
                                <textarea placeholder="Enter address" onChange={handelChange} className="w-full border-2 rounded px-3 py-2 outline-none"></textarea>
                            </div>

                            {/* Zip-Code, City & Country */}
                            <div className='flex items-center gap-5 w-[110vh]'>
                                <div>
                                    <label className="block text-gray-800 text-sm mb-1">Zip-Code</label>
                                    <input type="text" placeholder="Zip-Code" onChange={handelChange} className="w-full border-2 rounded px-3 py-2 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-gray-900 text-sm mb-1">City</label>
                                    <input type="text" placeholder="City" onChange={handelChange} className="w-full border-2 rounded px-3 py-2 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-gray-900 text-sm mb-1">Country</label>
                                    <input type="text" placeholder="Country" onChange={handelChange} className="w-full border-2 rounded px-3 py-2 outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end mb-5 items-center gap-5 mt-14'>
                            <button className="text-purple-900 hover:text-[#fff] hover:bg-[#6058e8] border-2 font-semibold py-2 px-3 rounded-md">Create Property</button>
                            <button className="text-[#fff] bg-[#e96767] font-semibold py-2 px-8 rounded-md">Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default DashAddPropert;