import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Profiles from './components/Profiles'
import Details from './components/Details'
import NavigationMobile from './components/NavigationMobile'

function App() {
  const [isMobile , setIsMobile] = useState(window.innerHeight/window.innerWidth > 0.5 ? true : false)

  function handleWindowSizeChange() {
    console.log('resizing', window.innerHeight/window.innerWidth)
    setIsMobile(() => window.innerHeight/window.innerWidth > 0.5 ? true : false)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return (
    <div className="App">
      {isMobile ? <NavigationMobile /> : <Navigation /> }
      <HomePage />
      <Technologies />
      <Projects />
      <Details />
    </div>
  )
}

export default App
