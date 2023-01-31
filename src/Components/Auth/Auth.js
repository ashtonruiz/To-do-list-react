import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitAuth = async () => {

  };

  return (
    <div className='Auth'>
      <nav className='nav'>
        <div className='nav-heading'>To Do</div>
        <NavLink to='/auth/sign-in'>Sign in</NavLink>
        <NavLink to='/auth/sign-up'>Sign Up</NavLink>
      </nav>
    </div>
  );
}
