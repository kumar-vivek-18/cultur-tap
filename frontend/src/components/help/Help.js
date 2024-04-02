import React from 'react'
import HelpCard from '../utils/HelpCard'
import HelpDetailCard from '../utils/HelpDetailCard'

const Help = () => {
    const services = [{
        userID: "1209857463547",
        userName: "Aishwary Shrivastava",
        time: "12:00 A.M.",
        date: "13-Aug-2023",
        email: "shristavaaishwary@gmail.com",
        contactNumber: "+1 7890-89-9879",
        platform: "Website",
        helpRequest: "I avail trip planning service yesterday, I was not able to connect with the trip planner.",
        paymentTo: "Aishwary"
    },
    {
        userID: "1209857463237",
        userName: "Rohit Kumar Tomar",
        time: "12:00 A.M.",
        date: "15-Aug-2023",
        email: "rohitkumartomar@gmail.com",
        contactNumber: "+1 7890-89-9879",
        platform: "Website",
        helpRequest: "I avail trip planning service yesterday, I was not able to connect with the trip planner.",
        paymentTo: "Rohit"
    }]
    return (
        <div className='flex flex-col gap-10 justify-center pt-8 items-center mb-16'>

            {
                services.map((service) => {
                    return <HelpCard service={service} key={service.userID} />
                })
            }

        </div>


    )
}

export default Help