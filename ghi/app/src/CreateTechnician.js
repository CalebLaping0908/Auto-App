import React, {useEffect, useState} from 'react';

function CreateTechnician(props) {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.employee_number = employee_number;

        const appointmentUrl = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        },
    };

    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
        const newTechnician = await response.json();
        setName('');
        setEmployeeNumber('');
        props.getTechnicians();
    }
}

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const [employee_number, setEmployeeNumber] = useState('');
    const handleEmployeeNumberChange = (event) => {
        const value = event.target.value;
        setEmployeeNumber(value);
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Hire a technician!</h1>
            <form onSubmit={handleSubmit} id="create-appointment-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEmployeeNumberChange} value={employee_number} placeholder="Employee Number" required type="number" name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              <button className="btn btn-primary">Hire Technician</button>
            </form>
          </div>
        </div>
      </div>
      );
}

export default CreateTechnician;
