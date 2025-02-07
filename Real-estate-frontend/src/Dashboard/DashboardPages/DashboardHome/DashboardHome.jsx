import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUsers, faUserShield, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";


const DashboardHome = () => {

    const AnalyticsCard = ({ title, value, percentage, trend, icon }) => {
        return (
          <div className="bg-white shadow-lg rounded-xl p-5 w-64">
            {/* Icon and Title */}
            <div className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon icon={icon} className="text-2xl text-purple-500" />
              <h3 className="text-gray-500 text-sm">{title}</h3>
            </div>
      
            {/* Main Value */}
            <div className="text-2xl font-bold">{value}</div>
      
            {/* Percentage Change */}
            <div className={`text-xs px-2 py-1 rounded-md inline-block ${trend === "up" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
              {trend === "up" ? "▲" : "▼"} {percentage}%
            </div>
      
            {/* Mini Chart (Placeholder) */}
            <div className="mt-3 flex justify-between text-xs text-gray-400">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
          </div>
        );
      };

    const analyticsData = [
        { title: "No. of Properties", value: "2,854", percentage: "7.34", trend: "up", icon: faBuilding },
        { title: "Regi. Agents", value: "705", percentage: "76.89", trend: "up", icon: faUserShield },
        { title: "Customers", value: "9,431", percentage: "45", trend: "down", icon: faUsers },
        { title: "Revenue", value: "$78.3M", percentage: "8.76", trend: "up", icon: faMoneyBillWave },
      ];
    
    return (
        <div>
            <div className="p-5">
            <h2 className="text-lg font-semibold mb-4">Analytics</h2>
            <div className="flex gap-5">
                {analyticsData.map((item, index) => (
                <AnalyticsCard key={index} {...item} />
                ))}
            </div>
            </div>
        </div>
    );
};

export default DashboardHome;