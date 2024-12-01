import React from 'react'
import { GuideIcon } from '../../assets'

const Guidenece = () => {
    return (
        <div className='container mx-auto px-4 sm:px-0'>
            <div className='grid lg:grid-cols-2 py-24 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <img src={GuideIcon} alt="" className='rounded-3xl' srcset="" />
                <div className='flex flex-col justify-center items-start space-y-5'>
                    <h4 className='text-white sm:text-[40px] text-2xl font-[600]'>We're here to guide and help you at all times</h4>
                    <p className='text-[#9e9e9e] text-[20px]'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
                    <button className='button-1'>Dashboard</button>

                </div>
            </div>
        </div>
    )
}

export default Guidenece