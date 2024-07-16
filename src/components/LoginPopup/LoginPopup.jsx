import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {

  const [currState,setCurrState] = useState ("Login")

  return (
    <div className='login-popup'>
    <form className='login-popup-container'>
      <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="login-popup-inputs">
        {currState=="Login"?<></>:<input type="text" placeholder='Su nombre' required />}
        <input type="email" placeholder='Su email' required />
        <input type="password" placeholder='Password' required />
      </div>
      <button>{currState=="Sign Up"?"Crear Cuenta":"Login"}</button>
      <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>Para continuar, usted acepta los términos de uso & políticas de privacidad.</p>
      </div>
      {currState=="Login"
      ?<p>¿Crear nueva cuenta? <span onClick={()=>setCurrState("Sign Up")} >Click aquí</span></p>
      :<p>¿Ya tiene una cuenta? <span onClick={()=>setCurrState("Login")} >Ingrese aquí</span></p>
      }
    </form>
    </div>
  )
}

export default LoginPopup