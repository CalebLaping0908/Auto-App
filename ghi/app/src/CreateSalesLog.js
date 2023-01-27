import React, {useState, useEffect} from 'react';

function CreateSalesLog({getSalesLog}) {



    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.sales_person = salesPersonInput;
        data.automobile = automobileInput;
        data.customer = customerInput;
        data.purchase_price = purchasePriceInput


        const sales_logUrl = 'http://localhost:8090/api/sales_log/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

    const response = await fetch(sales_logUrl, fetchConfig);
    if (response.ok) {
        const newSalesLog = await response.json();
        setSalesPersonInput("");
        setAutomobileInput("");
        setCustomerInput("");
        setPurchasePriceInput("");
        setSalesPersonsInput([]);
        setAutomobilesInput([]);
        setCustomersInput([]);
        getSalesLog();
    }
}


    const [salesPersonInput, setSalesPersonInput] = useState('');
    const handleSalesPersonChange = (event) => {
        const value = event.target.value;
        setSalesPersonInput(value);
    }

    const [salesPersonsInput, setSalesPersonsInput] = useState([]);
    const fetchSalesPersonData = async () => {

        const url = 'http://localhost:8090/api/sales/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setSalesPersonsInput(data.sales_person);
        }
    }

    const [automobileInput, setAutomobileInput] = useState('');
    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobileInput(value);
    }

    const [automobilesInput, setAutomobilesInput] = useState([]);
    const fetchAutomobileData = async () => {

        const url = 'http://localhost:8100/api/automobiles/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setAutomobilesInput(data.autos);
        }
    }

    const [customerInput, setCustomerInput] = useState('');
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomerInput(value);
    }

    const [customersInput, setCustomersInput] = useState([]);
    const fetchCustomerData = async () => {

        const url = 'http://localhost:8090/api/customer/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setCustomersInput(data.customer);
        }
    }

    const [purchasePriceInput, setPurchasePriceInput] = useState('');
    const handlePurchasePriceChange = (event) => {
        const value = event.target.value;
        setPurchasePriceInput(value);
      }

      useEffect(() => {
        fetchSalesPersonData();
        fetchAutomobileData();
        fetchCustomerData();
    }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={handleSubmit} id="create-sales_log-form">
              <div className="mb-3">
                <select onChange={handleSalesPersonChange} required name="Sales Person" id="sales_person" className="form-select">
                    <option value="">Sales Person</option>
                    {salesPersonsInput.map(sales_person => {
                        return (
                            <option key={sales_person.id} value={sales_person.id}>
                            {sales_person.name}
                            </option>
                        );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={handleAutomobileChange} required name="Automobile" id="automobile" className="form-select">
                    <option value="">Automobile's VIN</option>
                    {automobilesInput.map(automobile => {
                        return (
                            <option key={automobile.vin} value={automobile.vin}>
                            {automobile.vin}
                            </option>
                        );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={handleCustomerChange} required name="Customer" id="customer" className="form-select">
                    <option value="">Customer</option>
                    {customersInput.map(customers => {
                        return (
                            <option key={customers.id} value={customers.id}>
                            {customers.name}
                            </option>
                        );
                    })}
                </select>
              </div>
                <input onChange={handlePurchasePriceChange} value={purchasePriceInput} placeholder="Purchase Price" required type="number" name="purchase_price" id="purchase_price" className="form-control" />
              <button className="btn btn-primary">Create Sale log</button>
            </form>
          </div>
        </div>
      </div>
      );
}

export default CreateSalesLog;
