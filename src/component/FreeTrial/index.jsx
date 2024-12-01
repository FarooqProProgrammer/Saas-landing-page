import React from 'react'
import "./index.css"
import { MapIcon } from '../../assets'

const FreeTrial = () => {
    return (
        <div className="container mx-auto py-24">
            <div className='freeTrial p-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  rounded-2xl'>
                <div className='flex flex-col justify-center items-start gap-5'>
                    <h5 className='text-white text-[20px] font-[600]'>Love our Our Tool?</h5>
                    <h4 className='text-white sm:text-[40px] font-[600]'>Fell Free to Join our 15 Days Free Trial</h4>
                    <button className='button-2'>Download Template</button>
                </div>
                <div>
                    <img src={MapIcon} alt="" className='w-full h-full' srcset="" />
                </div>
            </div>
        </div>
    )
}

export default FreeTrial
