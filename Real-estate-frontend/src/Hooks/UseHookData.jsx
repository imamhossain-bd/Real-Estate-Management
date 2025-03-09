import React, { useEffect, useState } from 'react';

const UseHookData = () => {

    const [data, setData] = useState([]);
    
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        const fateData = async() =>{
            setLoading(true);
            const res = await fetch('/AllPropertyData.json');
            const data = await res.json();
            setData(data);
            setLoading(false);
        }

        fateData();
    }, [])
    
    return (
        {data,loading}
    );
};

export default UseHookData;