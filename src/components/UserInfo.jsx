import React, { useContext } from 'react';
import { useUser } from '../hooks/useUser';

export const UserInfo = () => {
  const { user, login } = useUser();

  return (
    <div>
      {user && <h1>Hello {user.name.first}</h1>}

      <button onClick={login}>Login/Logout</button>

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
