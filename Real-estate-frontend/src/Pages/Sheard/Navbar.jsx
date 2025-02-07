
import { NavLink } from 'react-router-dom'
import { Button, Dropdown, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import AuthComponent from '../Auth/AuthComponent';
import { motion, AnimatePresence } from "framer-motion";



const Navbar = () => {

  // const [showSearch, setShowSearch] = useState(false);
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [mainElementTop, setMainElementTop] = useState(0);

  // // Function to handle scroll events
  // const handleScroll = () => {
  //   // Check if the page has scrolled past the <main> tag
  //   if (window.scrollY >= mainElementTop) {
  //     setIsNavbarVisible(true); // Navbar should be visible when past <main>
  //   } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
  //     // Scroll down - Hide navbar
  //     setIsNavbarVisible(false);
  //   } else if (window.scrollY < lastScrollY) {
  //     // Scroll up - Show navbar
  //     setIsNavbarVisible(true);
  //   }

  //   // Update last scroll position
  //   setLastScrollY(window.scrollY);
  // };

  // Hook to attach scroll event listener when component mounts
  // useEffect(() => {
  //   // Find the position of the <main> tag
  //   const mainElement = document.querySelector('main');
  //   if (mainElement) {
  //     setMainElementTop(mainElement.offsetTop);
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [lastScrollY]);

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = (e) => {
      e.preventDefault();
      setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
      setLoginModalOpen(false);
  };
    const items = [
        {
          key: '1',
          label: (
            <NavLink className={'text-base font-medium text-[#ff4848]'} to={'/about'}>About Us</NavLink>
          ),
        },
        {
          key: '2',
          label: (
            <NavLink className={'text-base font-medium'} to={'/service'}>Our Service</NavLink>
          ),
        },
        {
          key: '3',
          label: (
            <NavLink className={'text-base font-medium'} to={'/newproperty'}>Submit New Property</NavLink>
          ),
        },
        {
          key: '4',
          label: (
            <NavLink className={'text-base font-medium'} to={'/gallery'}>Gallery</NavLink>
          ),
        },
      ];
      const navLinks = <>
        <li className='px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg'><NavLink to="/">Home</NavLink></li>
        <li className='px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg'><NavLink to="/properties">Properties</NavLink></li>
        <li className='px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg'><NavLink to="/agents">Agents</NavLink></li>
        <li className="px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg relative group"><NavLink to="/pages">
                        <Dropdown className='px-4 py-2' menu={{ items, className:"w-[200px]"}} placement="bottom" arrow>
                            Pages
                        </Dropdown>
        </NavLink>
                
            </li>
        <li className='px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg'><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className='sticky top-0 z-50 bg-white bg-opacity-75 backdrop-blur-sm'>
            <div className=' max-w-full '>
                <div className='flex justify-between h-[70px] shadow-xl w-full items-center px-12'>
                    <div className='w-[130px] ml-5 mt-1'>
                        <img src="/src/assets/logo3.png" alt="" />
                    </div>

                    <div className='ml-40'>
                        <ul className='menu-horizontal list-none flex gap-3'>
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex gap-5 list-none ml-32 items-center'>
                      <div className='flex gap-3 items-center text-lg text-[#000]'><a href="#"><FontAwesomeIcon icon={faPhone} className='text-[#f1913d] text-lg' /> 1-333-345-6868</a></div>
                          
                      <div className="dropdown z-40 dropdown-end">
                            <div tabIndex={0} role="button" className="avatar">
                              <div className="">
                                <FontAwesomeIcon className='text-4xl text-[#f1913d]' icon={faCircleUser} />
                              </div>
                            </div>
                            <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 px-7 pt-3 p-2 shadow">
                              <button onClick={openLoginModal} className='px-10 font-medium py-2 rounded-lg bg-[#2c2e33] hover:bg-[#f1913d] text-white text-lg transition duration-700'><a href="">Login</a></button>
                              <p className='text-center mt-3 font-medium'>Don't You Have an account?</p>
                              <a onClick={openLoginModal} href="/authcomponent" className='text-center mt-3 mb-2 text-[#f1913d] underline text-base'>Registration</a>
                            </ul>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isLoginModalOpen && (

                        <motion.div 
                        key="modal" // Add a key for AnimatePresence
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                        >
                          <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }} // Initial scale and opacity for the modal
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="rounded-lg  relative" // Set width, adjust as needed
                          >
                              <div className="fixed pt-16 inset-0 bg-[#000] bg-opacity-50 transition-opacity duration-300 ease-in-out h-[100vh] flex items-center justify-center  z-50" style={{ opacity: isLoginModalOpen ? 1 : 0 }}> {/* Overlay */}
                                <div className="rounded-lg  transform transition-transform duration-300 ease-in-out"  style={{ transform: isLoginModalOpen ? 'scale(1)' : 'scale(0.8)', opacity: isLoginModalOpen ? 1 : 0 }}> 
                                <button className="absolute top-32 ml-[45rem] z-50 text-slate-700 hover:text-gray-700" onClick={closeLoginModal} >
                                <FontAwesomeIcon className='text-2xl' icon={faXmark} />
                                </button>
                                  <AuthComponent setLoginModalOpen={setLoginModalOpen}></AuthComponent>
                                  
                                </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Navbar;