import React from 'react';
import DashboardSidebar from '../DashboardPages/SheardDashboard/DashboardSidebar';

import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../DashboardPages/SheardDashboard/NavbarDashboard';


const Layoutdashboard = () => {
    return (
        <div className='dashboard-container flex gap-5'>
                <DashboardSidebar></DashboardSidebar>
                <div className='dashboard-content'>
                <NavbarDashboard></NavbarDashboard>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layoutdashboard;