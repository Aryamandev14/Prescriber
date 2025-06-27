import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets_admin/assets'

const AllAppointments = () => {
    const {aToken,appointments,setAppointments,getAllAppointments,cancelAppointment}=useContext(AdminContext)
    const {calculateAge,currency}=useContext(AppContext)
    useEffect(()=>{
        if(aToken){
            getAllAppointments()
        }
    },[aToken])
    const months=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const slotDateFormat=(slotDate)=>{
        const dateArray=slotDate.split("_")
        return dateArray[0]+" "+months[Number(dateArray[1])]+" "+dateArray[2];
    }
  return (
    <div className='w-full max-w-6xl mx-5 '> {/* Better margin control */}
  <p className='mb-3 text-lg font-semibold'>All Appointments</p> {/* Stronger visual */}
  <div className='bg-white border  rounded shadow-sm text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'> {/* Better shadows */}
    {/* Header - fixed columns to match data */}
    <div className='hidden sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b bg-gray-50 font-medium text-gray-700'> {/* Added bg */}
      <p className='font-normal'>#</p>
      <p className='font-normal'>Patient</p>
      <p className='font-normal'>Age</p>
      <p className='font-normal'>Date & Time</p>
      <p className='font-normal'>Doctor</p>
      <p className='font-normal'>Fees</p>
      <p className='font-normal'>Actions</p>
    </div>

    {appointments.map((item,index) => (
      <div 
        className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-600 py-3 px-6 border-b hover:bg-gray-100 ' 
        key={ index} // Better to use item.id if available
      >
        {/* Row content */}
        <p className='max-sm:hidden'>{index+1}</p>
        
        <div className='flex items-center gap-2 '>
          <img 
            className='w-8  rounded-full ' 
            src={item.userData.image} 
            alt={item.userData.name}
            onError={(e) => e.target.src = '/default-avatar.png'} // Fallback
          />
          <p className='font-medium text-gray-800'>{item.userData.name}</p>
        </div>

        <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
        
        <p className='text-gray-700'>
          {slotDateFormat(item.slotDate)}, {item.slotTime}
        </p>
        
        <div className='flex items-center gap-2'>
          <img 
            className='w-8  rounded-full bg-purple-50'
            src={item.docData.image}
            alt={item.docData.name}
            onError={(e) => e.target.src = '/default-avatar.png'}
          />
          <p>{item.docData.name}</p>
        </div>
        
        <p className='font-medium text-green-600'>{currency}{item.amount}</p>
        {
        item.cancelled ? 
        <p className='text-red-400 text-xs font-medium'>Cancelled</p> : 
        item.isCompleted?
        <p className='text-green-500 text-xs font-medium'>Completed</p>:
        <img onClick={()=>cancelAppointment(item._id)}  className='w-10 cursor-pointer' src={assets.cancel_icon}/>}
      
      </div>
    ))}
  </div>
</div>
  )
}

export default AllAppointments