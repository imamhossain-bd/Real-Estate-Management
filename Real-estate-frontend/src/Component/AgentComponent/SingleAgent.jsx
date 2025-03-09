import useHookAgent from '@/Hooks/useHookAgent';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const SingleAgent = () => {

    const [singleData, setSingleData] = useState();
    const { id } = useParams();
    const { agentData } = useHookAgent();

    useEffect(() => {
        const singleData = agentData.find((item) => item.id == id);
        setSingleData(singleData);
    }, [agentData, id])


    const { name, email, address, image, description, practice_area, experience, position, phone, house_name, social  } = singleData || {};

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
                <div className='w-full flex'>
                    <div>
                        <img className='w-[45rem] h-[33rem] rounded-lg' src={image} alt="" />
                    </div>
                    <div className='py-10 px-10 w-full'>
                        <h2 className='text-3xl font-bold'>{name}</h2>
                        <p className='text-[#4881f3] text-xl mt-2 font-medium'>{position}</p>
                        <hr className='border mt-5 mb-5' />
                        <div>
                            <h2 className='text-xl font-medium'>{description}</h2>

                            <div className="grid grid-cols-2 text-xl gap-y-3 gap-x-10 mt-10 text-gray-700">
                                <p><span className="font-semibold">Phone:</span> {phone}</p>
                                <p><span className="font-semibold">Email:</span> {email}</p>
                                <p><span className="font-semibold">Position:</span> {position}</p>
                                <p><span className="font-semibold">Address:</span> {address}</p>
                                <p><span className="font-semibold">Experience:</span> {experience} Years</p>
                                <p><span className="font-semibold">Practice Area:</span> {practice_area}</p>
                            </div>

                            <div className="flex mt-16 gap-6">
                                <a href='#' target="_blank" rel="noopener noreferrer" className="text-gray-600 px-3 py-3 rounded-lg border hover:text-white transition-all duration-500 hover:bg-[#ff5a3c]">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href='#' target="_blank" rel="noopener noreferrer" className="text-gray-600 px-3 py-3 rounded-lg border hover:text-white transition-all duration-500 hover:bg-[#ff5a3c]">
                                    <FaTwitter size={20} />
                                </a>
                                <a href='#' target="_blank" rel="noopener noreferrer" className="text-gray-600 px-3 py-3 rounded-lg border hover:text-white transition-all duration-500 hover:bg-[#ff5a3c]">
                                    <FaLinkedinIn size={20} />
                                </a>
                                <a href='#' target="_blank" rel="noopener noreferrer" className="text-gray-600 px-3 py-3 rounded-lg border hover:text-white transition-all duration-500 hover:bg-[#ff5a3c]">
                                    <FaInstagram size={20} className='' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-14'>
                    <h2 className='text-3xl font-semibold'>Biography</h2>
                    <p className='text-xl font-medium text-[#949393] mt-5'>More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size. Today, our proven sales training program has made us a leader in sales and management training.</p>


                    <p className='mt-5 text-xl font-medium text-[#949393]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt sals ut labore et dolore for magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate sale velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem., sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
                <div className='flex gap-10 mt-16 items-center'>
                    <div className='w-[25rem] h-[27rem] shadow-lg hover:border transition-all duration-500 hover:border-[#ff5a3c] rounded-lg'>
                        <img className='w-[15rem] ml-[5rem] mt-16' src="https://i.ibb.co.com/svCnSgbw/our-process-01.png" alt="" />
                        <h2 className=' mt-7 text-center text-2xl font-bold'>Home buying</h2>
                        <p className='text-center text-lg font-medium text-[#828282] mt-5'>Lorem ipsum dolor sit ame it, <br /> consectetur adipisicing elit, sed do <br /> eiusmod te mp or</p>
                    </div>
                    <div className='w-[25rem] h-[27rem] shadow-lg hover:border transition-all duration-500 hover:border-[#ff5a3c] rounded-lg'>
                        <img className='w-[15rem] ml-[5rem] mt-16' src="https://i.ibb.co.com/pj18TY3X/our-process-02.png" alt="" />
                        <h2 className=' mt-7 text-center text-2xl font-bold'>Home buying</h2>
                        <p className='text-center text-lg font-medium text-[#828282] mt-5'>Lorem ipsum dolor sit ame it, <br /> consectetur adipisicing elit, sed do <br /> eiusmod te mp or</p>
                    </div>
                    <div className='w-[25rem] h-[27rem] shadow-lg hover:border transition-all duration-500 hover:border-[#ff5a3c] rounded-lg'>
                        <img className='w-[15rem] ml-[5rem] mt-16' src="https://i.ibb.co.com/qFYgxCGM/our-process-03.png" alt="" />
                        <h2 className=' mt-7 text-center text-2xl font-bold'>Home buying</h2>
                        <p className='text-center text-lg font-medium text-[#828282] mt-5'>Lorem ipsum dolor sit ame it, <br /> consectetur adipisicing elit, sed do <br /> eiusmod te mp or</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAgent;