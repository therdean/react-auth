import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignup = () => {
    // Perform signup logic
    setAuthenticated(true);
  };

  const handleLogin = () => {
    // Perform login logic
    setAuthenticated(true);
  };

  const Dashboard = () => {
    return <div className="dashboard">Welcome to the Dashboard!</div>;
  };

  return (
    <Router>
      <nav className="p-4 bg-blue-500 text-white">
        <Link to="/signup" className="mx-2">Sign Up</Link>
        <Link to="/login" className="mx-2">Login</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
