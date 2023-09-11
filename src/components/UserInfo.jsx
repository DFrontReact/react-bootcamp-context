import React from 'react';
import { useUser } from '../hooks/useUser';

export const UserInfo = () => {
  const { user, login } = useUser();

  return (
    <div className="user-container">
      {user && <h1>Hello {user.name.first}</h1>}

      <button className="login-button" onClick={login}>
        Login/Logout
      </button>
    </div>
  );
};
