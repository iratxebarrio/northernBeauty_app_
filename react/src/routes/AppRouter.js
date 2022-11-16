import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Usuarios/Login'
import Register from '../components/Usuarios/Register'
import Main from '../components/Main'
import Bienvenida from '../components/Usuarios/Bienvenida';
import Despedida from '../components/Usuarios/Despedida';
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
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/despedida" element={<Despedida />} />
          <Route path="/reservas/:id" element={<PaginaReservar />} />
          <Route path="/reservas-usuario" element={<VisualizarReservas />} />
          <Route path="/modificar-reserva" element={<ModificarReserva />} />


          </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter;