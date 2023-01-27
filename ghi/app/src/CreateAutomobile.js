import React, {useEffect, useState} from 'react';

function CreateAutomobile(props) {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.year = year;
        data.model_id = model;
        data.color = color;
        data.vin = vin;

        const automobileUrl = '	http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        },
    };

    const response = await fetch(automobileUrl, fetchConfig);
    if (response.ok) {
        const newAutomobile = await response.json();
        setYear('');
        setModel('');
        setModels([]);
        setColor('');
        setVin('');
        props.getAutomobiles();
    }
}

    const [year, setYear] = useState('');
    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const [model, setModel] = useState('');
    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value);
    }

    const [models, setModels] = useState([]);
    const fetchModelData = async () => {

        const url = 'http://localhost:8100/api/models/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setModels(data.models);
        }
    }

    const [color, setColor] = useState('');
    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    useEffect(() => {
        fetchModelData();
    }, []);


    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Build a new automobile!</h1>
            <form onSubmit={handleSubmit} id="create-automobile-form">
              <div className="form-floating mb-3">
                <input onChange={handleYearChange} value={year} placeholder="Year" required type="number" name="year" id="year" className="form-control" />
                <label htmlFor="year">Year</label>
              </div>
              <div className="mb-3">
                <select onChange={handleModelChange} required name="model" id="model" className="form-select">
                    <option value="">Select a Model</option>
                    {models.map(model => {
                        return (
                            <option key={model.id} value={model.id}>
                            {model.name}
                            </option>
                        );
                    })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleColorChange} value={color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleVinChange} value={vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">VIN</label>
              </div>
              <button className="btn btn-primary">Build automobile</button>
            </form>
          </div>
        </div>
      </div>
      );
}

export default CreateAutomobile;
