import React from 'react';

export const UserInfo = () => {
  const user = null; //modificar/eliminar esta variable si necesario
  const login = () => {}; //modificar/eliminar esta variable si necesario

  return (
    <div className="user-container">
      {user && <h1>Hello {user.name.first}</h1>}

      <button className="login-button" onClick={login}>
        Login/Logout
      </button>
    </div>
  );
};
