import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const AuthComponent = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="flex items-center justify-center  min-h-screen bg-gray-100">
            <div className={`container relative w-[768px] max-w-full h-[550px] bg-white rounded-lg shadow-lg  transition-all duration-500 ${isSignUp ? "right-panel-active" : ""}`} id="container">
                
                {/* Sign Up Form */}
                <div className="form-container sign-up-container absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-8">
                    <form action="#" className="pt-7">
                        <h1 className="text-2xl font-bold">Create Account</h1>
                        <div className="social-container flex gap-2 my-4">
                            {/* Facebook Icon */}
                            <a href="#" className="p-2 bg-gray-200 rounded-full"><FontAwesomeIcon icon={faFacebook} 
                            className="text-blue-500 text-4xl ml-[2px] h-[2.4rem]" /></a>
                            {/* Google Icon */}
                            <a href="#" className="p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-[100px] h-[100px]" viewBox="0 0 48 48"> <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            </a>
                            {/*  */}
                            <a href="#" className=" border-none"><FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-4xl ml-[2px] h-[2.4rem]" /></a>
                        </div>
                        <span className="text-sm">or use your email for registration</span>
                        <input type="text" placeholder="Name" className="w-[160%]  outline-none p-2 my-2 bg-gray-100 rounded" />
                        <input type="email" placeholder="Email" className="w-[160%]  outline-none p-2 my-2 bg-gray-100 rounded" />
                        <input type="password" placeholder="Password" className="w-[160%]  outline-none p-2 my-2 bg-gray-100 rounded" />
                        <button id="LoginBtn" className="bg-red-500 text-white px-6 py-2 rounded mt-4"><a href="/dashboard">Sign Up</a></button>
                    </form>
                </div>

                {/* Sign In Form */}
                <div className="form-container sign-in-container absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-8">
                    <form action="#">
                        <h1 className="text-2xl font-bold">Sign in</h1>
                        <div className="social-container flex gap-2 my-4">
                            {/* Facebook Icon */}
                            <a href="#" className="p-2 bg-gray-200 rounded-full"><FontAwesomeIcon icon={faFacebook} 
                            className="text-blue-500 text-4xl ml-[2px] h-[2.4rem]" /></a>
                            {/* Google Icon */}
                            <a href="#" className="p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-[100px] h-[100px]" viewBox="0 0 48 48"> <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            </a>
                            {/*  */}
                            <a href="#" className=" border-none"><FontAwesomeIcon icon={faTwitter} className="text-blue-500 text-4xl ml-[2px] h-[2.4rem]" /></a>
                        </div>
                        <span className="text-sm">or use your account</span>
                        <input type="email" placeholder="Email" className="w-[160%] outline-none p-2 my-2 bg-gray-100 rounded" />
                        <input type="password" placeholder="Password" className="w-[160%] outline-none p-2 my-2 bg-gray-100 rounded" />
                        <a href="#" className="text-blue-500 text-sm mt-2">Forgot your password?</a>
                        <button id="LoginBtn" className="bg-red-500 text-white px-6 py-2 rounded mt-4">Sign In</button>
                    </form>
                </div>

                {/* Overlay */}
                <div className="overlay-container z-30 absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex flex-col items-center justify-center p-8 transition-transform duration-500">
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
