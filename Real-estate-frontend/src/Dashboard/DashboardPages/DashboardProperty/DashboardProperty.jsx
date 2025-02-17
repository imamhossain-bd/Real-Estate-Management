import React, { useEffect, useRef, useState } from 'react';
import DashPropertyDetails from './DashPropertyDetails';

const DashboardProperty = () => {

    const [location, setLocation] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
  
    const allSuggestions = [ // Replace with your actual location data
      "UK",
      "London",
      "Manchester",
      "Liverpool",
      "FR",
      "Paris",
      "Lyon",
      "New York",
      "Los Angeles",
      "Chicago"
    ];
  
    useEffect(() => {
      // Filter suggestions based on input value
      const filteredSuggestions = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().startsWith(location.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }, [location]);
  
    const handleInputChange = (event) => {
      setLocation(event.target.value);
      setShowDropdown(true); // Show dropdown when input changes
    };
  
    const handleSuggestionClick = (suggestion) => {
      setLocation(suggestion);
      setShowDropdown(false);
      inputRef.current.focus(); // Refocus on the input after selection
    };
  
    const handleInputClick = () => {
      setShowDropdown(!showDropdown); // Toggle dropdown on input click
    };
  
    const handleIconClick = () => {
      setShowDropdown(!showDropdown); // Toggle dropdown on icon click
      inputRef.current.focus(); // Focus on the input after click
    };
  
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const [rent, setRent] = useState(false);
    const [sale, setSale] = useState(false);
    const [allProperties, setAllProperties] = useState(true);
    const [cottage, setCottage] = useState(false);
    const [villas, setVillas] = useState(false);
    const [apartment, setApartment] = useState(false);
    const [duplexBungalow, setDuplexBungalow] = useState(false);

    const [bedrooms, setBedrooms] = useState({
        '1BHK': false,
        '2BHK': false,
        '3BHK': false,
        '4BHK': false,
        '5BHK': false,
    });
    const [accessibility, setAccessibility] = useState({
        balcony: false,
        parking: false,
        spa: false,
        pool: false,
        restaurant: false,
        fitnessClub: false,
    });

    const handleBedroomChange = (type) => {
        setBedrooms({ ...bedrooms, [type]: !bedrooms[type] });
    };

    const handleAccessibilityChange = (feature) => {
        setAccessibility({ ...accessibility, [feature]: !accessibility[feature] });
    };

    const [property,  setProperty] = useState([]);

    // useEffect(() => {
    //     fetch('/FackData.json')
    //     .then(res => res.json())
    //     .then(data => setProperty(data));
    // }, [])

    useEffect(() => {
        const fackData = async() =>{

            const res = await fetch("/FackData.json")
            const data = await res.json()
            setProperty(data);
            // console.log(data);
        };

        fackData();
    }, [])
    


    return (
        <div className='pt-32  mb-8 px-7'>
            <div className='flex gap-4'>
                <div className='w-[17rem] dark:bg-gray-800 h-[58rem] px-4 py-3 shadow-md bg-slate-200 rounded-md'>
                    <div className='mt-2 mb-3'>
                        <h1 className='text-xl font-bold mb-1'>Properties</h1>
                        <p className='text-slate-500'>Show 15,780 Properties</p>
                    </div>
                    <hr className='w-full border-slate-500'/>
                    <div className='mt-4'>
                        <div className="relative">
                            <label htmlFor="location" className="block text-gray-600 mb-2">Properties Location</label>
                            <div className="flex items-center">
                                <input  type="text" id="location" placeholder="Search..." className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={location} onChange={handleInputChange} onClick={handleInputClick} ref = {inputRef}/>
                                <button className="absolute right-3 text-gray-500" onClick={handleIconClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                                </svg>
                                </button>
                            </div>
                            {showDropdown && (
                                <div className="absolute z-10 w-full bg-white rounded-md shadow-lg mt-1" ref={dropdownRef}>
                                {suggestions.length > 0 ? (
                                    suggestions.map((suggestion) => (
                                    <a
                                        key={suggestion}
                                        href="#" // Or use preventDefault()
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </a>
                                    ))
                                ) : (
                                    <div className="px-4 py-2 text-sm text-gray-700">No suggestions</div>
                                )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-gray-600 mb-2'>Type Of Place</h2>
                        <input type="text" name="" id="" className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none'/>
                    </div>
                    <div className='mt-4'>
                        <p className="text-gray-600 mb-2">Custom Price Range:</p>
                        <div className="flex items-center">
                            <input type="range" className="flex-grow mr-2" min="22914.17" max="99516.74" step="any"/>
                            
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600 mb-2">Accessibility Features:</p>
                        <div className="flex items-center">
                            <input type="checkbox" id="rent" className="mr-2" checked={rent} onChange={(e) => setRent(e.target.checked)} />
                            <label htmlFor="rent" className="text-gray-600">For Rent</label>
                            <input type="checkbox" id="sale" className="ml-4 mr-2" checked={sale} onChange={(e) => setSale(e.target.checked)} />
                            <label htmlFor="sale" className="text-gray-600">For Sale</label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600 mb-2">Properties Type:</p>
                        <div className="grid grid-cols-2 gap-y-2 gap-10">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="mr-2" checked={allProperties} onChange={(e) => setAllProperties(e.target.checked)} />
                                <span>All Properties</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="mr-2" checked={cottage} onChange={(e) => setCottage(e.target.checked)} />
                                <span>Cottage</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="mr-2" checked={villas} onChange={(e) => setVillas(e.target.checked)} />
                                <span>Villas</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="mr-2" checked={apartment} onChange={(e) => setApartment(e.target.checked)} />
                                <span>Apartment</span>
                            </label>
                            <label className="">
                                <input type="checkbox" className="mr-2" checked={duplexBungalow} onChange={(e) => setDuplexBungalow(e.target.checked)} />
                                <span>Duplex</span>
                            </label>
                            <label className="">
                                <input type="checkbox" className="mr-2" checked={duplexBungalow} onChange={(e) => setDuplexBungalow(e.target.checked)} />
                                <span>Banglow</span>
                            </label>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="mb-4">
                            <p className="text-gray-600 mb-2">Bedrooms:</p>
                            <div className="flex flex-wrap"> {/* Use flex-wrap for responsiveness */}
                                {['1BHK', '2BHK', '3BHK', '4BHK', '5BHK'].map((type) => (
                                    <button
                                        key={type}
                                        className={`px-3 py-2 rounded-md mr-2 mb-2 focus:outline-none 
                                            ${bedrooms[type] ? 'bg-blue-500 text-white focus:ring-2 focus:ring-blue-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                        onClick={() => handleBedroomChange(type)}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600 mb-2">Accessibility Features:</p>
                            <div className="grid grid-cols-2 gap-2">
                                {['balcony', 'parking', 'spa', 'pool', 'restaurant', 'fitnessClub'].map((feature) => (
                                    <label key={feature} className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={accessibility[feature]}
                                            onChange={() => handleAccessibilityChange(feature)}
                                        />
                                        <span>{feature.charAt(0).toUpperCase() + feature.slice(1)}</span> {/* Capitalize first letter */}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button className="w-full bg-blue-500 mb-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Apply
                        </button>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 gap-4 '>
                        {
                            property.map((propData) => (<DashPropertyDetails key={propData.id} propData = {propData}></DashPropertyDetails>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProperty;