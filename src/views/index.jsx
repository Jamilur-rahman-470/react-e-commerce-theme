import React from 'react'
import { Page } from '../styles/global.stc'
import FeatureCardMobile from '../widgets/feature-card-mobile'
import FeatureCard from '../widgets/_feature-card'
import HomeBanner from '../widgets/_home-banner'

const Home = () => {
    
    const renderFeatureCard = () => window.innerWidth <= 768 ? <FeatureCardMobile/> : <FeatureCard/> 
    return (
        <Page>
            <HomeBanner/>
            {renderFeatureCard()}
        </Page>
    )
}

export default Home
