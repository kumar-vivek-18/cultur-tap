import React from 'react'
import { useLocation } from 'react-router-dom';
import bankIcon from '../../assets/icons/bank.svg';
import '../../index.css';

const HelpDetailCard = () => {
    const location = useLocation();
    console.log("locatin of help state", location);
    const service = location.state;
    console.log('serve', service)

    return (
        <div className='mx-auto pt-16 w-[max-content] overflow-hidden'>
            <div className='flex text-[18px] gap-10 flex-col w-[max-content] max-md:items-center shadow-md border-2 px-20 max-xl:px-12 py-20 rounded-3xl mx-6 pb-40'>
                <div className='flex flex-col gap-10 max-md:gap-6'>
                    <div className='flex gap-16 items-center max-xl:gap-12 max-md:gap-6 max-md:flex-col'>
                        <div className='max-md:flex max-md:flex-col max-md:items-center'>
                            <p className='font-semibold'>User ID</p>
                            <p>{service.userID}</p>
                        </div>
                        <div className='max-md:flex max-md:flex-col max-md:items-center'>
                            <p className='font-semibold'>Username</p>
                            <p>{service.userName}</p>
                        </div>
                        <div className='max-md:flex max-md:flex-col max-md:items-center'>
                            <p className='font-semibold'>Time</p>
                            <p>{service.time}</p>
                        </div>
                        <div className='max-md:flex max-md:flex-col max-md:items-center'>
                            <p className='font-semibold'>Date</p>
                            <p>{service.date}</p>
                        </div>
                        <div className='max-md:flex max-md:flex-col max-md:items-center '>
                            <p className='font-semibold'>Email</p>
                            <p>{service.email}</p>
                        </div>
                        <div className='max-md:flex max-md:flex-col max-md:items-center'>
                            <p className='font-semibold w-[max-content]'>Contact number</p>
                            <p>{service.contactNumber}</p>
                        </div>

                    </div>
                    <div className='flex gap-32 max-xl:gap-24 max-md:gap-6 max-md:flex-col '>


                        <div className='max-md:flex max-md:flex-col max-md:items-center'>
                            <p className='font-semibold'>Platform</p>
                            <p>{service.platform}</p>
                        </div>
                        <div className='max-md:flex max-md:flex-col max-md:items-center'>
                            <p className='font-semibold'>Help Request</p>
                            <p className='max-md:w-8/12 md:w-3/4 max-md:text-center'>{service.helpRequest} </p>
                        </div>
                    </div>


                </div>

                <div className='w-full h-[1px] bg-gray-300'></div>

                <div className=''>
                    <img src={bankIcon} alt="logo" />
                    <div className='text-[12px]  max-xl:text-[16px]'>
                        <p className='font-semibold w-[max-content]'>Payment <br /><span className='w-[max-content]'>to requestee</span></p>
                        <div className='flex gap-2 items-center pt-4'>
                            <label className="checkbox-container">
                                <p className='text-[14px]'>{service.paymentTo}</p>

                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex gap-4 mt-4 mb-10 justify-end px-10 max-xl:px-12 w-full max-md:justify-center'>
                <p className='w-[180px] py-4 bg-[#fb8c00] text-center font-bold text-white'>Call Aishwary</p>
                <p className='w-[180px] py-4 bg-[#fb8c00] text-center font-bold text-white'>Pay off</p>
            </div>
        </div>
    )
}

export default HelpDetailCard