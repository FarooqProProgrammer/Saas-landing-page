import React from 'react'
import { CustomizeableIcon } from '../../assets'
import { FeatureBoxData } from '../../Data'

const FeatureBox = () => {
    return (
        <div className='container mx-auto py-24 px-4 sm:px-0'>
            <div className='space-y-2'>
                <h2 className='text-white sm:text-[48px] text-2xl font-[600] '>Feature Boxes</h2>
                <p className='text-[#9e9e9e] sm:max-w-lg'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
            </div>
            <div className='grid mt-10 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10'>
                {
                    FeatureBoxData?.map((item, index) => {
                        return (
                            <div key={index} className='w-full flex flex-col px-3 justify-center items-center space-y-5 h-[371px] bg-[#18181c]'>
                                <div className='w-[100px] transition-all duration-500 ease-in-out icon-hover   h-[100px] flex justify-center items-center bg-[#222228] border-2 border-white rounded-lg'>
                                    <img src={item?.img} alt='' />
                                </div>
                                <h4 className='text-white text-[20px] font-[600]'>{item?.title}</h4>
                                <p className='text-[#9e9e9e] text-center'>{item?.description}</p>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeatureBox