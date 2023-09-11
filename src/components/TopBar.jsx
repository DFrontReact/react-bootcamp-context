import React from 'react';
import { useUser } from '../hooks/useUser';

export const TopBar = () => {
  const { user } = useUser();
  const { first, last } = user?.name ? user.name : {};
  const { thumbnail } = user?.picture ? user?.picture : {};

  return (
    <div className="topbar">
      <div className="avatar-container">
        {user ? (
          <>
            <p>{`Hi, ${first} ${last}`}</p>
            <img src={thumbnail} />
          </>
        ) : (
          <p>No logged user</p>
        )}
      </div>
    </div>
  );
};
