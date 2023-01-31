import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext.js';
import { authUser } from '../../services/auth.js';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { type } = useParams();
  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Redirect to='/items'/>;
  }
  const submitAuth = async (e) => {
    e.preventDefault();
    try {
      const user = authUser(email, password, type);
      setUser(user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='Auth'>
      <nav className='nav'>
        <div className='nav-heading'>To Do</div>
        <NavLink to='/auth/sign-in'>Sign in</NavLink>
        <NavLink to='/auth/sign-up'>Sign Up</NavLink>
        <div className='form'>
          <form onSubmit={submitAuth}>
            <label>Email</label>
            <input type='email' placeholder='me@me.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='form-submit-btn'>Submit</button>
          </form>
        </div>
      </nav>
    </div>
  );
}
