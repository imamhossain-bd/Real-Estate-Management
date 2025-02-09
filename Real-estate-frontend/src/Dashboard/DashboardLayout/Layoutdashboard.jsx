import React from 'react';
import DashboardSidebar from '../DashboardPages/SheardDashboard/DashboardSidebar';

import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../DashboardPages/SheardDashboard/NavbarDashboard';


const Layoutdashboard = () => {
    return (
        <div className='dashboard-container flex gap-[18rem] dark:bg-gray-700 justify-between'>
                <DashboardSidebar></DashboardSidebar>
                <div className='dashboard-content w-[100%]'>
                    <NavbarDashboard></NavbarDashboard>
                    <Outlet></Outlet>
                </div>  
        </div>
    );
};

export default Layoutdashboard;