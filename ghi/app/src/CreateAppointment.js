import React, {useEffect, useState} from 'react';

function CreateAppointment(props) {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.owner = owner;
        data.time = time;
        data.reason = reason;
        data.technician = technician;

        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        },
    };

    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
        const newAppointment = await response.json();
        setVin('');
        setOwner('');
        setTime('');
        setReason('');
        setTechnician('');
        setTechnicians([]);
        props.getAppointments();
    }
}

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const [owner, setOwner] = useState('');
    const handleOwnerChange = (event) => {
        const value = event.target.value;
        setOwner(value);
    }

    const [time, setTime] = useState('');
    const handleTimeChange = (event) => {
        const value = event.target.value;
        setTime(value);
    }

    const [reason, setReason] = useState('');
    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const [technician, setTechnician] = useState('');
    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const [technicians, setTechnicians] = useState([]);
    const fetchData = async () => {

        const url = 'http://localhost:8080/api/technicians/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technicians);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Make an appointment!</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input onChange={handleVinChange} value={vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleOwnerChange} value={owner} placeholder="Owner" required type="text" name="owner" id="owner" className="form-control" />
                <label htmlFor="owner">Owner</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleTimeChange} value={time} placeholder="Time" required type="date" name="time" id="time" className="form-control" />
                <label htmlFor="time">Time</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleReasonChange} value={reason} placeholder="Reason for Visit" required type="text" name="reason" id="reason" className="form-control" />
                <label htmlFor="reason">Reason</label>
              </div>
              <div className="mb-3">
                <select onChange={handleTechnicianChange} required name="technician" id="technician" className="form-select">
                    <option value="">Select a Technician</option>
                    {technicians.map(technician => {
                        return (
                            <option key={technician.employee_number} value={technician.employee_number}>
                            {technician.name}
                            </option>
                        );
                    })}
                </select>
              </div>
              <button className="btn btn-primary">Set appointment</button>
            </form>
          </div>
        </div>
      </div>
      );
}

export default CreateAppointment;
