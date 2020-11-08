import React from 'react'
import { Page } from '../styles/global.stc'
import FeatureCard from '../widgets/_feature-card'
import HomeBanner from '../widgets/_home-banner'

const Home = () => {
    
   return (
        <Page>
            <HomeBanner/>
            <FeatureCard/>
        </Page>
    )
}

export default Home
