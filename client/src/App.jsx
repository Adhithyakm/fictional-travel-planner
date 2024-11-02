import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import Login from './login'
import Home from './Home'
import Fantasy from './Fantasy';
import FantasyDetail from './FantasyDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/fantasy' element={<Fantasy />}></Route>
        
        <Route path='/fantasy/detail/:id' element={<FantasyDetail />} />
        
      </Routes>
      </BrowserRouter>
  )
}

export default App;
