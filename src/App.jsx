import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Hero from './component/Hero'
import FeatureBox from './component/FeatureBox'
import Guidenece from './component/Guidenece'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <FeatureBox />
      <Guidenece />
    </BrowserRouter>
  )
}

export default App