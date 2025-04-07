import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


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

                    <div className='px-10 flex gap-12'>
                        <div>
                            <div className='flex gap-6 mt-14'>
                                <div>
                                    <label className='text-xl font-semibold' htmlFor="">Name *</label><br />
                                    <input type="text" name="" id="" placeholder='Name' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-5 text-lg' />
                                </div>
                                <div>
                                    <label className='ml-8 text-xl font-semibold' htmlFor="">Email *</label><br />
                                    <input type="email" name="" id="" placeholder='Email Address' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-5 ml-7 text-lg' />
                                </div>
                            </div>
                            <div className='flex gap-6 mt-10 mb-8'>
                                <div>
                                    <label className='text-xl font-semibold' htmlFor="">Phone *</label><br />
                                    <input type="text" name="" id="" placeholder='Name' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-5 text-lg' />
                                </div>
                                <div>
                                    <label className='ml-8 text-xl font-semibold' htmlFor="">Subject *</label><br />
                                    <input type="email" name="" id="" placeholder='Email Address' className='px-3 w-[28rem] rounded-md py-3 outline-none border border-slate-400 mt-5 ml-7 text-lg' />
                                </div>
                            </div>

                            <div>
                                <label className=' text-xl font-semibold' htmlFor="">Message *</label> <br />
                                <textarea name="" id="" placeholder='Message' cols="109" rows="5" className='mt-5 rounded-md border outline-none border-slate-400 px-3 py-3 text-lg'></textarea>
                            </div>
                            <button className='mt-8 mb-28 px-9 text-xl font-bold py-3 border border-[#ff4322] bg-transparent hover:bg-[#fa392f] hover:text-[#fff] rounded-md transition-all duration-500'>Send Message</button>
                        </div>
                        <div className='w-full px-6 py-7 mt-14 rounded-lg mb-16 bg-[#004274]'>
                            <div>
                                <h2 className='text-white mt-3 text-2xl ml-8 font-semibold'>Address</h2>
                            </div>
                            <div className='flex gap-7 items-center'>
                                <div className='mt-8 ml-10 text-2xl text-[#ff5a3c]'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
                                </div>
                                <div className='mt-7 text-white text-2xl font-semibold'>
                                    <h2>Brooklyn, New York, United <br /> States</h2>
                                </div>
                            </div>
                            <hr className='mt-8 border border-[#9e9e9e]' />
                            <div>
                                <h2 className='text-white mt-3 text-2xl ml-8 font-semibold'>Phone</h2>
                            </div>
                            <div className='flex gap-7 items-center'>
                                <div className='mt-5 ml-10 text-2xl text-[#ff5a3c]'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z"></path></svg>
                                </div>
                                <div className='mt-5 text-white text-2xl font-semibold'>
                                    <h2>+0124-4565789</h2>
                                </div>
                            </div>
                            <hr className='mt-8 border border-[#9e9e9e]' />
                            <div>
                                <h2 className='text-white mt-3 text-2xl ml-8 font-semibold'>Email</h2>
                            </div>
                            <div className='flex gap-7 items-center'>
                                <div className='mt-5 ml-10 text-2xl text-[#ff5a3c]'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.24283 6.85435L11.4895 1.3086C11.8062 1.11865 12.2019 1.11872 12.5185 1.30878L21.7573 6.85433C21.9079 6.9447 22 7.10743 22 7.28303V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.28315C2 7.10748 2.09218 6.94471 2.24283 6.85435ZM4 8.13261V19H20V8.13214L12.0037 3.33237L4 8.13261ZM12.0597 13.6983L17.3556 9.23532L18.6444 10.7647L12.074 16.3017L5.36401 10.7717L6.63599 9.2283L12.0597 13.6983Z"></path></svg>
                                </div>
                                <div className='mt-5 text-white text-2xl font-semibold'>
                                    <h2>nfo@dreamhome.com</h2>
                                </div>
                            </div>
                            <hr className='mt-8 border border-[#9e9e9e]' />
                            <div>
                                <h2 className='text-white mt-3 text-2xl ml-8 font-semibold'>Follow Us</h2>
                            </div>
                            <div className='mt-7 ml-7 flex gap-5'>
                                <div className='w-14 h-14 rounded-full border-2 transition-all duration-500 cursor-pointer text-[#fff] hover:text-[#ff5a3c] hover:bg-[#fff] border-[#b9b9b9]'>
                                    <FontAwesomeIcon icon={faFacebookF} className='ml-[17px] text-2xl mt-[14px]'/>
                                </div>
                                <div className='w-14 h-14 rounded-full border-2 transition-all duration-500 cursor-pointer text-[#fff] hover:text-[#ff5a3c] hover:bg-[#fff] border-[#b9b9b9]'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='ml-[15px] text-2xl mt-[14px] '/>
                                </div>
                                <div className='w-14 h-14 rounded-full border-2 transition-all duration-500 cursor-pointer text-[#fff] hover:text-[#ff5a3c] hover:bg-[#fff] border-[#b9b9b9]'>
                                    <FontAwesomeIcon icon={faInstagram} className='ml-[15px] text-2xl mt-[14px]'/>
                                </div>
                                <div className='w-14 h-14 rounded-full border-2 transition-all duration-500 cursor-pointer text-[#fff] hover:text-[#ff5a3c] hover:bg-[#fff] border-[#b9b9b9]'>
                                    <FontAwesomeIcon icon={faTwitter} className='ml-[14px] text-2xl mt-[14px]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;