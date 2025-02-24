import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllPropertyDetails from './AllPropertyDetails';

const AllProperty = () => {

    const [homeProperty, setHomeProperty] = useState([]);

    useEffect(() => {
        const fackData = async() =>{
            const res = await fetch('/HomeProprtyFackData.json')
            const data = await res.json();
            setHomeProperty(data);
            console.log(data)
        }
        fackData();
    }, [])


    return (
        <div>
            <div className='px-14 py-5'>
                <div className='text-center'>
                    <p className='py-1 m-auto rounded-full text-center w-[110px] bg-[#ffeeeb] text-[#ff6d52] mb-3 font-medium text-base'>Property</p>
                    <h2 className='text-4xl font-bold'>Featured Listings</h2>
                    <p className='mt-3'>Highlight the best of your properties by using the List Category shortcode. You can list <br /> specific properties categories, types, cities, areas.</p>
                </div>
                <div className='grid grid-cols-3  px-[5rem] gap-x-10'>
                    {
                        homeProperty.map((hpro) => <AllPropertyDetails key={hpro.id} pasProperty = {hpro} ></AllPropertyDetails> )
                    }
                </div>
                <div className='mt-10 hover:bg-[#ff4410] bg-transparent border border-[#ff4410] w-40 text-xl font-bold text-[#ff4410] hover:text-[#fff] rounded-lg py-4 text-center transition-colors duration-300 m-auto'>
                    <button><a href="/properties">Veiw All</a></button>
                </div>
            </div>
        </div>
    );
};

export default AllProperty;