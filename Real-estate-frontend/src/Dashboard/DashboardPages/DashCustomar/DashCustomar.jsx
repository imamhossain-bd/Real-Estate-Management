import React from 'react';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Avatar } from "@mui/material";

const DashCustomar = () => {

  const customers = [
    {
      name: "Michael A. Miner",
      email: "daavidnumminen@teleworm.us",
      contact: "+231 06-75820711",
      propertyType: "Residential",
      interestedProperties: "123 Maple St, 456 Oak Ave",
      status: "Interested",
      lastContacted: "12/23/2024",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Theresa T. Brose",
      email: "sinikkapenttinen@dayrep.com",
      contact: "+231 47-23456789",
      propertyType: "Commercial",
      interestedProperties: "789 Pine Blvd",
      status: "Review",
      lastContacted: "9/14/2024",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Theresa T. Brose",
      email: "sinikkapenttinen@dayrep.com",
      contact: "+231 47-23456789",
      propertyType: "Commercial",
      interestedProperties: "789 Pine Blvd",
      status: "Interested",
      lastContacted: "9/14/2024",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Theresa T. Brose",
      email: "sinikkapenttinen@dayrep.com",
      contact: "+231 47-23456789",
      propertyType: "Commercial",
      interestedProperties: "789 Pine Blvd",
      status: "Review",
      lastContacted: "9/14/2024",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Theresa T. Brose",
      email: "sinikkapenttinen@dayrep.com",
      contact: "+231 47-23456789",
      propertyType: "Commercial",
      interestedProperties: "789 Pine Blvd",
      status: "Interested",
      lastContacted: "9/14/2024",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    // Add more customer data as needed
  ];

  return (
    <div className="pt-28 px-9">
      <div className=' w-[159vh] px-4 py-3'>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Customer Photo & Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Contact</th>
                  <th className="py-3 px-6 text-left">Property Type</th>
                  <th className="py-3 px-6 text-left">Interested Properties</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Last Contacted</th>
                  <th className="py-3 px-6 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {customers.map((customer, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <td className="py-3 px-6 text-left flex items-center">
                      <Avatar src={customer.avatar} className="mr-2" />
                      {customer.name}
                    </td>
                    <td className="py-3 px-6 text-left">{customer.email}</td>
                    <td className="py-3 px-6 text-left">{customer.contact}</td>
                    <td className="py-3 px-6 text-left">{customer.propertyType}</td>
                    <td className="py-3 px-6 text-left">{customer.interestedProperties}</td>
                    <td className="py-3 px-6 text-left">
                      <span
                        className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${customer.status === "Interested"
                            ? "bg-blue-500"
                            : customer.status === "Follow-up"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left">{customer.lastContacted}</td>
                    <td className="py-3 px-6 text-left flex space-x-2">
                      <button className="text-gray-600 hover:text-blue-500">
                        <FaEye />
                      </button>
                      <button className="text-gray-600 hover:text-green-500">
                        <FaEdit />
                      </button>
                      <button className="text-gray-600 hover:text-red-500">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-end mt-4 space-x-2">
            <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">Previous</button>
            <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">2</button>
            <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">3</button>
            <button className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">Next</button>
          </div>
      </div>
    </div>
  );
};

export default DashCustomar;