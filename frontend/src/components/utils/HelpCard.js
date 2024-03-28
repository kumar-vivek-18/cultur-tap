import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const HelpCard = () => {
    return (
        <div className='flex text-[18px] gap-10 max-md:flex-col w-[max-content] shadow-md border-2 px-20 max-xl:px-12 py-20 rounded-3xl mx-6'>
            <div className='flex flex-col gap-10 max-md:gap-6'>
                <div className='flex gap-20 items-center max-xl:gap-12 max-md:gap-6 max-md:flex-col'>
                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        <p className='font-semibold'>User ID</p>
                        <p>1209857463547</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        <p className='font-semibold'>Username</p>
                        <p>Aishwary Shrivastava</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        <p className='font-semibold'>Time</p>
                        <p>12:00 A.M.</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        <p className='font-semibold'>Date</p>
                        <p>13-Aug-2023</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        <p className='font-semibold'>Email</p>
                        <p>shristavaaishwary</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        <p className='font-semibold w-[max-content]'>Contact number</p>
                        <p>+1 7890-89-9879</p>
                    </div>

                </div>
                <div className='flex gap-32 max-xl:gap-24 max-md:gap-6 max-md:flex-col items-center'>


                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        <p className='font-semibold'>Platform</p>
                        <p>Website</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        <p className='font-semibold'>Help Request</p>
                        <p className='max-md:w-10/12 md:w-3/4 max-md:text-center'>I avail trip planning service yesterday, I was not able to connect with the trip planner. </p>
                    </div>
                </div>


            </div>
            <FaArrowRight className='text-[#fb8c00] w-[25px] h-[25px] max-md:mx-auto pt-2' />
        </div>
    )
}

export default HelpCard