import React from 'react';
import { UserContext } from '../../Context/UserContext.js';
import { useContext } from 'react';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(user);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <h1>
        To-do List
      </h1>
    </div>
  );
}
