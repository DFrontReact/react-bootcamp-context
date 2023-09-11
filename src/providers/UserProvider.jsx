import React, { useState, useContext } from 'react';
import { getUserService } from '../services/getuser.service';

const UserContext = React.createContext();

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    if (user) setUser(null);
    else
      getUserService()
        .then((user) => setUser(user))
        .catch(() => console.error('Ha ocurrido un error'));
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
