function ListAppointments(props) {
    const deleteAppointment = async(appointment) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${appointment.id}/`;
        const fetchConfig = {
            method: "delete",
        }
        const response = await fetch(appointmentUrl, fetchConfig)
        if (response.ok) {
            props.getAppointments();
        }
    }
    return (
        <div className='container'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Time</th>
            <th>Reason</th>
            <th>VIP</th>
            <th>Technician</th>
            <th>VIN</th>
          </tr>
        </thead>
        <tbody>
        {props.appointments.map(appointment => {
          return (
            <tr key={appointment.id}>
              <td>{ appointment.owner }</td>
              <td>{ appointment.time }</td>
              <td>{ appointment.reason }</td>
              <td>{ String(appointment.vip) }</td>
              <td>{ appointment.technician.name }</td>
              <td>{ appointment.vin }</td>
              <td><button class="btn btn-danger" onClick={() => deleteAppointment(appointment)}>Delete</button></td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
    )
}

export default ListAppointments
