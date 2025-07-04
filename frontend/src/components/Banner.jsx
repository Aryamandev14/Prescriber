import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate()
  return (
    <div className='flex bg-purple-800 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-8'>
        {/*-----left side-------- */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div>

            <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>Book Appointment</p>
            <p className='mt-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>With 100+ Trusted Doctors</p>
            </div>
   <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='cursor-pointer bg-purple-50 text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition:all duration:4 00'>Create Account</button>
        </div>
          {/*-----Right side-------- */}
          <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
    <img className='w-full absolute bottom-0 right-0 max-w-wd' src={assets.appointment_img}/>
          </div>

    </div>

  )
}

export default Banner