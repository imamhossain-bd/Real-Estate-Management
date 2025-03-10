import React from 'react';
import DashboardSidebar from '../DashboardPages/SheardDashboard/DashboardSidebar';

import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../DashboardPages/SheardDashboard/NavbarDashboard';
import MainLayout from '@/Layout/MainLayout';


const Layoutdashboard = () => {
    return (
            <div className='flex gap-[18rem] dark:bg-gray-700'>
                <DashboardSidebar></DashboardSidebar>
                <div>
                    <NavbarDashboard></NavbarDashboard>
                    <Outlet></Outlet>
                </div>
            </div>
    );
};

export default Layoutdashboard;