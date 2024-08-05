import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAddress, createUser, deleteUser, fetchAddresses, fetchUser, updateAddress, updateUser } from '../api';
import AddressForm from './AddressForm';

const UserForm = ({ edit }) => {
  const [numberOfAddresses, setNumberOfAddresses] = useState(1);
  const [addresses, setAddresses] = useState([{ street: '', city: '', state: '', postal_code: '', country: ''}]);
  const [userId, setUserId] = useState()
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({name :'', surname: '', cpf: '', date_of_birth: ''});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (edit) {
        const params = window.location.pathname.split("/")
        const user_id = params[params.length - 1]
        setUserId(user_id)

        const user_req = await fetchUser(user_id)
        const user = user_req.data
        setFormData({ name: user.name, surname: user.surname, cpf: user.cpf, date_of_birth: user.date_of_birth });

        const addresses_req = await fetchAddresses(user_id)
        setAddresses(addresses_req.data)
        setNumberOfAddresses(addresses_req.data.length)
      }
    }
    fetchData()
  }, []);

  async function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false)
  }

  async function testRequirements(){
    let returnVar = true
    const inputs = document.getElementsByTagName('input')

    for (var i = 0; i < inputs.length; i ++){
      returnVar = returnVar && (inputs[i].value !== '')
    }

    return returnVar
  }

  async function submitFunction() {
    const submit = await testRequirements()

    if (submit){
      let thisUser
      if (edit) {
        thisUser = await updateUser(userId, formData)
      } else {
        thisUser = await createUser(formData)
      }

      addresses.map(address => {
        if (address.id) {
          address["userId"] = thisUser.data.id
          updateAddress(address.id, address)
        }
        else {
          address["userId"] = thisUser.data.id
          createAddress(address)
        }
      })
      navigate('/');
    }
    else {
      setError(true)
    }
  };

  async function deleteUserFunction() {
    await deleteUser(userId)
    navigate('/');
  }

  async function addAddressFunction() {
    let allAddresses = addresses
    allAddresses.push({ street: '', city: '', state: '', postal_code: '', country: ''})
    setAddresses(allAddresses)
    setNumberOfAddresses(numberOfAddresses + 1)
  }

  return (
    <>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Surname:</label>
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
      </div>
      <div>
        <label>CPF:</label>
        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
      </div>
      

      {
        Array.from({ length: numberOfAddresses }).map((_, i) => 
        <AddressForm 
          edit={edit} 
          setAddresses={setAddresses} 
          addresses={addresses} 
          index={i} 
          setError={setError}/>
        )
      }
      <button onClick={addAddressFunction}>Add Address</button>

    <button onClick={submitFunction}>{edit ? 'Update' : 'Create'} User</button>
    {edit && <button onClick={deleteUserFunction}>Delete User</button>}
    {error && <p> Not all fields have been completed</p>}
    </>
  );
};

export default UserForm;
