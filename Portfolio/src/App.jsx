import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/home'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
