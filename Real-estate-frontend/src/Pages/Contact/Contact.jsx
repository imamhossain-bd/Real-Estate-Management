import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer } from "react-leaflet";


const Contact = () => {
    return (
        <div>
            <div className='relative'>
                <img className='bg-cover bg-no-repeat w-full h-[28rem]' src="https://i.ibb.co.com/mrmkZWPD/agent-breadcrumb.png" alt="" />
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
                <div className="w-full max-w-5xl p-4 bg-white shadow-lg rounded-xl">
                    <h2 className="text-2xl font-bold text-center mb-4">World Map</h2>
                    <MapContainer
                        center={[20, 0]} // Centered on the world
                        zoom={2} // Zoomed out for a full world view
                        className="h-96 w-full rounded-xl"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;