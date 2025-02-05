import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Properties from '../Pages/Properties/Properties';
import Agents from '../Pages/Agents/Agents';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';
import Service from '../Pages/Service/Service';
import NewProperty from '../NewProperties/NewProperty';
import Gallery from '../Pages/Gallery/Gallery';
import Dashboard from '../Dashboard/Dashboard';
import AuthComponent from '@/Pages/Auth/AuthComponent';
import DashboardSidebar from '@/Dashboard/DashboardPages/DashboardSidebar';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/properties',
                element: <Properties></Properties>
            },
            {
                path:'/agents',
                element: <Agents></Agents>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/newproperty',
                element: <NewProperty></NewProperty>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/authcomponent',
                element: <AuthComponent></AuthComponent>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboardHome',
                element: <DashboardSidebar></DashboardSidebar>
            }
        ]
    }
])

export default Router;