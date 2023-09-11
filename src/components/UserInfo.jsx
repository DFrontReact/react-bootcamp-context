import React, { useContext } from 'react';
import { useUserContext } from '../providers/UserProvider';

export const UserInfo = () => {
  const { user, login } = useUserContext();

  return (
    <div>
      {user && <h1>Hello {user.name.first}</h1>}

      <button onClick={login}>Login/Logout</button>

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
