import React, { useState } from "react";
import { useNavigate } from 'react-router';
import Header from '../Header';



const Login = () => {
const navigate = useNavigate()

let [userName, setUserName] = useState("");

function loginUserName(event) {
    setUserName(event.target.value)
}

// EN FETCH -> El método POST el body siempre como objeto.

function fetchUserName(){
    fetch('http://localhost:8000/prueba/loginUsuario', {
        method: 'POST',
        body: JSON.stringify({ userName }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => console.log(response))
}
  
    return (
        <>
        <Header />
        <div className='login_container login-box'>
            <a onClick={() =>  navigate('/')} href="#"><img className="imgCruz" src="Images/marca-x.png" alt="" /></a>
            <h3 className="login-title">Login</h3>
            <form>
                <div className="user-box">
                    <input onChange={loginUserName} type="text" name="" required="true" placeholder="Username" value={userName} />
                        
                </div>
                    <div className="user-box">
                        <input type="password" name="" required="true" placeholder="Password"/>
                           
                    </div>
                    <div className="user-submit">
                        <button onClick={fetchUserName} >Enviar</button>
                    </div>             
            </form>

            <h6>Si no estas registrada <a onClick={() =>  navigate('/registro')} href='#'>haz click aqui.</a></h6>
        </div>
        </>
     )
}
export default Login;