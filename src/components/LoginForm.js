import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {

    const[showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [formData, setFromData] = useState( {
        email: "", password: ""
    })

    function changeHandler(event) {
        setFromData((prevData) => ( {
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address<sup>*</sup></p>
            <input required type='email' value={formData.email} onChange={changeHandler} placeholder='Enter email id' name='email'/>
        </label>

        <label>
            <p>Password<sup>*</sup></p>
            <input required type={showPassword ? ("text") : ("password")} value={formData.password} onChange={changeHandler} placeholder='Enter password here' name='password'/>

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

            <Link to="#">
                <p>Forgot Password</p>
            </Link>
        </label>

        <button>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm;