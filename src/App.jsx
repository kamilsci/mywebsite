import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import './App.css'


const Home = () => {
  return (
<div>

  <h1> hello world </h1>
</div>


  )
}





function App() {




  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />

      

    </Routes>
    
    </>
  )
}

export default App
