import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../Header'






const Register = () => {

  
  const navigate = useNavigate()

  let [name, setName] = useState('')
  let [lastName, setLastName] = useState('')
  let [userName, setUserName] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')
  let [password, setPassword] = useState('')
  let [okRegistro, setOkRegistro] = useState('')

  const actions = {
    nombre: (valor) => setName(valor),
    lastname: (valor) => setLastName(valor),
    username: (valor) => setUserName(valor),
    email: (valor) => setEmail(valor),
    phone: (valor) => setPhone(valor),
    password: (valor) => setPassword(valor),
  }
  const doAction = (event) => {
    //al rellenar el input entra en esta funcion con el valor de name=""
    //console.log(event.target.name) --> nombre
    const action = actions[event.target.name] // guarda en la const action guarda del objeto action la que tenga la clave nombre
  
    if (action) action(event.target.value) //si existe action llamas a la funcion action (es funcion porque dentro tiene asociada la clave nombre que tiene como valor una funcion) y se ejecuta esa funcion --> actualiza name
  
  }

  const onSubmit = (event) => {
    //evita que se ejecute la acción por defecto del boton (enviar los datos)
    event.preventDefault()
    fetchRegistro()
}

  const responseRegister = (response) => {
    const { ok } = response
    if (!ok) setOkRegistro('ya existe el username')
    else {
        return navigate('/login')
    }
    
  }
 
function fetchRegistro() {

  fetch('http://localhost:8000/user/register', {
    method: 'POST',
    body: JSON.stringify({ name, lastName, userName, email, phone, password }),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(response => responseRegister(response))
}


  return (
    <>
    <Header />
    <div className = "pruebLogin">

    <div className="login-box">
      <a onClick={() =>  navigate('/')} href="#"><img className="imgCruz" src="Images/marca-x.png" alt="" /></a>
      <h3 className="login-title">Register</h3>
      <form>
        <div className="user-box">
          <input onChange={doAction} type="text" name="nombre" required="true" placeholder="Nombre" value={name} />
        
        </div>
        <div className="user-box">
          <input onChange={doAction} type="text" name="lastname" required="true"  placeholder="Apellidos"/>
          
        </div>
        <div className="user-box">
          <input onChange={doAction} type="text" name="username" required="true" placeholder="Username" />
        </div>

        <div className="user-box">
          <input onChange={doAction} type="email" name="email" required="true" placeholder="Email" />
        </div>
        <div className="user-box">
          <input onChange={doAction} type="tel" name="phone" required="true" placeholder="telefono" />
        </div>
        <div className="user-box">
          <input onChange={doAction} type="password" name="password" required="true" placeholder="Password" />
          
        </div>
        <div className="user-submit">
          <button onClick={onSubmit} >Enviar</button>
        </div>  
      </form>
      <h6>Si ya estas registrada <a onClick={() =>  navigate('/login')} href='#'>haz click aqui.</a></h6>
      <h6 className="loginError">{okRegistro}</h6>
    </div>
    </div>
    </>
  );
};

export default Register;
