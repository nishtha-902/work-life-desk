import React from 'react'

const Rent = () => {
  return (
    <section className="mt-24 sm:mt-48 sm:mx-12 lg:mx-48 flex flex-col justify-center items-center">
      <p className="nunito text-[30px] lg:mb-4 font-bold sm:text-[30px] lg:text-[40px] text-center">
        Rent an Office
      </p>
      <p className="nunito text-[30px] lg:mb-16 sm:text-[30px] lg:text-[20px] w-[70%] text-center">Whether you’re a growing startup or an established enterprise, we provide spaces that scale with your business.</p>
      <div className='flex justify-center items-center gap-4'>
        <div className='bg-[#F6F3EA] p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]'>
            <div className='rounded-full border-1 border-black h-4 w-4 relative left-48'></div>
            <p className='nunito font-semibold text-lg mt-8'>Managed Office</p>
        </div>
        <div className='bg-[#F6F3EA] p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]'>
            <div className='rounded-full border-1 border-black h-4 w-4 relative left-48'></div>
            <p className='nunito font-semibold text-lg mt-6'>Managed Office + Warehouse</p>
        </div>
        <div className='bg-[#F6F3EA] p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]'>
            <div className='rounded-full border-1 border-black h-4 w-4 relative left-48'></div>
            <p className='nunito font-semibold text-lg mt-8'>Managed Cabins</p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 mt-4'>
        <div className='bg-[#F6F3EA] p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]'>
            <div className='rounded-full border-1 border-black h-4 w-4 relative left-48'></div>
            <p className='nunito font-semibold text-lg mt-8'>Built to Brand Guidance</p>
        </div>
        <div className='bg-[#F6F3EA] p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]'>
            <div className='rounded-full border-1 border-black h-4 w-4 relative left-48'></div>
            <p className='nunito font-semibold text-lg mt-8'>Daily Conference Room</p>
        </div>
        <div className='bg-[#F6F3EA] p-4 rounded-2xl border-2 border-black h-[150px] w-[250px]'>
            <div className='rounded-full border-1 border-black h-4 w-4 relative left-48'></div>
            <p className='nunito font-semibold text-lg mt-6'>Podcast and Shoot Studio</p>
        </div>
      </div>
    </section>
  )
}

export default Rent


