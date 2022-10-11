import React from 'react'
import { useNavigate } from 'react-router';
import Header from '../Header'


const Login = () => {
const navigate = useNavigate()
  
    return (
        <>
        <Header />
        <div className='login_container login-box'>
            <a onClick={() =>  navigate('/')} href="#"><img className="imgCruz" src="Images/marca-x.png" alt="" /></a>
            <h3 className="login-title">Login</h3>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="true" placeholder="Username" />
                        
                </div>
                    <div className="user-box">
                        <input type="password" name="" required="true" placeholder="Password"/>
                           
                    </div>
                    <div className="user-submit">
                        <input type="submit" className="login-button"/>
                    </div>             
            </form>

            <h6>Si no estas registrada <a onClick={() =>  navigate('/registro')} href='#'>haz click aqui.</a></h6>
        </div>
        </>
     )
}
export default Login;