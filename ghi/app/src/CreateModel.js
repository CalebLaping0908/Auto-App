import React, {useEffect, useState} from 'react';

function CreateModel(props) {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.manufacturer_id = manufacturer;
        data.picture_url = picture;

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        },
    };

    const response = await fetch(modelUrl, fetchConfig);
    if (response.ok) {
        const newModel = await response.json();
        setName('');
        setManufacturer('');
        setManufacturers([]);
        setPicture('');
        props.getModels();
    }
}

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const [manufacturer, setManufacturer] = useState('');
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const [manufacturers, setManufacturers] = useState([]);
    const fetchManufacturerData = async () => {

        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
        }
    }

    const [picture, setPicture] = useState('');
    const handlePictureChange = (event) => {
        const value = event.target.value;
        setPicture(value);
    }

    useEffect(() => {
        fetchManufacturerData();
    }, []);


    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Register a new vehicle model!</h1>
            <form onSubmit={handleSubmit} id="create-model-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="mb-3">
                <select onChange={handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                    <option value="">Select a Manufacturer</option>
                    {manufacturers.map(manufacturer => {
                        return (
                            <option key={manufacturer.id} value={manufacturer.id}>
                            {manufacturer.name}
                            </option>
                        );
                    })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePictureChange} value={picture} placeholder="Picture Url" required type="url" name="picture" id="picture" className="form-control" />
                <label htmlFor="picture">Picture Url</label>
              </div>
              <button className="btn btn-primary">Register model</button>
            </form>
          </div>
        </div>
      </div>
      );
}

export default CreateModel;
