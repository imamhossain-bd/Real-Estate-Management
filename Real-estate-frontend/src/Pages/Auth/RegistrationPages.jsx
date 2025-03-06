import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup'
import { toast } from 'react-toastify'
import axios from "axios";
import { BACKEND_URI } from "@/Config/Config";

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);

    // Registration Validation Schema
    const validationSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid Email").required("Email is required"),
        password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
    });

    // Registration Values
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    // Registration Submit Handler
    const onSubmitHandler = async (values, { resetForm }) => {
        setLoading(true);
        try {
            const res = await axios.post(`${BACKEND_URI}/register`, values);
            toast.success("Registration Successful!");
            resetForm();
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="">
            <Formik validationSchema={validationSchema} onSubmit={onSubmitHandler} initialValues={initialValues}>
                <Form action="#" className="pt-7">
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
                    <Field type="text" placeholder="Name" name="name" className="w-[160%]  outline-none p-2 my-2 bg-gray-200 rounded" />
                    <ErrorMessage component={'p'} name="name" className="text-[#fe1d1d]" />
                    <Field type="email" placeholder="Email" name="email" className="w-[160%]  outline-none p-2 my-2 bg-gray-200 rounded" />
                    <ErrorMessage component={'p'} name="email" className="text-[#fe1d1d]" />
                    <Field type="password" placeholder="Password" name="password" className="w-[160%]  outline-none p-2 my-2 bg-gray-200 rounded" />
                    <ErrorMessage component={'p'} name="password" className="text-[#fe1d1d]" />
                    <button disabled={loading} type="submit" id="LoginBtn" className="bg-red-500 text-white px-6 py-2 rounded mt-4"><a href="">Sign Up</a></button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegisterForm;
