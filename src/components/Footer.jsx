import React from 'react'
import logogrp from '../assets/logo.png'
import logoworklife from '../assets/logoworklife.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png' 
import mail from '../assets/mail.png'

const Footer = () => {
  return (
    <div className='bg-[#FFFABB] h-[420px] mt-24 px-42 flex flex-col justify-center'>
      <div className="flex justify-between items-center">
        <div className=''>
        <img src={logoworklife} alt='logo' className='h-[50px]'/>
        <p className='mt-16'>a product by</p>
        <img src={logogrp} alt='logo'/>
        <p className='nunito font-semibold text-right'>Tech Pvt. Ltd.</p>
      </div>
      <div className='w-[35%] text-[14px]'>
        <div className='flex'>
            <img src={location} alt='location' className='h-5'/><p>740, Phase V, Udyog Vihar,
Sector 19, Gurugram, Haryana 122016</p>
        </div>
<div className='flex justify-between items-center mt-4'>
    <div className="flex items-center">
        <img src={phone} alt='phone' className='h-5'/>
        <p>+91 99999 88493</p>
    </div>
    <div className="flex items-center">
        <img src={mail} alt='mail' className='h-4'/>
    <p className='ml-2'>products@incubr.com</p>
    </div>
</div>
      </div>
      </div>
      <div className='bg-gray-500 w-[70%] h-[1px] mx-32 mt-16'></div>
      <div className='flex justify-evenly mt-8'>
        <div className='nunito text-sm'>Startups</div>
        <div className='nunito text-sm'>Property Owners</div>
        <div className='nunito text-sm'>Contact Us</div>
        <div className='nunito text-sm text-gray-500'>Copyright © INCUBR TECH PVT LTD 2023</div>
      </div>
    </div>
  )
}

export default Footer
