import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/Registration'
import {} from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 style={{backgroundColor:"wheat", color:"black"}}>Welcome our WebPage</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Registration/>
      <Login/> */}
    </>
  )
}

export default App
