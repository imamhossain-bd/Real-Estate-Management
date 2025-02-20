import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-5">
                <div className="w-full px-16 mx-auto ">
                    {/* Newsletter Section */}
                    <div className="text-center mt-8 mb-8">
                        <h2 className="text-2xl font-bold">Newsletter</h2>
                        <p className="text-gray-400">Subscribe to our weekly Newsletter and receive updates via email.</p>
                        <div className="mt-4 flex justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-72 p-3 rounded-l-lg text-gray-900 outline-none"
                            />
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg">Subscribe</button>
                        </div>
                        <hr className="mt-8 border-gray-700" />
                    </div>

                    {/* Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Logo and About */}
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2">
                                <div className="text-orange-500 text-3xl font-bold">🏠</div>
                                <h3 className="text-2xl font-bold">Realty<span className="text-orange-500">Clan</span></h3>
                            </div>
                            <p className="text-gray-400 mt-4">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                            </p>
                            {/* Social Media Icons */}
                            <div className="flex space-x-4 mt-4">
                                <FaFacebookF className="text-white hover:text-orange-500 cursor-pointer text-xl" />
                                <FaLinkedinIn className="text-white hover:text-orange-500 cursor-pointer text-xl" />
                                <FaInstagram className="text-white hover:text-orange-500 cursor-pointer text-xl" />
                                <FaTwitter className="text-white hover:text-orange-500 cursor-pointer text-xl" />
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="text-lg font-semibold">Company</h4>
                            <ul className="text-gray-400 mt-4 space-y-2">
                                <li><a href="#">About</a></li>
                                <li><a href="#">All Products</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        {/* Lists by Category */}
                        <div>
                            <h4 className="text-lg font-semibold">Lists by Category</h4>
                            <ul className="text-gray-400 mt-4 space-y-2">
                                <li>For Sale (12)</li>
                                <li>For Rent (6)</li>
                                <li>Apartment (11)</li>
                                <li>House (8)</li>
                                <li>Office (4)</li>
                            </ul>
                        </div>

                        {/* Top Cities */}
                        <div>
                            <h4 className="text-lg font-semibold">Top Cities</h4>
                            <ul className="text-gray-400 mt-4 space-y-2">
                                <li>Castro</li>
                                <li>Haight Ashbury</li>
                                <li>New York</li>
                                <li>California</li>
                                <li>Mexico</li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold">Address</h4>
                            <ul className="text-gray-400 mt-4 space-y-2">
                                <li>📍 Brooklyn, New York, United States</li>
                                <li>📧 Info@dreamhome.com</li>
                                <li>📞 +0124-4565789</li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-4">
                        All Rights Reserved @ Imam Hossain
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;