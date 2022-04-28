import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import {auth, provider} from '../../firebase'



const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();


  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const addLoginHandler = (e) => {
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then((auth)=> {
        navigate('/jobform')
    })
    .catch(error=> alert(error.message))
  }

  const registerHandler = (e) =>{
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth)=> {
        if(auth){
          navigate('/jobform')
        }
      })
      .catch(error=> alert(error.message))
    }

    const onSignInHandler = () => {
      auth.signInWithPopup(provider)
      .then((auth)=>{
        if(auth){
          navigate('/jobform')
        }
      })
      .catch(error=> alert(error.message))
    }
  return (
    <React.Fragment>
      <section id="login">
      <h1 className="head-primary">Sign In</h1>
      <div id="login-box">
        <form action="">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={emailHandler} id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password}  onChange={passwordHandler} id="password"/>
          </div>
            <button className="login__btn" onClick={addLoginHandler}>Submit</button>
        </form>
      </div>
    </section>
    <div className='new__account'>
        <span className='create__new__account' onClick={registerHandler}>Create New Account </span>or <span className='signin__google' onClick={onSignInHandler}>Sign in With Google</span>
    </div>
  </React.Fragment>

  )
}

export default Login
