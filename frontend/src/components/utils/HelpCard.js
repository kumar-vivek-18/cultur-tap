import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HelpCard = ({ service }) => {
    const navigate = useNavigate();


    console.log('serviceee', service);

    return (
        <div className='flex text-[18px] gap-10 max-md:flex-col xl:w-[1350px] max-md:w-[350px] md:w-[1100px] mx-auto shadow-md border-2 px-16 max-xl:px-12 py-20 rounded-3xl mx-6'>
            <div className='flex flex-col gap-10 max-md:gap-6 w-full mx-auto'>
                <div className='flex gap-10 items-start max-xl:gap-6 max-md:gap-6 max-md:flex-col'>
                    <div className='max-md:flex max-md:flex-col '>
                        <p className='font-semibold'>User ID</p>
                        <p>{service.userID}</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col'>
                        <p className='font-semibold'>Username</p>
                        <p>{service.userName}</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col'>
                        <p className='font-semibold'>Time</p>
                        <p>{service.time}</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col'>
                        <p className='font-semibold'>Date</p>
                        <p>{service.date}</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col'>
                        <p className='font-semibold'>Email</p>
                        <p className=''>{service.email}</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col'>
                        <p className='font-semibold w-[max-content]'>Contact number</p>
                        <p>{service.contactNumber}</p>
                    </div>

                </div>
                <div className='flex gap-24 max-xl:gap-20 max-md:gap-6 max-md:flex-col items-start'>


                    <div className='max-md:flex max-md:flex-col '>
                        <p className='font-semibold'>Platform</p>
                        <p>{service.platform}</p>
                    </div>
                    <div className='max-md:flex max-md:flex-col '>
                        <p className='font-semibold'>Help Request</p>
                        <p className=' max-md:w-[320px]'>{service.helpRequest}</p>
                    </div>
                </div>


            </div>
            <FaArrowRight onClick={() => navigate('/helpdetail', { state: service })} className='text-[#fb8c00] w-[25px] h-[25px] max-md:mx-auto pt-2 cursor-pointer' />
        </div>
    )
}

export default HelpCard