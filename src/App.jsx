import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Milkshakes from './components/Milkshakes'
import Bingsu from './components/Bingsu'
import BobaTea from './components/BobaTea'
import Process from './components/Process'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Flavors />
      <Process />
      <Milkshakes />
      <Bingsu />
      <BobaTea />
      <Footer />
    </div>
  )
}

export default App