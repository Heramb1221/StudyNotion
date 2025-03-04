import React from 'react'
import frame from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc';

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-[1.875rem] font-semibold text-richblack-5 leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span><br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                <div className=' w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem] '>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle className='text-[1.5rem] text-blue-100'/>
                Sign in with Google
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame} alt="pattern" width={558} height={504} loading='lazy' className=''></img>
            <img src={image} alt="students" width={558} height={490} loading='lazy' className='absolute -top-4 right-4'></img>
        </div>
    </div>
  )
}

export default Template;