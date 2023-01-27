import React, {useState} from 'react';


function CreateCustomer(props) {



    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.address = address;
        data.phone_number = phoneNumber;


        const customerUrl = 'http://localhost:8090/api/customer/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

    const response = await fetch(customerUrl, fetchConfig);
    if (response.ok) {
        const newCustomer = await response.json();
        setName("");
        setAddress("");
        setPhoneNumber("")
        props.getCustomer();
    }
}


const [name, setName] = useState('');
const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
}

const [address, setAddress] = useState('');
const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
}

const [phoneNumber, setPhoneNumber] = useState('');
const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
}


return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Make New Customer</h1>
        <form onSubmit={handleSubmit} id="create-sales_person-form">
            <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleAddressChange} value={address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Phone Number" required type="number" name="phone_number" id="phone_number" className="form-control" />
                <label htmlFor="phone_number">Phone Number</label>
              </div>
          <button className="btn btn-primary">Create Customer</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default CreateCustomer;
