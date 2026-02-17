import React from 'react'
import HeroSection from './herosection'
import About from './about'
import FAQ  from './faq'
import Sponser from './sponser'
import Tracks from './tracks'
import Schedule from './schedule'
import Registration from './registration'
import PastEvents from './pastevents'
import Prices from './prices'


const SPA = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <FAQ />
      <Sponser />
      <Tracks />
      <Schedule />
      <Registration />
      <PastEvents />
      <Prices />
    </div>
  )
}

export default SPA