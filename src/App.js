import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Equipo from './components/Equipo';

function App() {
  return (
   <BrowserRouter>

   <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="equipo" element={<Equipo/>}/>
   </Routes>
   
   </BrowserRouter> 
  );
}

export default App;
