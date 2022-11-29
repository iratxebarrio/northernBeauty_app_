import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Usuarios/Login'
import Register from '../components/Usuarios/Register'
import Main from '../components/Main'
import PaginaReservar from '../components/Reservas/PaginaReservar';
import VisualizarReservas from '../components/Reservas/VisualizarReservas'
import ModificarReserva from '../components/Reservas/ModificarReserva';





const AppRouter = () => {
    return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/reservas/:id" element={<PaginaReservar />} />
          <Route path="/reservas-usuario" element={<VisualizarReservas />} />
          <Route path="/modificar-reserva/:usuario_id/:servicio_id" element={<ModificarReserva />} />


          </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter;