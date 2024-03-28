import React from 'react';
import { PiArrowElbowRightFill } from "react-icons/pi";
import { LuUserCircle } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import download from '../../assets/icons/download.svg';
import view from '../../assets/icons/view.svg';
import starFilled from '../../assets/icons/starFilled.svg';
import star from '../../assets/icons/Star.svg';
import tiltedarrow from '../../assets/icons/tiltedarrow.svg';
import '../../index.css';

const ServiceCard = () => {
    return (

        <div className='flex max-xl:flex-col gap-6 max-xl:gap-16 max-md:px-6 px-10 py-10 max-xl:px-20 max-lg:px-8 border-2 rounded-3xl w-[max-content]  shadow-lg mx-auto'>
            <div className='flex gap-8 max-xl:gap-24 max-lg:gap-12 max-md:flex-col'>
                <div className='relative flex'>
                    <div className='pt-20 '>
                        <label class="checkbox-container">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className='flex flex-col'>

                        <div>
                            <p className='text-[14px] max-sm:text-[18px] font-semibold text-[#001b33]'>Service ID</p>
                            <p className='text-[14px]  max-sm:text-[18px] text-[#001b33]'>123456789</p>
                        </div>
                        <div className='flex gap-4 pt-[30px] items-center'>
                            <LuUserCircle className='w-[35px] h-[35px] opacity-60' />
                            {/* <PiArrowElbowRightFill className='w-[20px] h-[20px] opacity-60' /> */}
                            <img src={tiltedarrow} alt="" />
                            <LuUserCircle className='w-[35px] h-[35px] opacity-60' />
                        </div>

                        <p className='pt-[25px] text-[12px]  max-sm:text-[16px] text-[#2e2c43] '>Service Provider - Hemant</p>
                        <p className='text-[12px] max-sm:text-[16px] font-semibold text-[#001b33]'>+91 9148768851</p>
                        <p className='pt-[10px] text-[12px] max-sm:text-[16px] text-[#2e2c43] '>Service Provider - Aishwary</p>
                        <p className='text-[12px] max-sm:text-[16px] font-semibold text-[#001b33]' >+91 9148768851</p>
                    </div>
                </div>

                <div className='flex flex-col text-[12px] max-sm:text-[16px] max-md:pl-8'>
                    <p className='text-[#001b33] font-semibold'>Trip planning Call with</p>
                    <div className='flex gap-2 pt-[10px]'>
                        <IoTimeOutline className='w-[20px] h-[20px] opacity-80' />
                        <p className=''>8:00 PM - 8:20 PM India</p>

                    </div>
                    <div className='flex gap-2'>
                        <CiCalendar className='w-[20px] h-[20px] opacity-80' />
                        <p className=''>Date: 15 Nov 2022 "Monday"</p>
                    </div>
                    <p className='pt-[40px] font-semibold'>Meeting Title</p>
                    <p className=''>Trip to Banglore</p>

                    <div className='flex gap-6 pt-6 text-[12px]'>

                        <div className='flex flex-col '>
                            <p className=' font-semibold text-[#001b33]'>Chat</p>
                            <div className='flex gap-4 pt-[20px]'>

                                <img src={download} alt='download ' className='cursor-pointer' />
                                <img src={view} alt='view' className='scale-90 cursor-pointer' />
                            </div>

                        </div>
                        <div className='flex flex-col '>
                            <p className=' font-semibold text-[#001b33] w-[max-content]'>Voice Call</p>
                            <div className='flex gap-4 pt-[20px]'>

                                <img src={download} alt='download ' className='cursor-pointer' />
                                <img src={view} alt='view' className='scale-90 cursor-pointer' />
                            </div>

                        </div>
                        <div className='flex flex-col '>
                            <p className=' font-semibold text-[#001b33] w-[max-content]'>Video Call</p>
                            <div className='flex gap-4 pt-[20px]'>

                                <img src={download} alt='download ' className='cursor-pointer' />
                                <img src={view} alt='view' className='scale-90 cursor-pointer' />
                            </div>

                        </div>
                    </div>
                </div>

                <div className='max-md:pl-8'>
                    <p className='text-[12px] max-sm:text-[16px] text-[#2e2c43] font-semibold'>Rate Your Experience</p>
                    <p className='text-[11px] max-sm:text-[16px]'>Service Provider</p>
                    <div className='flex pt-[10px]'>
                        <img src={starFilled} alt="score" />
                        <img src={starFilled} alt="score" />
                        <img src={starFilled} alt="score" />
                        <img src={star} alt="score" />
                        <img src={star} alt="score" />
                    </div>

                    <p className='text-[12px] max-sm:text-[16px] text-[#2e2c43] font-semibold pt-[30px]'>Rate Your Experience</p>
                    <p className='text-[11px] max-sm:text-[16px]'>Service Requestee</p>
                    <div className='flex pt-[10px]'>
                        <img src={starFilled} alt="score" />
                        <img src={starFilled} alt="score" />
                        <img src={starFilled} alt="score" />
                        <img src={star} alt="score" />
                        <img src={star} alt="score" />
                    </div>
                </div>
            </div>

            <div className='flex gap-8 max-xl:gap-24 max-xl:pl-8 max-lg:gap-12 max-md:flex-col'>
                <div className='text-[12px] max-sm:text-[16px]'>
                    <p className=''>Service Requestee</p>
                    <p className=' font-semibold pb-[10px]'>Wanna say something to Culturtap?</p>
                    <div className='w-[250px] h-[70px] bg-[#e9eaeb] rounded-md'></div>
                    <p className=' font-semibold pt-[20px] pb-[10px]'>Additional Feedback</p>
                    <div className='w-[250px] h-[70px] bg-[#e9eaeb] rounded-md'></div>
                </div>

                <div className='flex max-xl:gap-24 max-sm:gap-8 max-lg:gap-12 gap-10'>


                    <div className='text-[12px] max-sm:text-[14px]'>
                        <p className='font-semibold'>Payment <br />to requestee</p>
                        <div className='flex gap-2 items-center pt-4'>
                            <label className="checkbox-container">
                                <p className='text-[14px] max-sm:text-[16px]'>Aishwary</p>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div className='text-[12px] max-sm:text-[14px]'>
                        <p className='font-semibold'>Payment <br />Service Provider</p>
                        <div className='flex gap-2 items-center pt-4'>
                            <label className="checkbox-container">
                                <p className='text-[14px] max-sm:text-[16px]'>Hemant</p>

                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='text-[14px] max-sm:text-[16px] text-[#fb8c00] font-semibold cursor-pointer'>View All</div>
            </div>
        </div>


    )
}

export default ServiceCard

