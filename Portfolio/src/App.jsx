import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
