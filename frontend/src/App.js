import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import AddressForm from './components/AddressForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/create" element={<UserForm />} />
        <Route path="/users/edit/:id" element={<UserForm edit={true} />} />
        <Route path="/addresses/create/" element={<AddressForm />} />
        <Route path="/addresses/edit/:id" element={<AddressForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
