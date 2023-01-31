import { createContext, useState } from 'react';
import { getUser } from '../Auth/Auth.js';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const currentUser = getUser();
    const [user, setUser] = useState(currentUser);
    return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>
};

export {UserProvider, UserContext};