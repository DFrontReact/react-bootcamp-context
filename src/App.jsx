import React from 'react';
import { UserInfo, TopBar } from './components';
import UserProvider from './providers/UserProvider';
import './style.css';

const App = () => (
  <UserProvider>
    <TopBar />
    <UserInfo />
  </UserProvider>
);

export default App;
