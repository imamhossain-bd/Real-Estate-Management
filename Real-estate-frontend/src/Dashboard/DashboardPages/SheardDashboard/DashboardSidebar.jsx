import { useState } from "react";
import { FaHome, FaUserTie, FaUsers, FaShoppingCart, FaExchangeAlt, FaStar, FaEnvelope, FaInbox, FaFileAlt, FaLock, FaCogs } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {

    const navLinks = <>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/dashboardhome'}><FaHome /> <span>Dashboards</span> </NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><FaUserTie /> <span>Property</span></NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><FaUsers /> <span>Agents</span> </NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><FaUsers /> <span>Customers</span> </NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}> <FaShoppingCart /> <span>Orders</span> </NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><span><FaExchangeAlt /></span> <span>Transactions</span> </NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><FaStar /> <span>Reviews</span></NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><FaEnvelope /> <span>Messages</span></NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><FaInbox /> <span>Inbox</span> </NavLink> </li>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><FaFileAlt /><span>Post</span> </NavLink> </li>
        <p className="text-gray-400 mt-4 text-sm">CUSTOM</p>
        <li className="hover:bg-gray-800 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer"> <NavLink to={'/'}><FaLock /> <span>Authentication</span></NavLink> </li>
        <li className="p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer relative"> <NavLink to={'/'}><FaCogs /> <span>Widgets</span><span className="absolute right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">Hot</span></NavLink> </li>
    </>
    
    return (
        <div>
            <div className={`max-h-full bg-gray-900 text-white w-64 p-5 transition-all duration-300`}>
      <div className="flex items-center space-x-3">
        <div className="bg-red-500 p-2 rounded-full">
          <FaHome size={24} />
        </div>
        <h1 className="text-xl font-bold">Lahomes</h1>
      </div>
      <p className="text-gray-400 mt-4 text-sm">MENU</p>
      <ul className="mt-2 space-y-2">
        {navLinks}
      </ul>
    </div>
        </div>
    );
};

export default DashboardSidebar;