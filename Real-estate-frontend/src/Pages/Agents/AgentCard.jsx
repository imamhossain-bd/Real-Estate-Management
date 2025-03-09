import React from 'react';


const AgentCard = ({ allAgent }) => {
    

    const {id, image, position, name } = allAgent;
    return (
        <div>
            <a href={`/singleagent/${id}`}>
                <div className="w-[370px] rounded-xl shadow-md bg-white overflow-hidden">
                    {/* Image Section */}
                    <div className="relative">
                        <img className="w-full h-[320px] object-cover" src={image} alt="Agent" />
                        {/* Floating Plus Button */}
                        {/* <div className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-md cursor-pointer">
                        +
                    </div> */}
                    </div>
                    {/* Agent Info */}
                    <div className="p-4 text-center">
                        <h2 className='text-3xl font-bold'>{name}</h2>
                        <p className="text-blue-500 mt-1 font-semibold text-base mb-3">{position}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default AgentCard;