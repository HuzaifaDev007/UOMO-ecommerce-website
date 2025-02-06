import React from 'react'
import HeroSection from './HeroSection'
import HomeCategorySection from './HomeCategorySection'
import FeaturedHome from './FeaturedHome'
import LimitedHomeSection from './LimitedHomeSection'
import GenderCategoryHome from './GenderCategoryHome'
import LimitedEditionHome from './LimitedEditionHome'
import InstagramHome from './InstagramHome'
import ServicesHome from './ServicesHome'

function HomePage() {
  return (
    <>
      
    <HeroSection />
    
    <HomeCategorySection />   
    <FeaturedHome /> 
    <LimitedHomeSection />
    <GenderCategoryHome />
    <LimitedEditionHome  autoplay={"true"}/>
    <InstagramHome />
    <ServicesHome/>
    
    </>
  )
}

export default HomePage