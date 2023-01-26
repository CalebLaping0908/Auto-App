import React, {useEffect, useState} from 'react';

function ListAppointments({appointments, setAppointments, getAppointments}) {
    const deleteAppointment = async(appointment) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${appointment.id}/`;
        const fetchConfig = {
            method: "delete",
        }
        const response = await fetch(appointmentUrl, fetchConfig)
        if (response.ok) {
            getAppointments();
        }
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        const appointmentUrl = `http://localhost:8080/api/appointments/${vin}`;
        const fetchConfig = {
            method: "get",
        }
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const data = await response.json()
            setAppointments(data.appointments);
        }
    };

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    return (
    <div className='container'>
        <p></p>
        <h4>Search Appointment by VIN</h4>
        <form onSubmit={handleSubmit} id="filter-appointments-form">
            <input onChange={handleVinChange} value={vin} type="search" className="form-control rounded" placeholder="VIN" aria-label="Search" aria-describedby="search-addon" />
            <button className="btn btn-outline-primary">search</button>
        </form>
        <p></p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Date</th>
            <th>Reason</th>
            <th>VIP</th>
            <th>Technician</th>
            <th>VIN</th>
          </tr>
        </thead>
        <tbody>
        {appointments.map(appointment => {
          return (
            <tr key={appointment.id}>
              <td>{ appointment.owner }</td>
              <td>{ appointment.time }</td>
              <td>{ appointment.reason }</td>
              <td>{ String(appointment.vip) }</td>
              <td>{ appointment.technician.name }</td>
              <td>{ appointment.vin }</td>
              <td><button type="button" class="btn btn-success" onClick={() => deleteAppointment(appointment)}>Complete</button></td>
              <td><button className="btn btn-danger" onClick={() => deleteAppointment(appointment)}>Cancel</button></td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
    )
}


export default ListAppointments
