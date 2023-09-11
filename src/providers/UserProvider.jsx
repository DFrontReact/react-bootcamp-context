import React, { useState, useContext } from 'react';
import { getUserService } from '../services/getuser.service';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    if (user) setUser(null);
    else
      getUserService()
        .then((user) => setUser(user))
        .catch(() => console.error('Ha ocurrido un error'));
  };

  //editar componente si necesario
  return <>{children}</>;
};

export default UserProvider;
