
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const locations = [
  { name: "Jersey City", time: "4 Hours Away", image: "/src/Component/HomeComponent/img/download (1).jpg" },
  { name: "Galveston", time: "1 Hour Away", image: "/src/Component/HomeComponent/img/download.jpg" },
  { name: "San Francisco", time: "3 Hours Away", image: "/src/Component/HomeComponent/img/images (1).jpg"},
  { name: "Dunao, California", time: "4 Hours Away", image: "/src/Component/HomeComponent/img/images (2).jpg" },
  { name: "Manhattan", time: "2 Hours Away", image: "/src/Component/HomeComponent/img/images (3).jpg" },
  { name: "Upper East Side", time: "3 Hours Away", image: "/src/Component/HomeComponent/img/images (4).jpg" },
];

export default function Popularplace() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='mt-14'>
      <div className='text-center'>
        <p className='py-1 m-auto rounded-full w-[140px] bg-[#ffeeeb] text-[#ff6d52] mb-3 font-medium text-base'>Popular Place</p>
        <h2 className='font-bold text-4xl mb-5'>Find Places To Stay Nearby</h2>
        <p className='text-[#808080] font-medium mb-10'>Highlight the best of your properties by using the List Category shortcode. You <br /> can list specific properties categories, types, cities, areas.</p>
      </div>
      <div className='px-40 h-60 pt-7 mb-10'>
        <div className="relative w-full flex flex-col items-center">
          <div className="flex space-x-4 overflow-hidden">
            {locations.slice(currentIndex, currentIndex + 5).map((location, index) => (
              <div key={index} className="flex flex-col items-center w-36">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-28 h-28 cursor-pointer rounded-lg object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <h3 className="font-semibold mt-2">{location.name}</h3>
                <p className="text-gray-500 text-sm">{location.time}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <FaChevronLeft onClick={prevSlide} className="cursor-pointer text-gray-500" />
            {locations.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-red-500" : "bg-gray-400"}`}
              ></span>
            ))}
            <FaChevronRight onClick={nextSlide} className="cursor-pointer text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
