import React, {useState} from 'react';

function CreateSalesLog({automobiles, customer, salesPerson, setSalesPerson, setAutomobiles, setCustomer, getSalesLog}) {



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
        setSalesPerson([]);
        setAutomobiles([]);
        setCustomer([]);
        getSalesLog();
    }
}


    const [salesPersonInput, setSalesPersonInput] = useState('');
    const handleSalesPersonChange = (event) => {
        const value = event.target.value;
        setSalesPersonInput(value);
    }

    const [automobileInput, setAutomobileInput] = useState('');
    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobileInput(value);
    }

    const [customerInput, setCustomerInput] = useState('');
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomerInput(value);
    }

    const [purchasePriceInput, setPurchasePriceInput] = useState('');
    const handlePurchasePriceChange = (event) => {
        const value = event.target.value;
        setPurchasePriceInput(value);
      }
// // const [vin, setVin] = useState('');
// //     const handleVinChange = (event) => {
// //         const value = event.target.value;
// //         setVin(value);
// //     }



    // const [salesPersons, setSalesPersons] = useState([]);
    // const fetchDataSalesPerson = async () => {

    //     const urlSalesPerson = 'http://localhost:8090/api/sales/';

    //     const responseSalesPerson = await fetch(urlSalesPerson);

    //     if (responseSalesPerson.ok) {
    //     const data = await responseSalesPerson.json();
    //     setSalesPersons(data.sales_person);
    //     }
    // }

    // const [automobiles, setAutomobiles] = useState([]);
    // const fetchDataAutomobiles = async () => {

    //     const urlAutomobiles = 'http://localhost:8100/api/automobiles/';

    //     const responseAutomobiles = await fetch(urlAutomobiles);

    //     if (responseAutomobiles.ok) {
    //     const data = await responseAutomobiles.json();
    //     setAutomobiles(data.autos);
    //     }
    // }

    // const [customers, setCustomers] = useState([]);
    // const fetchDataCustomers = async () => {

    //     const urlCustomer = 'http://localhost:8090/api/customer/';

    //     const responseCustomer = await fetch(urlCustomer);

    //     if (responseCustomer.ok) {
    //     const data = await responseCustomer.json();
    //     setCustomers(data.customer);
    //     }
    // }
    // useEffect(() => {
    //     fetchDataCustomers();
    //     fetchDataAutomobiles();
    //     fetchDataSalesPerson();
    // }, []);


    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={handleSubmit} id="create-sales_log-form">
              <div className="mb-3">
                <select onChange={handleSalesPersonChange} required name="Sales Person" id="sales_person" className="form-select">
                    <option value="">Sales Person</option>
                    {salesPerson.map(sales_person => {
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
                    {automobiles.map(automobile => {
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
                    {customer.map(customers => {
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
