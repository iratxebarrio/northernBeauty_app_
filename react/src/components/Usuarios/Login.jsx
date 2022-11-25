 import React, { useState } from "react";
import { useNavigate } from 'react-router';
import Header from '../Header';
import LoadingSpinner from "../Spinner/LoadingSpinner";



const Login = () => {
const navigate = useNavigate()

let [userName, setUserName] = useState("");
let [password, setPassword] = useState('')
let [okLogin, setOkLogin] = useState('')

const [isLoading, setIsLoading] = useState(false);


const actions = {
    username: (valor) => setUserName(valor),
    password: (valor) => setPassword(valor)
}

const doAction = (event) => {
    const action = actions[event.target.name]
    if (action) action(event.target.value)
}

const onSubmit = (event) => {
    //evita que se ejecute la acción por defecto del boton (enviar los datos)
    event.preventDefault()
    fetchUserName()
}

const responseLogin = (response) => {
    const { ok, userName } = response
    console.log({ ok, userName })
    if (!ok) setOkLogin('Login incorrecto')
    else {
        localStorage.setItem('userName', userName) //guarda el valor en localStorage
        return navigate('/')
    }
    
}




function fetchUserName(){
    setIsLoading(true);
    fetch(`http://localhost:8000/user/login/${userName}/${password}`, {
        method: 'GET',
    })
    
    .then(response => response.json())
    .then(response => {
        responseLogin(response)
        setIsLoading(false)
    })
    .catch(() => {
        setIsLoading(false);
     });
     
}
  
    return (
        <>
        <Header />
      
        {isLoading ? <LoadingSpinner /> : 
        <div className='login_container login-box'>
            <a onClick={() =>  navigate('/')} href="#"><img className="imgCruz" src="Images/marca-x.png" alt="" /></a>
            <h3 className="login-title">Login</h3>
            <form>
                <div className="user-box">
                    <input onChange={doAction} type="text" name="username" required="true" placeholder="Username" value={userName} />
                        
                </div>
                    <div className="user-box">
                        <input onChange={doAction} type="password" name="password" required="true" placeholder="Password"/>
                           
                    </div>
                    <div className="user-submit">
                        <button onClick={onSubmit} disabled={isLoading} >Enviar</button>
                    </div>             
            </form>
            <h6>Si no estas registrada <a onClick={() =>  navigate('/registro')} href='#'>haz click aqui.</a></h6>
            <h6 className="loginError">{okLogin}</h6>
            
        </div>
            }
        </>
     )
}
export default Login;