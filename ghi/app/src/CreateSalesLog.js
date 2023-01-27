import React, {useEffect, useState} from 'react';

function CreateSalesLog(props) {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.sales_person = salesPerson;
        data.automobile = automobile;
        data.customer = customer;
        data.purchase_price = purchasePrice;

        const sales_logUrl = 'http://localhost:8090/api/sales_log/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        },
    };

    const response = await fetch(sales_logUrl, fetchConfig);
    if (response.ok) {
        const newSaleLog = await response.json();
        setVin('');
        setSalesPerson('');
        setAutomobile('');
        setCustomer('');
        setPurchasePrice('');
        setPurchasePrices([]);
        props.getSalesLog();
    }
}

const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const [salesPerson, setSalesPerson] = useState('');
    const handleSalesPersonChange = (event) => {
        const value = event.target.value;
        setSalesPerson(value);
    }

    const [automobile, setAutomobile] = useState('');
    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }

    const [customer, setCustomer] = useState('');
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const [purchasePrice, setPurchasePrice] = useState('');
    const handlePurchasePriceChange = (event) => {
        const value = event.target.value;
        setPurchasePrice(value);
    }

    const [purchasePrices, setPurchasePrices] = useState([]);
    const fetchData = async () => {

        const url = 'http://localhost:8090/api/sales_log/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setPurchasePrices(data.purchasePrices);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={handleSubmit} id="create-sales_log-form">
              <div className="form-floating mb-3">
                <input onChange={handleVinChange} value={vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleSalesPersonChange} value={salesPerson} placeholder="Sales Person" required type="text" name="sales_person" id="sales_person" className="form-control" />
                <label htmlFor="sales_person">Sales Person</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleAutomobileChange} value={automobile} placeholder="Automobile" required type="text" name="automobile" id="automobile" className="form-control" />
                <label htmlFor="automobile">Automobile</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleCustomerChange} value={customer} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="mb-3">
                <select onChange={handlePurchasePriceChange} required name="Purchase Price" id="purchase_price" className="form-select">
                    <option value="">Purchase price</option>
                    {purchasePrices.map(purchasePrice => {
                        return (
                            <option key={sale_log.automobile} value={sale_log.automobile}>
                            {purchasePrice.customer}
                            </option>
                        );
                    })}
                </select>
              </div>
              <button className="btn btn-primary">Create Sale log</button>
            </form>
          </div>
        </div>
      </div>
      );
}

export default CreateSalesLog;
