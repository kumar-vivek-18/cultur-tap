import React, { useState } from 'react'
import logo from '../assets/culturTapLogo.svg';
import { LuSearch } from "react-icons/lu";
import settings from '../assets/settings.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [query, setQuery] = useState("");

    return (
        <div className='w-full max-sm:px-0 px-16 max-md:px-8 max-w-[1550px]'>
            <div className='flex w-full justify-between items-center '>
                <div>
                    <img src={logo} alt="culturTap" className='w-[316px] h-[100px] max-sm:w-[220px] max-sm:h-[80px]' loading='lazy' />
                </div>
                <div className='flex w-1/3 h-[60px] items-center border border-gray-300 rounded-3xl px-8 text-[#2e2c43] text-[20px] shadow-sm max-lg:hidden'>
                    <LuSearch className='scale-125 color-[2e2c43] opacity-70' />
                    <input
                        type="text"
                        placeholder="Search any service ID, Name"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='border-none w-[350px] focus:outline-none px-4'
                    />
                </div>
                <div className='flex gap-6 max-sm:scale-75'>
                    <div className='w-[60px] h-[60px] rounded-full bg-[#d9d9d9]'></div>
                    <img src={settings} alt="settings" width="45px" height="45px" />
                </div>

            </div>
            <div className='flex max-sm:px-4 overflow-x-scroll scrollbar-hidden gap-4 pt-[30px]  text-[16px]'>
                <div className='flex items-center gap-2 w-[max-content]'>
                    <Link to='/' className=' font-semibold w-[max-content]'>Trip Planning Call</Link>
                    <p className='w-[24px] h-[24px] text-white flex justify-center items-center bg-[#faa02e] rounded-full'>0</p>
                </div>
                <div className='flex items-center gap-2 w-[max-content] '>
                    <Link to='/localassistance' className=' font-semibold w-[max-content]'>Local Assistance</Link>
                    <p className='w-[24px] h-[24px] text-white flex justify-center items-center bg-[#faa02e] rounded-full'>0</p>
                </div>
                <div className='flex items-center gap-2 w-[max-content] '>
                    <Link to='/help' className=' font-semibold w-[max-content]'>Help</Link>
                    <p className='w-[24px] h-[24px] text-white flex justify-center items-center bg-[#faa02e] rounded-full'>0</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar