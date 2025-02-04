import React, { useState } from "react";

const AuthComponent = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="flex items-center justify-center  min-h-screen bg-gray-100">
            <div className={`container relative w-[768px] max-w-full h-[550px] bg-white rounded-lg shadow-lg  transition-all duration-500 ${isSignUp ? "right-panel-active" : ""}`} id="container">
                
                {/* Sign Up Form */}
                <div className="form-container sign-up-container absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-8">
                    <form action="#">
                        <h1 className="text-2xl font-bold">Create Account</h1>
                        <div className="social-container flex gap-2 my-4">
                            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="text-sm">or use your email for registration</span>
                        <input type="text" placeholder="Name" className="w-[160%] outline-none p-2 my-2 bg-gray-100 rounded" />
                        <input type="email" placeholder="Email" className="w-[160%] outline-none p-2 my-2 bg-gray-100 rounded" />
                        <input type="password" placeholder="Password" className="w-[160%] outline-none p-2 my-2 bg-gray-100 rounded" />
                        <button id="LoginBtn" className="bg-red-500 text-white px-6 py-2 rounded mt-4">Sign Up</button>
                    </form>
                </div>

                {/* Sign In Form */}
                <div className="form-container sign-in-container absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-8">
                    <form action="#">
                        <h1 className="text-2xl font-bold">Sign in</h1>
                        <div className="social-container flex gap-2 my-4">
                            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="p-2 bg-gray-200 rounded-full"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="text-sm">or use your account</span>
                        <input type="email" placeholder="Email" className="w-[160%] outline-none p-2 my-2 bg-gray-100 rounded" />
                        <input type="password" placeholder="Password" className="w-[160%] outline-none p-2 my-2 bg-gray-100 rounded" />
                        <a href="#" className="text-blue-500 text-sm mt-2">Forgot your password?</a>
                        <button id="LoginBtn" className="bg-red-500 text-white px-6 py-2 rounded mt-4">Sign In</button>
                    </form>
                </div>

                {/* Overlay */}
                <div className="overlay-container left-1/2 w-1/2 h-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex flex-col items-center justify-center p-8 transition-transform duration-500">
                    {isSignUp ? (
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Welcome Back!</h1>
                            <p className="text-sm mt-2">To keep connected with us, please login with your personal info</p>
                            <button id="LoginBtn" className="border border-white text-white px-6 py-2 rounded mt-4" onClick={() => setIsSignUp(false)}>Sign In</button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                            <p className="text-sm mt-2">Enter your personal details and start your journey with us</p>
                            <button id="LoginBtn" className="border border-white text-white px-6 py-2 rounded mt-4" onClick={() => setIsSignUp(true)}>Sign Up</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthComponent;
