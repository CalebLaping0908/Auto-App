import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListAppointments from './ListAppointments';
import CreateAppointment from './CreateAppointment';
import { useEffect, useState } from 'react';

function App() {

  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const appointmentsResponse = await fetch('http://localhost:8080/api/appointments/');

    if (appointmentsResponse.ok) {
      const appointmentData = await appointmentsResponse.json();

      setAppointments(appointmentData.appointments);
    }
  }

  const [technicians, setTechnicians] = useState([]);

  const getTechnicians = async () => {
    const techniciansResponse = await fetch('http://localhost:8080/api/technicians/');

    if (techniciansResponse.ok) {
      const technicianData = await techniciansResponse.json();

      setTechnicians(technicianData.technicians);
    }
  }

  useEffect(() => {
    getAppointments();
    getTechnicians();
  }, [])






  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/appointments" element={<ListAppointments appointments={appointments} getAppointments={getAppointments} />} />
          <Route path="/create/appointment" element={<CreateAppointment getAppointments={getAppointments} getTechnicians={getTechnicians}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
