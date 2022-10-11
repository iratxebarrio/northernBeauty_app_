import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Usuarios/Login'
import Register from '../components/Usuarios/Register'
import Main from '../components/Main'

const AppRouter = () => {
    return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter;