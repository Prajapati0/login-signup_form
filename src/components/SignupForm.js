import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const SignupForm = (props) => {
    // const [showPassword, setShowPassWord] = useState(false);
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
    const [showCreatePass, setShowCreatePass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    // const [accountType, setAccountType] = useState("student");

    const [formData, setFormData] = useState({
        firstName: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        // accountType:"student",
    })
   const[accountType,setAccountType] = useState("student");


    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Create");
        const accountData = {
          ...formData
        };
        const finalData = {
            ...accountData,
            accountType
        }
        console.log("printing form data");
        console.log(finalData);
    
        navigate("/dashboard");
    }


    return (
        // student instructor tab
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button 
                className={`${accountType==="student" 
                ? 
                 "bg-richblack-900 text-richblack-5"
                 :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("student")}>
                    Student
                </button>

                <button 
                 className={`${accountType==="instructor" 
                 ? 
                  "bg-richblack-900 text-richblack-5"
                  :"bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* fisrt name and last name */}
                <div className="flex gap-x-4 mt-2">
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter first name"
                            value={formData.firstName}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>

                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastname"
                            onChange={changeHandler}
                            placeholder="Enter last name"
                            value={formData.lastname}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                    </div>
                    {/* email address */}
                    <label className="w-full  mt-2">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  mt-2">Email address<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter email address"
                            value={formData.email}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                

{/* create and confirm password */}
                <div className="w-full flex gap-x-4 mx-0  mt-2">
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create password<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showCreatePass ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                        <span 
                         className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={() => setShowCreatePass(!showCreatePass)}>
                            {showCreatePass ? (< AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                     
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                         
                        >Confirm password<sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showConfirmPass ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                        <span 
                         className="absolute right-3 top-[37px] cursor-pointer"
                        onClick={() => setShowConfirmPass(!showConfirmPass)}>
                            {showConfirmPass ? (< AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>

                </div>

                <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[4px] mt-5">
                    Create Account
                </button>

            </form>
        </div>
    );
};
export default SignupForm