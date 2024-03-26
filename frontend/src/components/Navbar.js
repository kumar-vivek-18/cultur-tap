import React, { useState } from 'react'
import logo from '../assets/culturTapLogo.svg';
import { LuSearch } from "react-icons/lu";
import settings from '../assets/settings.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [query, setQuery] = useState("");

    return (
        <div className='w-full px-16 max-md:px-8'>
            <div className='flex w-full justify-between items-center '>
                <div>
                    <img src={logo} alt="culturTap" className='w-[316px] h-[100px]' loading='lazy' />
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
                <div className='flex gap-6'>
                    <div className='w-[60px] h-[60px] rounded-full bg-[#d9d9d9]'></div>
                    <img src={settings} alt="settings" width="45px" height="45px" />
                </div>

            </div>
            <div className='flex gap-4 pt-[30px]'>
                <div className='flex items-center gap-2'>
                    <Link to='/' className='text-[16px] font-semibold'>Trip Planning Call</Link>
                    <p className='w-[24px] h-[24px] text-white flex justify-center items-center bg-[#faa02e] rounded-full'>0</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Link to='/localassistance' className='text-[16px] font-semibold'>Local Assistance</Link>
                    <p className='w-[24px] h-[24px] text-white flex justify-center items-center bg-[#faa02e] rounded-full'>0</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Link to='/help' className='text-[16px] font-semibold'>Help</Link>
                    <p className='w-[24px] h-[24px] text-white flex justify-center items-center bg-[#faa02e] rounded-full'>0</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar