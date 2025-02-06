import React from 'react';
import DashboardSidebar from '../DashboardPages/SheardDashboard/DashboardSidebar';

import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../DashboardPages/SheardDashboard/NavbarDashboard';


const Layoutdashboard = () => {
    return (
        <div className='dashboard-container flex'>
                <DashboardSidebar className="bg-[#111827]"></DashboardSidebar>
                <div className='dashboard-content w-full'>
                    <NavbarDashboard></NavbarDashboard>
                    <Outlet></Outlet>
                </div>
        </div>
    );
};

export default Layoutdashboard;