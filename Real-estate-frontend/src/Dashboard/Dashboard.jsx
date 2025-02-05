import React from 'react';
import DashboardSidebar from './DashboardPages/DashboardSidebar';


const Dashboard = () => {
    return (
        <div>
            <div className='flex max-w-full max-h-full bg-slate-600'>
                <div className=''>
                    <DashboardSidebar></DashboardSidebar>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;