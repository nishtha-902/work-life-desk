import React from 'react'

const TellUs = () => {
  return (
    <div className='bg-[#ebebeb] py-20 mt-20 flex flex-col justify-center items-center'>
      <p className='nunino text-3xl font-semibold'>Tell Us What You Need</p>
      <p className='mt-4 text-xl'>Choose your requirements and we’ll take it from there.</p>
      <input type='text' placeholder='Full name' className='border-1 border-gray-400 rounded-md py-2 px-6 bg-[#e0dede] mt-4 w-[550px]'/>
      <input type='number' placeholder='Phone Number' className='border-1 border-gray-400 rounded-md py-2 px-6 bg-[#e0dede] mt-4 w-[550px]'/>
      <input type='text' placeholder='Organization name' className='border-1 border-gray-400 rounded-md py-2 px-6 bg-[#e0dede] mt-4 w-[550px]'/>
      <input type='number' placeholder='number of People' className='border-1 border-gray-400 rounded-md py-2 px-6 bg-[#e0dede] mt-4 w-[550px]'/>
    </div>
  )
}

export default TellUs
