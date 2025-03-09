import React from 'react';
import AgentCard from './AgentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import useHookAgent from '@/Hooks/useHookAgent';

const Agents = () => {

    const {agentData} = useHookAgent();

    return (
        <div className=''>
            <div className='relative'>
                <img className='bg-cover bg-no-repeat w-full h-[28rem]' src="https://i.ibb.co.com/mrmkZWPD/agent-breadcrumb.png" alt=""/>
                <div className='absolute inset-0 bg-gradient-to-r from-black/100 opacity-85 to-transparent'></div>
                <div className='absolute flex items-center left-80 top-1/2 transform -translate-y-1/2 text-5xl text-white font-bold'>
                    <h2>Our Agents</h2>
                </div>
                <div className='absolute top-[26rem] rounded-md left-[46rem] bg-[#ff5a3c] px-7 py-4 '>
                    <h2 className='flex justify-center items-center gap-2 font-bold text-lg text-[#fff]'>Home <span><FontAwesomeIcon icon={faAngleRight} className='font-bold' /></span> <span>Agent</span></h2>
                </div>
            </div>
            <div className='mt-[11rem] grid grid-cols-4 gap-y-10 px-10 ml-7 mb-36'>
                {
                    agentData.map((agent) => <AgentCard key={agent.id} allAgent={agent}></AgentCard>)
                }
            </div>
        </div>
    );
};

export default Agents;