import React from 'react'
import { GlobIcon } from '../../assets'

const GetinTouch = () => {
    return (
        <div className='container mx-auto py-24 px-10 sm:px-0'>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-2'>
                <div>
                    <img src={GlobIcon} alt="" srcset="" />
                </div>
                <div className='flex flex-col justify-start items-start gap-4'>
                    <h4 className='text-white sm:text-[40px] font-[600]'>Get In Touch</h4>
                    <p className='text-[#9e9e9e]'>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
                    <input type="text" placeholder='Enter Your User Name' className='w-full text-white placeholder:text-[#9e9e9e] bg-[#18181c] py-3 focus:outline-none px-4' />
                    <input type="email" placeholder='Enter Your Email' className='w-full text-white placeholder:text-[rgb(158,158,158)] bg-[#18181c] py-3 focus:outline-none px-4' />
                    <textarea rows={5} name="" placeholder='Enter Your Message' className='w-full text-white placeholder:text-[#9e9e9e] bg-[#18181c] py-3 focus:outline-none px-4' id=""></textarea>
                    <button className='button-1 capitalize'>Get in touch</button>

                </div>
            </div>
        </div>
    )
}

export default GetinTouch
