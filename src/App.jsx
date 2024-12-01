import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Hero from './component/Hero'
import FeatureBox from './component/FeatureBox'
import Guidenece from './component/Guidenece'
import Work from './component/Work'
import FreeTrial from './component/FreeTrial'
import GetinTouch from './component/GetinTouch'
import Footer from './component/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <FeatureBox />
      <Guidenece />
      <Work />
      <FreeTrial />
      <GetinTouch />
      <Footer />
    </BrowserRouter>
  )
}

export default App