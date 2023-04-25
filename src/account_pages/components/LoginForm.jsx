import React, { useState } from 'react'
import axios from "axios"
import './css/LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const url_path = '/account/api/login/';
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded;charset=utf-8';
  axios.defaults.baseURL = `http://127.0.0.1:8000`;
  const hndlSubmit = (e) =>{
    e.preventDefault();
    axios.post(url_path, {email, password}).then(response => 
      {
        //console.log(response.data);
        // Initialize the access & refresh token in localstorage
        localStorage.clear();         
        localStorage.setItem('access_token', response.data.access);         
        localStorage.setItem('refresh_token', response.data.refresh);         
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
        // redirect to profile
        window.location.href = '/';

      }).catch(error =>{
        console.log(error);
        if(error.response.status==401){
          setAuthError('Email or Password is In correct!');
        }
      });

  };
  return (
    <>
        <form action='' id='login-form' method='post' onSubmit={hndlSubmit}>
              <h3>Login</h3>
              <h5>Welcome back! please enter your details.</h5>
              <div className='form-group'>
                <label className='col-'>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className='col- form-control login-inputs' type='text' placeholder='Enter your Email' />
              </div>
              <div className='form-group'>
                <label className='col-'>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} className='col- form-control login-inputs' type='password' placeholder='Password' />
              </div>
              <div className='form-group'>
                  <p  id='login-error' className='col-'>{authError}</p>
              </div>
              <div className='form-check m-1'>
                <input className='col- form-check-input' type='checkbox' checked readOnly />
                <label className='col- form-check-label'>Remember Me</label>
                <a className='col- ' id='login-forgot-pass' href='#'>Forgot Password</a>
              </div>
              <div className='row' id='login-btn-row'>
                <input className='col- btn btn-primary' id='login-btn' type='submit' value='Login' />
              </div>

        </form>
    </>
    
  )
}

export default LoginForm