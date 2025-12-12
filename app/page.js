import Featured from '@/components/featured/page'
import FinalCta from '@/components/final-Cta/page'
import Hero from '@/components/hero/page'
import Process from '@/components/process/page'
import Service from '@/components/service/page'
import Strip from '@/components/strip/page'
import Testimonials from '@/components/testimonial/page'
import BackgroundWrapper from '@/components/backgroundwrapper/page.js'
import React from 'react'

const Home = () => {
  return (

    <div>
      <BackgroundWrapper >
        <Hero />
        <Strip />
        <Service />
        {/* <Featured /> */}
        <Process />
        <Testimonials />
        <FinalCta />
      </BackgroundWrapper>
    </div>


  )
}

export default Home
