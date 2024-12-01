import React from 'react'
import { WebsiteLogo } from '../../assets'
import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className='bg-[#18181c] py-10 px-10 sm:px-0'>
                <div className='container mx-auto '>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2'>
                        <div className='flex flex-col justify-start items-start space-y-4'>
                            <img src={WebsiteLogo} alt="" srcset="" />
                            <p className='text-[#9e9e9e] md:max-w-md'>
                                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                            </p>
                        </div>
                        <div className='grid md:grid-cols-3 place-items-center place-content-center grid-cols-2 mt-10 sm:mt-0 gap-10 sm:gap-0'>
                            <div className='flex flex-col justify-start items-start gap-2'>
                                <h5 className='text-white sm:text-[18px]'>Sections</h5>
                                <ul>
                                    <li>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Home</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section Two</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section Three</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start items-start gap-2'>

                                <ul>
                                    <li>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Home</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section Two</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section Three</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-start items-start gap-2'>
                                <ul>
                                    <li>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Home</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section Two</Link>
                                        <Link to="#!" className='text-[#9e9e9e] block mb-2'>Section Three</Link>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6'>
                <div className='flex  container mx-auto flex-col sm:flex-row gap-10 sm:gap-0 justify-between items-center'>
                    <p className='text-[#9e9e9e]'>All Rights Reservd Inkyy.com 2022</p>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='w-[40px] h-[40px] rounded-2xl  flex justify-center items-center bg-[#18181c]'>
                            <FaTwitter color='#FFF' className='' />
                        </div>
                        <div className='w-[40px] h-[40px] rounded-2xl  flex justify-center items-center bg-[#18181c]'>
                            <FaLinkedin color='#FFF' className='' />
                        </div>
                        <div className='w-[40px] h-[40px] rounded-2xl  flex justify-center items-center bg-[#18181c]'>
                            <FaDiscord color='#FFF' className='' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
