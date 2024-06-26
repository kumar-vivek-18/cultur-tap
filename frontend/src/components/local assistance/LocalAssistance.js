import React from 'react'
import ServiceCard from '../utils/ServiceCard';
import ServiceDetailCard from '../utils/ServiceDetailCard'

const LocalAssistance = () => {
    const services = [{
        serviceID: "123456789",
        serviceRequesteeImg: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        serviceProviderImg: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        serviceProviderName: "Hemant",
        serviceProviderContact: "+91 9148768851",
        serviceRequesteeName: "Aishwary",
        serviceRequesteeContact: "+91 9148768851",
        tripPlanningTime: "8:00 PM - 8:20 PM India",
        tripPlanningDate: "Date: 15 Nov 2022 Monday",
        tripTittle: "Trip to Banglore",
        tripChat: ["https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"],
        tripCall: ["https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"],
        tripServiceProviderRating: "3",
        tripServiceRequesteeRating: "3",
        serviceRequesteeToCulturtap: "I am feeling get involve with wrong planner, i was not able to understand  language ",
        serviceRequesteeFeedback: "I am feeling get involve with wrong planner, i was not able to understand  language ",
        serviceProviderToCulturtap: "I am feeling get involve with wrong planner, i was not able to understand  language ",
        serviceProviderFeedback: "I am feeling get involve with wrong planner, i was not able to understand  language ",
        paymentTo: "Service Requestee",
        detailedChat: [],
    },
    {
        serviceID: "123456780",
        serviceRequesteeImg: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        serviceProviderImg: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        serviceProviderName: "Hemant",
        serviceProviderContact: "+91 9148768851",
        serviceRequesteeName: "Rohit",
        serviceRequesteeContact: "+91 9148768851",
        tripPlanningTime: "8:00 PM - 8:20 PM India",
        tripPlanningDate: "Date: 15 Nov 2022 Monday",
        tripTittle: "Trip to Jhansi",
        tripChat: ["https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"],
        tripCall: ["https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"],
        tripServiceProviderRating: "4",
        tripServiceRequesteeRating: "5",
        serviceRequesteeToCulturtap: "Enriching cultural immersion, diverse insights, community connections, delightful discoveries.",
        serviceRequesteeFeedback: "Enriching cultural immersion, diverse insights, community connections, delightful discoveries.",
        serviceProviderToCulturtap: "Enriching cultural immersion, diverse insights, community connections, delightful discoveries.",
        serviceProviderFeedback: "Enriching cultural immersion, diverse insights, community connections, delightful discoveries.",
        paymentTo: "Service Requestee",
        detailedChat: [],
    }];
    return (
        <div className='max-md:px-4 max-md:py-8 px-16 pt-16 mx-auto pb-16'>
            <div className='flex flex-col gap-10 justify-center md:items-center'>
                {services.map((service) => {
                    return <ServiceCard service={service} key={service.serviceID} />
                })}
            </div>

        </div>
    )
}

export default LocalAssistance