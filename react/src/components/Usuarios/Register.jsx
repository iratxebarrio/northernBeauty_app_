import React from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate()
  return (
    <div className="login_container login-box">
      <a onClick={() =>  navigate('/')} href="#"><img className="imgCruz" src="Images/marca-x.png" alt="" /></a>
      <h3 className="login-title">Register</h3>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" placeholder="Nombre" />
        
        </div>
        <div className="user-box">
          <input type="text" name="" required=""  placeholder="Apellidos"/>
          
        </div>
        <div className="user-box">
          <input type="text" name="" required="" placeholder="Username" />
         
        </div>
        <div className="user-box">
          <input type="password" name="" required="" placeholder="Password" />
          
        </div>
        <div className="user-submit">
          <input type="submit" className="login-button" />
        </div>
      </form>
    </div>
  );
};

export default Register;
