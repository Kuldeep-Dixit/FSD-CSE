import React, { useState } from 'react'
import Student from './Student';
import UseStudentState from './UseStudentState';
import Imagemanipulation from './Imagemanipulation';
import MyUseEffect from './MyUseEffect';

import Login from './Login';
import Registration from './Registration';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainLayout from './MainLayout';
import Dashboard from './Dashboard';

function App() {

  const[rdata,setrdata]=useState();
  
 


 
  return (
    <div>
      {/* {JSON.stringify(rdata)}
  <BrowserRouter>
  <Routes>
 <Route path='/' element={<MainLayout />} >   
 <Route path='/login' element={ <Login regdata={rdata} />} />
<Route path='/registration' element={<Registration regData={setrdata} />} />
</Route>

<Route path='/dashboard' element={<Dashboard/>} />

  </Routes>
  </BrowserRouter> */}
  {/* <Dashboard/> */}
<Imagemanipulation/>

      

  </div>
      
  )
}

export default App