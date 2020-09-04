import React from 'react';
import { useAuth } from '../utils/hooks';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <span>Welcome, {user.name}</span>
    </div>
  );
}

export default Dashboard;
