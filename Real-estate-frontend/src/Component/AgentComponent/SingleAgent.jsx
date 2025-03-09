import useHookAgent from '@/Hooks/useHookAgent';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const SingleAgent = () => {

    const [singleData, setSingleData] = useState();
    const { id } = useParams();
    const { agentData } = useHookAgent();

    useEffect(() => {
        const singleData = agentData.find((item) => item.id == id);
        setSingleData(singleData);
    }, [agentData, id])


    const { name, email, address, image, description, practice_area, experience, position, phone, house_name } = singleData || {};

    return (
        <div>
            <div className='relative'>
                <img className='bg-cover bg-no-repeat w-full h-[28rem]' src="https://i.ibb.co.com/nMw7wcQg/agent-details-breadcrumb.png" alt="" />
                <div className='absolute inset-0 bg-gradient-to-r from-black/100 opacity-85 to-transparent'></div>
                <div className='absolute flex items-center left-[43rem] top-1/2 transform -translate-y-1/2 text-5xl text-white font-bold'>
                    <h2>Agents Details</h2>
                </div>
                <div className='absolute top-[26rem] rounded-md left-[46rem] bg-[#ff5a3c] px-7 py-4 '>
                    <h2 className='flex justify-center items-center gap-2 font-bold text-lg text-[#fff]'>Home <span><FontAwesomeIcon icon={faAngleRight} className='font-bold' /></span> <span>Agent Details</span></h2>
                </div>
            </div>
            <div className='mt-[9rem] px-12 mb-10'>
                <div className='w-full bg-[#dcdcdc] flex items-center'>
                    <div>
                        <img className='w-[35rem] h-[35rem] rounded-lg' src="https://i.ibb.co.com/dwJxvkp6/agent-01.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAgent;