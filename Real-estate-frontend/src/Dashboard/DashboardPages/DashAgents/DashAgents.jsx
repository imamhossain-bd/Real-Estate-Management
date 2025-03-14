import React, { useEffect, useState } from 'react';
import { Search, Settings, Filter } from "lucide-react";

const DashAgents = () => {
    // const agents = [
    //     {
    //       name: "Michael A. Miner",
    //       address: "Lincoln Drive Harrisburg, PA 17101 U.S.A",
    //       email: "daavidnummimen@teleworm.us",
    //       contact: "+231 06-75820711",
    //       experience: "5 Year",
    //       date: "Jan 22, 2025",
    //       status: "Active",
    //       image: "https://randomuser.me/api/portraits/men/1.jpg",
    //     },
    //     {
    //       name: "Theresa T. Brose",
    //       address: "Boulevard Cockeysville TX 75204",
    //       email: "sinikkapenttinen@dayrep.com",
    //       contact: "+231 47-23456789",
    //       experience: "2 Year",
    //       date: "Nov 7, 2024",
    //       status: "Active",
    //       image: "https://randomuser.me/api/portraits/women/2.jpg",
    //     },
    //     {
    //       name: "James L. Erickson",
    //       address: "Woodside Circle Panama City, FL 32401",
    //       email: "jerepalmu@rhyta.com",
    //       contact: "+231 73-34567890",
    //       experience: "7 Year",
    //       date: "Oct 14, 2024",
    //       status: "Inactive",
    //       image: "https://randomuser.me/api/portraits/women/3.jpg",
    //     },
    //     {
    //       name: "James L. Erickson",
    //       address: "Woodside Circle Panama City, FL 32401",
    //       email: "jerepalmu@rhyta.com",
    //       contact: "+231 73-34567890",
    //       experience: "7 Year",
    //       date: "Oct 14, 2024",
    //       status: "Inactive",
    //       image: "https://randomuser.me/api/portraits/women/2.jpg",
    //     },
    //   ];
    
    const [Users ,setUsers] = useState([]);

    useEffect(() => {
        const fakeData = async() =>{
            const res = await fetch('http://127.0.0.1:8000/api/report')
            const data = await res.json()
            setUsers(data)
            console.log(data);
        }
        fakeData()
    }, [])

    return (
        <div className='px-8  pt-28'>
            <div className='w-[161vh]'>
                <h2 className="text-lg pl-4 font-semibold mb-4">Agent List : {Users.length}</h2>
                <div className="bg-[#f3f3f3] shadow-lg rounded-lg p-4">
                    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                        {/* Search Input */}
                        <div className="flex items-center bg-white px-3 py-2 rounded-lg border">
                            <Search className="text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search Agent"
                                className="ml-2 outline-none w-52 bg-transparent"
                            />

                        </div>
                        {/* Agent Count */}
                        <span className="text-gray-600 text-lg">311 Agent</span>
                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-100 transition">
                                <Settings size={16} />
                                More Setting
                            </button>

                            <button className="flex items-center gap-2 border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-100 transition">
                                <Filter size={16} />
                                Filters
                            </button>

                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                                + New Agent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-6 bg-white rounded-xl mt-8 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">All Agent List</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 text-left text-sm">
                                    <th className="p-3">Agent</th>
                                    <th className="p-3">Address</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Contact</th>
                                    <th className="p-3">Experience</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashAgents;