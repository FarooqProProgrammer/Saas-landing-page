import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Hero from './component/Hero'
import FeatureBox from './component/FeatureBox'
import Guidenece from './component/Guidenece'
import Work from './component/Work'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <FeatureBox />
      <Guidenece />
      <Work />
    </BrowserRouter>
  )
}

export default App