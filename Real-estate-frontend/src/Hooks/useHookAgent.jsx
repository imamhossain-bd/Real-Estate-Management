import React, { useEffect, useState } from 'react';

const useHookAgent = () => {

    const [agentData, setAgentData] = useState([])

    useEffect(() => {
        const fakeData = async () => {
            const res = await fetch('/AllAgentData.json')
            const data = await res.json();
            setAgentData(data);
        }
        fakeData()
    }, [])

    return (
        {agentData}
    );
};

export default useHookAgent;