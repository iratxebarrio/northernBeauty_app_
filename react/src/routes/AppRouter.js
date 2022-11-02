import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Usuarios/Login'
import Register from '../components/Usuarios/Register'
import Main from '../components/Main'
import Bienvenida from '../components/Usuarios/Bienvenida';
import Despedida from '../components/Usuarios/Despedida';


const AppRouter = () => {
    return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/despedida" element={<Despedida />} />
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter;