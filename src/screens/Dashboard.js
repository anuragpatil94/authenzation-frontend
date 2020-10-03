import React from 'react';
import { Button } from '../components/Buttons';
import { useAuth } from '../utils/hooks';

function Dashboard() {
  const { user, logout } = useAuth();

  const onClickLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <span>Welcome, {user?.FirstName}</span>
      <Button variant={'secondary'} onClick={onClickLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;
