import React from 'react'
import { WebsiteLogo } from '../../assets'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center py-5 px-2 sm:px-0'>
                <img src={WebsiteLogo} alt='' />
                <div className='flex justify-center items-center gap-6'>
                    <Link to="#!" className='text-[#9e9e9e] '>Home</Link>
                    <button className='button-1'>Download Template</button>
                </div>
            </div>
        </div>
    )
}

export default Header