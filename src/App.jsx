import React from 'react'
import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import AboutSection from './Components/AboutSection'
import CollectionArea from './Components/CollectionArea'
import Roadmap from './Components/Roadmap'
import TeamSection from './Components/TeamSection'
import FAQSection from './Components/FAQSection'
import CtaArea from './Components/CtaArea'
import Footer from './Components/Footer'
import About2 from './Components/About2'


function App() {
  return (
    <div>
      <Header />
      <Section1 />
        <Section2/>
          <Section3/>
          <Section4/>
          <AboutSection/>
          <About2/>
          <CollectionArea/>
          <Roadmap/>
          <TeamSection/>
          <FAQSection/>
          <CtaArea/>
          <Footer/>
    </div>
  )
}

export default App