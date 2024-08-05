import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const fetchUsers = async () => {
  return await axios.get(`${API_URL}/users`);
};

export const createUser = async (user) => {
  return await axios.post(`${API_URL}/users`, user);
};

export const updateUser = async (userId, user) => {
  return await axios.put(`${API_URL}/users/${userId}`, user);
};

export const deleteUser = async (userId) => {
  return await axios.delete(`${API_URL}/users/${userId}`);
};

export const fetchUser = async (userId) => {
  return await axios.get(`${API_URL}/users/${userId}`);
};

export const fetchAddress = async (addressId) => {
  return await axios.get(`${API_URL}/addresses/${addressId}`);
};

export const createAddress = async (address) => {
  return await axios.post(`${API_URL}/addresses`, address);
};

export const fetchAddresses = async (userId) => {
  return await axios.get(`${API_URL}/addresses/user/${userId}`);
};

export const updateAddress = async (addressId, address) => {
  return await axios.put(`${API_URL}/addresses/${addressId}`, address);
};

export const deleteAddress = async (addressId) => {
  return await axios.delete(`${API_URL}/addresses/${addressId}`);
};