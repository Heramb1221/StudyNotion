import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const [formData, setFromData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFromData((prevData) => ( {
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passowrds do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created")
        navigate("/dashboard")
    }

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input required type='text' name='firstname' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstname}/>
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input required type='text' name='lastname' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastname}/>
                </label>
            </div>

            <label>
                    <p>Email Address<sup>*</sup></p>
                    <input required type='email' name='email' onChange={changeHandler} placeholder='Enter Email Here' value={formData.email}/>
            </label>

            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input required type={showPassword ? ('text') : ('password')} name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password}/>
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input required type={showPassword ? ('text') : ('password')} name='confirmPassword' onChange={changeHandler} placeholder='Confirm Password' value={formData.confirmPassword}/>
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>
            </div>

            <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm;