import React, {useState} from 'react';


function CreateSalesPerson(props) {



    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.employee_number = employeeNumber


        const sales_personUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

    const response = await fetch(sales_personUrl, fetchConfig);
    if (response.ok) {
        const newSalesPerson = await response.json();
        setName("");
        setEmployeeNumber("");
        props.getSalesPerson();
    }
}


const [name, setName] = useState('');
const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
}

const [employeeNumber, setEmployeeNumber] = useState('');
const handleNumberChange = (event) => {
    const value = event.target.value;
    setEmployeeNumber(value);
}


return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Make new salesman</h1>
        <form onSubmit={handleSubmit} id="create-sales_person-form">
            <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleNumberChange} value={employeeNumber} placeholder="Number" required type="number" name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
          <button className="btn btn-primary">Create Sales Person</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default CreateSalesPerson;
