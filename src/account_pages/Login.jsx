import React from 'react'
import LoginAside from './components/LoginAside'
import LoginForm from './components/LoginForm'
import './Login.css'

const Login = () => {
  document.getElementById("title").innerText = "Login";
  return (
    <>
      <section id="login-page" className='container-fluid'>
        <div id="login-row" className='row'>
          <div  id="login-logo-col" className='col'>
            <LoginAside />
          </div>
          <div className='col'>
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Login