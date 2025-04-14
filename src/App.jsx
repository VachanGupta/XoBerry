import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Milkshakes from './components/Milkshakes'
import Bingsu from './components/Bingsu'
import BobaTea from './components/BobaTea'
import Process from './components/Process'
import Locations from './components/Locations'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-vanilla-cream">
      <Navbar />
      <Hero />
      <Flavors />
      <Process />
      <Milkshakes />
      <Bingsu />
      <BobaTea />
      <Locations />
      <Footer />
    </div>
  )
}

export default App