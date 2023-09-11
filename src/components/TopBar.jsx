import React from 'react';

export const TopBar = () => {
  const user = null; //modificar/eliminar esta variable si necesario

  return (
    <div className="topbar">
      <div className="avatar-container">
        {user ? (
          <>
            {
              //insertar código aquí
            }
          </>
        ) : (
          <p>No logged user</p>
        )}
      </div>
    </div>
  );
};
