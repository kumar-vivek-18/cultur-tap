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
    }]
    return (
        <div className='flex justify-center pt-16'>

            {/* <HelpCard /> */}
            {
                services.map((service) => {
                    return <HelpCard service={service} key={service.userID} />
                })
            }

        </div>


    )
}

export default Help