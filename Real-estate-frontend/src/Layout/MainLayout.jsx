import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { useMainContext } from '@/Context/MainContext';
import { useNavigate } from 'react-router-dom';

const MainLayout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const { user } = useMainContext();
    const navigate = useNavigate();


    useEffect(() => {
        if (!user?.email) {
            setLoading(false);
            navigate("/");
        } else {
            setLoading(false); // Prevent infinite loading
        }
    }, [user]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            {user?.email ? children : "/dashboards"}
        </>
    );
};

export default MainLayout;