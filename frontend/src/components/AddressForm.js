import React, { useState, useEffect } from 'react';
import { deleteAddress } from '../api';

const AddressForm = ({ edit, index, setAddresses, addresses, setError }) => {
  const [formdata, setFormdata] = useState({ street: '', city: '', state: '', postal_code: '', country: ''});

  useEffect(() => {
    if (edit){
      setFormdata(addresses[index])
    }
  })

  const handleChange = (e) => {
    const form = { ...formdata, [e.target.name]: e.target.value }
    setFormdata(form);

    let allAddresses = addresses
    allAddresses[index] = form

    setAddresses(allAddresses)
    setError(false)
  };

  function deleteAddressFunction(){
    deleteAddress(addresses[index].id)
  }

  return (
    <form>
      <div>
        <label>Street:</label>
        <input type="text" name="street" value={formdata.street} onChange={handleChange} required />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={formdata.city} onChange={handleChange} required />
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={formdata.state} onChange={handleChange} required />
      </div>
      <div>
        <label>ZIP:</label>
        <input type="text" name="postal_code" value={formdata.postal_code} onChange={handleChange} required />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" name="country" value={formdata.country} onChange={handleChange} required />
      </div>
      {edit && addresses[index].id && <button onClick={deleteAddressFunction}>Delete Address</button>}
    </form>
  );
};

export default AddressForm;
