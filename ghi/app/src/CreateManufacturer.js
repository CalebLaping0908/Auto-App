import React, {useEffect, useState} from 'react';

function CreateManufacturer(props) {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        },
    };

    const response = await fetch(manufacturerUrl, fetchConfig);
    if (response.ok) {
        const newManufacturer = await response.json();
        setName('');
        props.getManufacturers();
    }
}

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Register a new manufacturer!</h1>
            <form onSubmit={handleSubmit} id="create-model-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <button className="btn btn-primary">Register manufacturer</button>
            </form>
          </div>
        </div>
      </div>
      );
}

export default CreateManufacturer;
