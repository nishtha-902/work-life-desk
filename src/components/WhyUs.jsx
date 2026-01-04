import React from 'react'
import whyus from '../assets/whyus.png'

const WhyUs = () => {
  return (
    <div className='mt-24 bg-[#FFFABB] h-[500px] py-12 px-24 flex justify-between items-center'>
      <div className='w-[50%]'>
        <p className='nunito text-4xl font-bold'>Why Us</p>
        <p className='nunito text-lg mt-8'>Work Life Desks is designed around work-life balance, offering value-driven coworking spaces that prioritize comfort, ergonomics, and wellness. With green, stress-free interiors and features like sit-stand desks, we create workspaces that support both productivity and well-being.</p>
      </div>
      <div className='w-[50%] flex justify-center'>
        <img src={whyus} alt='why us' className='h-[400px]'/>
      </div>
    </div>
  )
}

export default WhyUs
