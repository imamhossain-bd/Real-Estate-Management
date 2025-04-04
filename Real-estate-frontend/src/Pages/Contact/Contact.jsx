import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <div>
            <div className='relative'>
                <img className='bg-cover bg-no-repeat w-full h-[28rem]' src="https://i.ibb.co.com/yF12C1N2/contact-breadcrumb.png" alt="" />
                <div className='absolute inset-0 bg-gradient-to-r from-black/100 opacity-85 to-transparent'></div>
                <div className='absolute flex items-center left-[45rem] top-1/2 transform -translate-y-1/2 text-5xl text-white font-bold'>
                    <h2>Our Contact</h2>
                </div>
                <div className='absolute top-[26rem] rounded-md left-[46rem] bg-[#ff5a3c] px-7 py-4 '>
                    <h2 className='flex justify-center items-center gap-2 font-bold text-lg text-[#fff]'>Home <span><FontAwesomeIcon icon={faAngleRight} className='font-bold' /></span> <span>Contact Us</span></h2>
                </div>
            </div>
            <div className='mt-32 px-14 flex gap-10 mb-10'>
                <div className='w-full h-auto rounded-xl bg-[#cfd4d4]'>
                    <div className='ml-[14rem] mt-16'>
                        <img src="https://i.ibb.co.com/DDNwM3sq/contact-info-01.webp" alt="" />
                    </div>
                    <div className='mb-[75px]'>
                        <h2 className='text-center mt-8 text-[#004274] font-bold text-3xl'>Contact Sales</h2>
                        <p className='text-center text-[#5c727d] mt-4 font-bold text-xl'>sales@RealtyClan.com</p>
                        <p className='text-center text-[#5c727d] mt-1 font-bold text-2xl'>+01 598 245 5687</p>
                    </div>
                </div>
                <div className='w-full h-auto rounded-xl bg-[#cfd4d4]'>
                    <div className='ml-[14rem] mt-16'>
                        <img src="https://i.ibb.co.com/HLXF7dd3/contact-info-02.webp" alt="" />
                    </div>
                    <div className='mb-[75px]'>
                        <h2 className='text-center mt-8 text-[#004274] font-bold text-3xl'>Contact Rents</h2>
                        <p className='text-center text-[#5c727d] mt-4 font-bold text-xl'>sales@RealtyClan.com</p>
                        <p className='text-center text-[#5c727d] mt-1 font-bold text-2xl'>+01 598 245 5687</p>
                    </div>
                </div>
                <div className='w-full h-auto rounded-xl bg-[#cfd4d4]'>
                    <div className='ml-[14rem] mt-16'>
                        <img src="https://i.ibb.co.com/SGYBBcz/contact-info-03.webp" alt="" />
                    </div>
                    <div className='mb-[75px]'>
                        <h2 className='text-center mt-8 text-[#004274] font-bold text-3xl'>Contact Buy</h2>
                        <p className='text-center text-[#5c727d] mt-4 font-bold text-xl'>sales@RealtyClan.com</p>
                        <p className='text-center text-[#5c727d] mt-1 font-bold text-2xl'>+01 598 245 5687</p>
                    </div>
                </div>
            </div>

            <div>
                {/* Contact Map */}
                <div className="w-full p-4 bg-white shadow-lg rounded-xl">

                </div>
            </div>

            <div className='px-14 mt-12 mb-10'>
                <div className='w-full bg-[#f7fcff] h-auto rounded-lg shadow-lg'>
                    <div>
                        <h2 className='ml-20 text-2xl pt-10 font-semibold'>Get in touch</h2>
                    </div>
                    <hr className='mt-8 border border-[#d2d2d2]' />

                    <div>
                        <div>
                            <div className='flex gap-[28rem]'>
                                <label htmlFor="">Name</label>
                                <label htmlFor="">Email</label>
                            </div>
                            <br />
                            <input type="text" name="" id="" placeholder='Name' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-5 text-lg' />

                            <input type="email" name="" id="" placeholder='Email Address' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-5 ml-7 text-lg' />
                        </div>
                        <br />
                        <textarea name="" id="" placeholder='Message' cols="106" rows="5" className='mt-5 rounded-md border outline-none border-slate-400 px-3 py-3 text-lg'></textarea>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;