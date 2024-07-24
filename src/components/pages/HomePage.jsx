import React from 'react'
import Hero from "../Hero"
import Joblistings from "../JobListings"
import ViewAllJobs from "../ViewAllJobs"
import HomeCards from "../HomeCards"
const HomePage = () => {
    return <>
        <Hero />
        <HomeCards />
        <Joblistings isHome={true}/>
        <ViewAllJobs />
    </>
}

export default HomePage