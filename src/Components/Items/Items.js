import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext.js';
import { Redirect } from 'react-router-dom';

export default function Items() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to='/auth/sign-in' />;
  }
  return (
    <div>
      <p>Task Item</p>
    </div>
  );
}