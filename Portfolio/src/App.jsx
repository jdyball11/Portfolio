import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default App
