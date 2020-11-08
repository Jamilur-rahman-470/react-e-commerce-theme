import React from 'react'
import { Page } from '../styles/global.stc'
import FeatureCard from '../widgets/_feature-card'
import HomeBanner from '../widgets/_home-banner'

const Home = () => {
    
   return (
        <Page>
            <HomeBanner/>
            <h1>HELO</h1>
            <FeatureCard/>
        </Page>
    )
}

export default Home
