import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<UserPage />} />
  </Routes>
);

export default RoutesComponent;
