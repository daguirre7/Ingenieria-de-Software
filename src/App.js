import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { Servicio } from './servicios/pages/ServicioPage';
import { DetallesPage} from './servicios/pages/DetallesPage';



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
      {/* Rutas de los servicios rutas estaticas */}
    <Route path='/servicio' element={<Servicio/>}></Route>
    {/* ruta de detallespage */}
    <Route path='/servicio/:id' element={<DetallesPage/>}></Route>
      

     {/* Rutas de las url 
    <Route path='/servicio/ConsultasVeterinarias' element={<Servicio/>}></Route>
    <Route path='/servicio/Vacunación' element={<Servicio/>}></Route>
    <Route path='/servicio/Desparasitación' element={<Servicio/>}></Route>
    <Route path='/servicio/Cirugías' element={<Servicio/>}></Route>
    <Route path='/servicio/BañoPeluquería' element={<Servicio/>}></Route>
    <Route path='/servicio/VentaProductos' element={<Servicio/>}></Route>
    */}
   </Routes>
   </BrowserRouter> 
  );
}



export default App;