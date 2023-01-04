import React from 'react'
import './cssStyles/login.css'
export default function Login() {
   function func(){
       localStorage.setItem('login', true)
    }
  return (
    <div>
        <form>
    <h1>Login</h1>
    <p style={{color: 'blue'}}>its a fake login using localStorage </p>
    <div className="content">
      <div className="input-field">
        <input type="email" placeholder="Email" autoComplete="false"/>
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" autoComplete="false"/>
      </div>
      <a  className="link">Forgot Your Password?</a>
    </div>
    <div className="action">
      <button>Register</button>
      <button onClick={func}>Sign in</button>
    </div>
  </form>
    </div>
  )
}
