import React, { useState } from "react";
import RegisterForm from "./RegistrationPages";
import LoginForm from "./LoginPages";



const AuthComponent = () => {
    const [isSignUp, setIsSignUp] = useState(false);
   

    return (
        <div className="flex items-center justify-center  min-h-screen ">
            <div className={`container relative w-[768px] max-w-full h-[550px] bg-white rounded-lg shadow-lg  transition-all duration-500 ${isSignUp ? "right-panel-active" : ""}`} id="container">

                <div className="form-container sign-in-container absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-8">
                    {isSignUp ? <RegisterForm /> : <LoginForm />}
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
